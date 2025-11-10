#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { StaticSiteStack } from "../lib/static-site-stack";
import { ExistingSiteStack } from "../lib/existing-site-stack";
import * as path from "path";

const app = new cdk.App();

// AWS Account and Region
const env = {
  account: "762233732500",
  region: "us-east-1", // Must be us-east-1 for CloudFront certificates
};

const hostedZoneName = "kavzorn.click";

// ===== EXISTING APPS (Already Deployed, CDK manages deployments only) =====

// Web App - Main Website
new ExistingSiteStack(app, "KavzornWebStack", {
  env,
  bucketName: "kavzorn.click",
  distributionId: "E2OT5KROQI1CE1",
  sourcePath: path.join(__dirname, "../../apps/web/out"),
  appName: "Web",
  description: "Kavzorn main website (existing infrastructure)",
});

// Digital Clock App
new ExistingSiteStack(app, "KavzornDigitalClockStack", {
  env,
  bucketName: "digitalclock.kavzorn.click",
  distributionId: "E2GE78NGHXPKM1",
  sourcePath: path.join(__dirname, "../../apps/digital-clock/out"),
  appName: "DigitalClock",
  description: "Kavzorn Digital Clock app (existing infrastructure)",
});

// Analog Clock App
new ExistingSiteStack(app, "KavzornAnalogClockStack", {
  env,
  bucketName: "analogclock.kavzorn.click",
  distributionId: "EW8J885DADCQ2",
  sourcePath: path.join(__dirname, "../../apps/analog-clock/out"),
  appName: "AnalogClock",
  description: "Kavzorn Analog Clock app (existing infrastructure)",
});

// NOTE: Web, DigitalClock, and AnalogClock are already deployed manually
// Uncomment these if you want CDK to manage them (will import existing resources)

// // Web App
// new StaticSiteStack(app, "KavzornWebStack", {
//   env,
//   domainName: "kavzorn.click",
//   hostedZoneName,
//   sourcePath: path.join(__dirname, "../../apps/web/out"),
//   appName: "Web",
//   description: "Kavzorn main website",
// });

// // Digital Clock App
// new StaticSiteStack(app, "KavzornDigitalClockStack", {
//   env,
//   domainName: "digitalclock.kavzorn.click",
//   hostedZoneName,
//   sourcePath: path.join(__dirname, "../../apps/digital-clock/out"),
//   appName: "DigitalClock",
//   description: "Kavzorn Digital Clock app",
// });

// // Analog Clock App
// new StaticSiteStack(app, "KavzornAnalogClockStack", {
//   env,
//   domainName: "analogclock.kavzorn.click",
//   hostedZoneName,
//   sourcePath: path.join(__dirname, "../../apps/analog-clock/out"),
//   appName: "AnalogClock",
//   description: "Kavzorn Analog Clock app",
// });

// ===== NEW APPS TO DEPLOY =====

// Background Removal App
new StaticSiteStack(app, "KavzornBgStack", {
  env,
  domainName: "bg.kavzorn.click",
  hostedZoneName,
  sourcePath: path.join(__dirname, "../../apps/bg/out"),
  appName: "BackgroundRemoval",
  description: "Kavzorn Background Removal app",
});

// Format Changer App
new StaticSiteStack(app, "KavzornFormatStack", {
  env,
  domainName: "format.kavzorn.click",
  hostedZoneName,
  sourcePath: path.join(__dirname, "../../apps/format/out"),
  appName: "FormatChanger",
  description: "Kavzorn Format Changer app",
});

// Image Resize App
new StaticSiteStack(app, "KavzornResizeStack", {
  env,
  domainName: "resize.kavzorn.click",
  hostedZoneName,
  sourcePath: path.join(__dirname, "../../apps/resize/out"),
  appName: "ImageResize",
  description: "Kavzorn Image Resize app",
});

// Speed Test App
new StaticSiteStack(app, "KavzornNetfastStack", {
  env,
  domainName: "netfast.kavzorn.click",
  hostedZoneName,
  sourcePath: path.join(__dirname, "../../apps/netfast/out"),
  appName: "SpeedTest",
  description: "Kavzorn Speed Test app",
});

app.synth();
