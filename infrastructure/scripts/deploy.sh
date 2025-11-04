#!/bin/bash
set -e

# Load environment variables (skip comments)
export $(grep -v '^#' ../.env | xargs)

# App to deploy (optional argument)
APP=$1

if [ -z "$APP" ]; then
  echo "🚀 Deploying ALL Kavzorn stacks..."
  npx cdk deploy --all --profile $AWS_PROFILE --require-approval never
else
  echo "🚀 Deploying $APP stack..."
  npx cdk deploy "Kavzorn${APP}Stack" --profile $AWS_PROFILE --require-approval never
fi

echo "✅ Deployment complete!"
