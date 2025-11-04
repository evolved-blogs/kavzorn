# Kavzorn Infrastructure

This directory contains AWS CDK infrastructure code for deploying all Kavzorn apps to AWS CloudFront, S3, and Route53.

## Prerequisites

1. **AWS Account** - You need an AWS account with PowerUserAccess permissions
2. **AWS CLI** - Install and configure AWS CLI v2
3. **Node.js** - Node.js 18+ installed
4. **pnpm** - Package manager for the monorepo

## AWS Profile Setup

1. Configure the `kavzorn` AWS profile:

```bash
aws configure --profile kavzorn
```

Enter your credentials:

- AWS Access Key ID
- AWS Secret Access Key
- Default region: `us-east-1` (required for CloudFront certificates)
- Default output format: `json`

2. Verify the profile:

```bash
export AWS_PROFILE=kavzorn
aws sts get-caller-identity
```

## Current Infrastructure

✅ **Already Deployed:**

- Route53 Hosted Zone: `kavzorn.click` (ID: Z0898448301BEO9WUOOK0)
- S3 + CloudFront: `kavzorn.click` (main website)
- S3 + CloudFront: `digitalclock.kavzorn.click`
- S3 + CloudFront: `analogclock.kavzorn.click`

🚧 **To Be Deployed:**

- `bg.kavzorn.click` (Background Remover)
- `format.kavzorn.click` (Format Changer)
- `resize.kavzorn.click` (Image Resizer)
- `netfast.kavzorn.click` (Speed Test)

## Quick Start

### 1. Install Dependencies

```bash
cd infrastructure
pnpm install
```

### 2. Build All Frontend Apps

```bash
# From the root of the project
pnpm build
```

This will build all apps in the `apps/` directory and generate static files in their `out/` folders.

### 3. Bootstrap CDK (First Time Only)

```bash
cd infrastructure
./scripts/synth.sh
```

This will:

- Build all apps
- Bootstrap CDK in your AWS account
- Synthesize CloudFormation templates

### 4. Deploy Infrastructure

**Deploy all remaining apps:**

```bash
./scripts/deploy.sh
```

**Deploy a specific app:**

```bash
./scripts/deploy.sh BackgroundRemoval
./scripts/deploy.sh FormatChanger
./scripts/deploy.sh ImageResize
./scripts/deploy.sh SpeedTest
```

**List all stacks:**

```bash
./scripts/list.sh
```

## Deployment Scripts

- `./scripts/synth.sh` - Build apps and synthesize CDK templates
- `./scripts/deploy.sh [AppName]` - Deploy all or specific app
- `./scripts/list.sh` - List all CDK stacks
- `./scripts/destroy.sh <AppName>` - Destroy a specific stack

## What Gets Created

For each app, the CDK stack creates:

1. **S3 Bucket** - Stores static files (e.g., `bg.kavzorn.click`)
2. **CloudFront Distribution** - CDN for global content delivery
3. **SSL Certificate** - AWS Certificate Manager (ACM) certificate for HTTPS
4. **Route53 Records** - DNS A and AAAA records pointing to CloudFront
5. **CloudFront OAI** - Origin Access Identity for S3 bucket security
6. **Bucket Policies** - Secure access from CloudFront only

## Architecture

```
User Request
    ↓
Route53 (DNS: bg.kavzorn.click)
    ↓
CloudFront (CDN + HTTPS)
    ↓
S3 Bucket (Static Files)
```

## Environment Variables

The `.env` file in the infrastructure directory contains:
cd ../resize && pnpm build
cd ../netfast && pnpm build

````

Or use turbo from root:

```bash
pnpm build
````

## Deployment

### Deploy All Apps

```bash
cd infrastructure
npm run deploy
```

### Deploy Individual Apps

```bash
npm run deploy:web              # Deploy main website
npm run deploy:digital-clock    # Deploy digital clock
npm run deploy:analog-clock     # Deploy analog clock
npm run deploy:bg               # Deploy background removal
npm run deploy:format           # Deploy format changer
npm run deploy:resize           # Deploy image resize
npm run deploy:netfast          # Deploy speed test
```

## What Gets Created

For each app, the CDK will create:

1. **S3 Bucket** - Stores static files
2. **CloudFront Distribution** - CDN for fast global delivery
3. **ACM Certificate** - SSL/TLS certificate (auto-validated)
4. **Route53 Records** - A and AAAA records pointing to CloudFront
5. **Origin Access Identity** - Secure access from CloudFront to S3

## URLs After Deployment

- Main Website: https://kavzorn.click
- Digital Clock: https://digitalclock.kavzorn.click
- Analog Clock: https://analog.kavzorn.click
- Background Removal: https://bg.kavzorn.click
- Format Changer: https://format.kavzorn.click
- Image Resize: https://resize.kavzorn.click
- Speed Test: https://netfast.kavzorn.click

## Updating Content

After making changes to your apps:

1. Build the app: `pnpm build`
2. Redeploy: `npm run deploy:appname`

The deployment will:

- Upload new files to S3
- Invalidate CloudFront cache
- Make changes live immediately

## Useful Commands

- `npm run build` - Compile TypeScript to JavaScript
- `npm run cdk synth` - Preview CloudFormation template
- `npm run cdk diff` - Compare deployed stack with current state
- `cdk destroy KavzornWebStack` - Delete a stack
- `cdk ls` - List all stacks

## Cost Optimization

- CloudFront Price Class: PRICE_CLASS_100 (US, Canada, Europe)
- S3 versioning enabled for rollback capability
- Compression enabled for faster delivery
- HTTPS redirect enforced

## Security Features

- S3 buckets are private (not public)
- CloudFront Origin Access Identity for secure access
- TLS 1.2+ enforced
- Automatic HTTPS redirect
- CORS configured for security

## Troubleshooting

### Certificate Issues

- Certificates must be in us-east-1 region for CloudFront
- DNS validation can take 30+ minutes

### Deployment Errors

- Ensure all apps are built before deploying
- Check AWS credentials are configured
- Verify hosted zone exists in Route53

### Cache Issues

- CloudFront cache invalidations happen automatically
- Manual invalidation: `aws cloudfront create-invalidation --distribution-id ID --paths "/*"`

## Support

For issues, check:

1. CloudFormation console for stack status
2. CloudFront distribution settings
3. S3 bucket contents
4. Route53 DNS records
