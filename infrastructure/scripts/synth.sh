#!/bin/bash
set -e

# Load environment variables (skip comments)
export $(grep -v '^#' ../.env | xargs)

echo "🚀 Building all frontend apps..."
cd ..
pnpm build

echo "📦 Bootstrapping CDK (if needed)..."
cd infrastructure
npx cdk bootstrap aws://$CDK_DEFAULT_ACCOUNT/$CDK_DEFAULT_REGION --profile $AWS_PROFILE

echo "🔨 Synthesizing CDK stacks..."
npx cdk synth --profile $AWS_PROFILE

echo "✅ CDK synthesis complete! Review the output and run ./deploy.sh to deploy."
