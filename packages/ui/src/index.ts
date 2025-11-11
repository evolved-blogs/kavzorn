// Re-export everything from components for backward compatibility
export * from "./components/ui/button";
export * from "./components/ui/card";
export * from "./components/ui/input";
export * from "./components/ui/label";
export * from "./components/ui/select";
export * from "./components/ui/slider";
export * from "./components/ui/badge";
export * from "./components/ui/progress";
export * from "./components/ui/tabs";
export * from "./components/ui/checkbox";

// Shared components
export { Button, buttonVariants } from "./components/ui/button";
export { default as KavzornHeader } from "./components/KavzornHeader";
export { seoConfigs, type SEOConfig, SEOHead } from "./components/SEOHead";

// Utilities
export { cn } from "./lib/utils";

// Export styles (this will be available as @kavzorn/ui/styles.css)
// The actual CSS file is exported via package.json exports
