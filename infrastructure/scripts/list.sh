#!/bin/bash
set -e

# Load environment variables (skip comments)
export $(grep -v '^#' ../.env | xargs)

# List all stacks
echo "📋 Kavzorn CDK Stacks:"
npx cdk list --profile $AWS_PROFILE

echo ""
echo "💡 Usage:"
echo "  Deploy all:           ./scripts/deploy.sh"
echo "  Deploy specific app:  ./scripts/deploy.sh Web"
echo "  Deploy specific app:  ./scripts/deploy.sh DigitalClock"
echo ""
echo "Available apps: Web, DigitalClock, AnalogClock, BackgroundRemoval, FormatChanger, ImageResize, SpeedTest"
