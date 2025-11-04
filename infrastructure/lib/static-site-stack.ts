import * as cdk from "aws-cdk-lib";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";
import * as route53 from "aws-cdk-lib/aws-route53";
import * as targets from "aws-cdk-lib/aws-route53-targets";
import * as acm from "aws-cdk-lib/aws-certificatemanager";
import { Construct } from "constructs";

export interface StaticSiteStackProps extends cdk.StackProps {
  domainName: string;
  hostedZoneName: string;
  sourcePath: string;
  appName: string;
  certificateArn?: string; // Optional: Use existing certificate ARN
}

export class StaticSiteStack extends cdk.Stack {
  public readonly bucket: s3.Bucket;
  public readonly distribution: cloudfront.Distribution;

  constructor(scope: Construct, id: string, props: StaticSiteStackProps) {
    super(scope, id, props);

    const { domainName, hostedZoneName, sourcePath, appName, certificateArn } =
      props;

    // Create S3 bucket for static website hosting
    this.bucket = new s3.Bucket(this, `${appName}Bucket`, {
      bucketName: domainName,
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "index.html",
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      autoDeleteObjects: false,
      versioned: true,
      encryption: s3.BucketEncryption.S3_MANAGED,
      cors: [
        {
          allowedMethods: [s3.HttpMethods.GET, s3.HttpMethods.HEAD],
          allowedOrigins: ["*"],
          allowedHeaders: ["*"],
        },
      ],
    });

    // Look up hosted zone
    const hostedZone = route53.HostedZone.fromLookup(
      this,
      `${appName}HostedZone`,
      {
        domainName: hostedZoneName,
      }
    );

    // Create or use existing certificate
    let certificate: acm.ICertificate;
    if (certificateArn) {
      certificate = acm.Certificate.fromCertificateArn(
        this,
        `${appName}Certificate`,
        certificateArn
      );
    } else {
      certificate = new acm.Certificate(this, `${appName}Certificate`, {
        domainName: domainName,
        validation: acm.CertificateValidation.fromDns(hostedZone),
      });
    }

    // Create CloudFront Origin Access Identity
    const originAccessIdentity = new cloudfront.OriginAccessIdentity(
      this,
      `${appName}OAI`,
      {
        comment: `OAI for ${domainName}`,
      }
    );

    // Grant read permissions to CloudFront
    this.bucket.grantRead(originAccessIdentity);

    // Create CloudFront distribution
    this.distribution = new cloudfront.Distribution(
      this,
      `${appName}Distribution`,
      {
        defaultBehavior: {
          origin: origins.S3BucketOrigin.withOriginAccessIdentity(this.bucket, {
            originAccessIdentity,
          }),
          viewerProtocolPolicy:
            cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
          cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD_OPTIONS,
          compress: true,
          cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        },
        domainNames: [domainName],
        certificate: certificate,
        minimumProtocolVersion: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
        errorResponses: [
          {
            httpStatus: 403,
            responseHttpStatus: 200,
            responsePagePath: "/index.html",
            ttl: cdk.Duration.minutes(5),
          },
          {
            httpStatus: 404,
            responseHttpStatus: 200,
            responsePagePath: "/index.html",
            ttl: cdk.Duration.minutes(5),
          },
        ],
        defaultRootObject: "index.html",
        priceClass: cloudfront.PriceClass.PRICE_CLASS_100,
        enableIpv6: true,
        comment: `CloudFront distribution for ${domainName}`,
      }
    );

    // Create Route53 A record
    new route53.ARecord(this, `${appName}ARecord`, {
      zone: hostedZone,
      recordName: domainName,
      target: route53.RecordTarget.fromAlias(
        new targets.CloudFrontTarget(this.distribution)
      ),
    });

    // Create Route53 AAAA record for IPv6
    new route53.AaaaRecord(this, `${appName}AAAARecord`, {
      zone: hostedZone,
      recordName: domainName,
      target: route53.RecordTarget.fromAlias(
        new targets.CloudFrontTarget(this.distribution)
      ),
    });

    // Deploy site contents to S3 bucket
    new s3deploy.BucketDeployment(this, `${appName}Deployment`, {
      sources: [s3deploy.Source.asset(sourcePath)],
      destinationBucket: this.bucket,
      distribution: this.distribution,
      distributionPaths: ["/*"],
      prune: true,
      retainOnDelete: false,
    });

    // Outputs
    new cdk.CfnOutput(this, `${appName}BucketName`, {
      value: this.bucket.bucketName,
      description: `S3 bucket name for ${appName}`,
    });

    new cdk.CfnOutput(this, `${appName}DistributionId`, {
      value: this.distribution.distributionId,
      description: `CloudFront distribution ID for ${appName}`,
    });

    new cdk.CfnOutput(this, `${appName}DistributionDomain`, {
      value: this.distribution.distributionDomainName,
      description: `CloudFront distribution domain for ${appName}`,
    });

    new cdk.CfnOutput(this, `${appName}URL`, {
      value: `https://${domainName}`,
      description: `URL for ${appName}`,
    });
  }
}
