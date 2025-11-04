#!/bin/bash

# Kavzorn Deployment Script
# This script builds all apps and deploys them to AWS

set -e  # Exit on error

echo "🚀 Starting Kavzorn deployment process..."

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Build all apps
echo -e "${BLUE}📦 Building all apps...${NC}"
pnpm build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ All apps built successfully${NC}"

# Step 2: Deploy to AWS
echo -e "${BLUE}☁️  Deploying to AWS CloudFront...${NC}"
cd infrastructure

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo -e "${BLUE}📥 Installing infrastructure dependencies...${NC}"
    npm install
fi

# Deploy all stacks
if [ "$1" == "--all" ] || [ -z "$1" ]; then
    echo -e "${BLUE}Deploying all stacks...${NC}"
    npm run deploy
elif [ "$1" == "--web" ]; then
    echo -e "${BLUE}Deploying web app...${NC}"
    npm run deploy:web
elif [ "$1" == "--digital-clock" ]; then
    echo -e "${BLUE}Deploying digital clock...${NC}"
    npm run deploy:digital-clock
elif [ "$1" == "--analog-clock" ]; then
    echo -e "${BLUE}Deploying analog clock...${NC}"
    npm run deploy:analog-clock
elif [ "$1" == "--bg" ]; then
    echo -e "${BLUE}Deploying background removal...${NC}"
    npm run deploy:bg
elif [ "$1" == "--format" ]; then
    echo -e "${BLUE}Deploying format changer...${NC}"
    npm run deploy:format
elif [ "$1" == "--resize" ]; then
    echo -e "${BLUE}Deploying image resize...${NC}"
    npm run deploy:resize
elif [ "$1" == "--netfast" ]; then
    echo -e "${BLUE}Deploying speed test...${NC}"
    npm run deploy:netfast
else
    echo -e "${RED}Unknown option: $1${NC}"
    echo "Usage: ./deploy.sh [--all|--web|--digital-clock|--analog-clock|--bg|--format|--resize|--netfast]"
    exit 1
fi

cd ..

echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
echo ""
echo -e "${BLUE}🌐 Your apps are now live at:${NC}"
echo "  • https://kavzorn.click"
echo "  • https://digitalclock.kavzorn.click"
echo "  • https://analog.kavzorn.click"
echo "  • https://bg.kavzorn.click"
echo "  • https://format.kavzorn.click"
echo "  • https://resize.kavzorn.click"
echo "  • https://netfast.kavzorn.click"
