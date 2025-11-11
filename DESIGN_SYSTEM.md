# 🎨 Kavzorn Design System Architecture

## Overview

The Kavzorn project now uses a completely centralized **Shadcn/UI** design system. All applications share the same components, theme configuration, and styling approach for maximum consistency and maintainability.

## 📁 Architecture

```
kavzorn/
├── packages/
│   ├── ui/                          # 🎨 Shared Shadcn UI Components
│   │   ├── src/
│   │   │   ├── components/ui/       # All Shadcn components
│   │   │   ├── lib/utils.ts         # Utility functions
│   │   │   ├── styles.css           # Global theme CSS variables
│   │   │   └── index.ts             # Component exports
│   │   ├── components.json          # Shadcn configuration
│   │   ├── tailwind.config.js       # UI package Tailwind config
│   │   └── package.json
│   │
│   └── tailwind-config/             # 🔧 Shared Tailwind Configuration
│       ├── base.js                  # Base Tailwind config
│       ├── index.ts                 # Config exports
│       └── package.json
│
└── apps/
    ├── web/                         # ✅ Using shared UI
    ├── resize/                      # ✅ Using shared UI
    ├── format/                      # ✅ Using shared UI
    ├── bg/                          # Simple apps (no UI components)
    ├── netfast/                     # Simple apps (no UI components)
    ├── digital-clock/               # Simple apps (no UI components)
    └── analog-clock/                # Simple apps (no UI components)
```

## 🎯 Design System Components

### Core UI Components (@kavzorn/ui)

| Component    | Description         | Variants                                                              |
| ------------ | ------------------- | --------------------------------------------------------------------- |
| **Button**   | Interactive buttons | default, outline, ghost, link, destructive                            |
| **Card**     | Content containers  | Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter |
| **Input**    | Form inputs         | Standard text inputs                                                  |
| **Label**    | Form labels         | Accessible labels                                                     |
| **Select**   | Dropdown menus      | Select, SelectContent, SelectItem, SelectTrigger, SelectValue         |
| **Slider**   | Range controls      | Customizable sliders                                                  |
| **Badge**    | Status indicators   | default, secondary, outline, destructive                              |
| **Progress** | Progress bars       | Linear progress indicators                                            |
| **Tabs**     | Navigation tabs     | Tabs, TabsList, TabsTrigger, TabsContent                              |
| **Checkbox** | Form checkboxes     | Boolean form controls                                                 |

### Theme System

**CSS Variables (HSL-based)**

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96%;
  --muted: 210 40% 96%;
  --accent: 210 40% 96%;
  --destructive: 0 84.2% 60.2%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 221.2 83.2% 53.3%;
  --radius: 0.75rem;
}
```

**Dark Mode Support**

```css
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* Full dark theme variables */
}
```

## 🚀 Implementation Guide

### For New Apps

1. **Add Dependencies**

```json
{
  "dependencies": {
    "@kavzorn/ui": "workspace:*",
    "@kavzorn/tailwind-config": "workspace:*"
  }
}
```

2. **Configure Tailwind**

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";
import baseConfig from "@kavzorn/tailwind-config";

export default {
  ...baseConfig,
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
} satisfies Config;
```

3. **Import Styles**

```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@import "@kavzorn/ui/styles.css";
```

4. **Use Components**

```tsx
import { Button, Card, CardContent } from "@kavzorn/ui";

export default function Page() {
  return (
    <Card>
      <CardContent>
        <Button>Hello Kavzorn!</Button>
      </CardContent>
    </Card>
  );
}
```

### For Existing Apps

All main apps (web, resize, format) have been updated to use the centralized system. The configuration is already complete.

## ✅ Current Status

| App               | UI Components   | Tailwind Config    | Status      |
| ----------------- | --------------- | ------------------ | ----------- |
| **web**           | ✅ @kavzorn/ui  | ✅ Shared config   | ✅ Complete |
| **resize**        | ✅ @kavzorn/ui  | ✅ Shared config   | ✅ Complete |
| **format**        | ✅ @kavzorn/ui  | ✅ Shared config   | ✅ Complete |
| **bg**            | ❌ No UI needed | ✅ Standard config | ✅ Working  |
| **netfast**       | ❌ No UI needed | ✅ Standard config | ✅ Working  |
| **digital-clock** | ❌ No UI needed | ✅ Standard config | ✅ Working  |
| **analog-clock**  | ❌ No UI needed | ✅ Standard config | ✅ Working  |

## 🎨 Design Tokens

### Colors

- **Primary**: Blue-based (hsl(221.2 83.2% 53.3%))
- **Secondary**: Neutral gray (hsl(210 40% 96%))
- **Destructive**: Red for errors (hsl(0 84.2% 60.2%))
- **Border**: Light gray (hsl(214.3 31.8% 91.4%))

### Border Radius

- **Large**: var(--radius) = 0.75rem
- **Medium**: calc(var(--radius) - 2px)
- **Small**: calc(var(--radius) - 4px)

### Typography

- Font family: System font stack with fallbacks
- Responsive sizing via Tailwind classes

## 🔧 Development Workflow

### Adding New Components

1. Create component in `packages/ui/src/components/ui/`
2. Follow Shadcn conventions and use `class-variance-authority`
3. Export from `packages/ui/src/index.ts`
4. Build UI package: `pnpm build`
5. Components automatically available in all apps

### Modifying Theme

1. Update CSS variables in `packages/ui/src/styles.css`
2. Modify Tailwind config in `packages/tailwind-config/base.js`
3. Changes automatically applied to all apps

### Testing Changes

```bash
# Start all apps in development
pnpm dev

# Test individual apps
# Web: http://localhost:3000
# Resize: http://localhost:3005
# Format: http://localhost:3006
```

## 💡 Benefits Achieved

✅ **Consistency** - All apps share identical design system  
✅ **Maintainability** - Single source of truth for components  
✅ **Performance** - Tree-shaking and optimized builds  
✅ **Developer Experience** - Auto-completion and type safety  
✅ **Scalability** - Easy to add new apps with consistent UI  
✅ **Theme Flexibility** - Easy dark/light mode and customization

## 🚀 Future Enhancements

- [ ] Add more Shadcn components as needed (Dialog, Sheet, Tooltip, etc.)
- [ ] Per-app theme customization (if required)
- [ ] Component documentation with Storybook
- [ ] Visual regression testing
- [ ] Performance monitoring
- [ ] Icon system integration
