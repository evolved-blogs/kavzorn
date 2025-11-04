import * as cdk from "aws-cdk-lib";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import { Construct } from "constructs";

export interface ExistingSiteStackProps extends cdk.StackProps {
  bucketName: string;
  distributionId: string;
  sourcePath: string;
  appName: string;
}

/**
 * Stack for deploying to existing S3/CloudFront infrastructure
 * This doesn't create new infrastructure, just handles deployment
 */
export class ExistingSiteStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: ExistingSiteStackProps) {
    super(scope, id, props);

    const { bucketName, distributionId, sourcePath, appName } = props;

    // Reference the existing S3 bucket (doesn't create it)
    const bucket = s3.Bucket.fromBucketName(
      this,
      `${appName}Bucket`,
      bucketName
    );

    // Reference the existing CloudFront distribution (doesn't create it)
    const distribution = cloudfront.Distribution.fromDistributionAttributes(
      this,
      `${appName}Distribution`,
      {
        distributionId: distributionId,
        domainName: `${distributionId}.cloudfront.net`, // Not used for deployment
      }
    );

    // Deploy the static files to the existing bucket
    new s3deploy.BucketDeployment(this, `${appName}Deployment`, {
      sources: [s3deploy.Source.asset(sourcePath)],
      destinationBucket: bucket,
      distribution: distribution,
      distributionPaths: ["/*"], // Invalidate all paths after deployment
    });

    // Outputs
    new cdk.CfnOutput(this, `${appName}BucketName`, {
      value: bucket.bucketName,
      description: `S3 bucket name for ${appName}`,
    });

    new cdk.CfnOutput(this, `${appName}DistributionId`, {
      value: distributionId,
      description: `CloudFront distribution ID for ${appName}`,
    });

    new cdk.CfnOutput(this, `${appName}URL`, {
      value: `https://${bucketName}`,
      description: `URL for ${appName}`,
    });
  }
}
