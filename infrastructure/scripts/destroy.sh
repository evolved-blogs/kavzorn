#!/bin/bash
set -e

# Load environment variables (skip comments)
export $(grep -v '^#' ../.env | xargs)

APP=$1

if [ -z "$APP" ]; then
  echo "❌ Please specify an app to destroy"
  echo "Usage: ./scripts/destroy.sh <AppName>"
  echo "Example: ./scripts/destroy.sh Web"
  exit 1
fi

echo "🗑️  Destroying Kavzorn${APP}Stack..."
npx cdk destroy "Kavzorn${APP}Stack" --profile $AWS_PROFILE

echo "✅ Stack destroyed!"
