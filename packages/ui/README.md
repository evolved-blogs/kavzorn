# @kavzorn/ui - Shared Shadcn UI Components

This package contains all the shared Shadcn/UI components and theme configuration for the Kavzorn applications.

## 📦 What's Included

### Components

- **Button** - Interactive button component with variants (default, outline, ghost, etc.)
- **Card** - Container components (Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter)
- **Input** - Form input components
- **Label** - Form labels
- **Select** - Dropdown select components
- **Slider** - Range slider components
- **Badge** - Status/label badges
- **Progress** - Progress indicators
- **Tabs** - Tab navigation
- **Checkbox** - Checkbox form controls

### Theme Configuration

- **CSS Variables** - Complete design token system using HSL values
- **Dark/Light Mode** - Full theme switching support
- **Tailwind Integration** - Seamless integration with Tailwind CSS

### Utilities

- **cn()** - Class name utility function (clsx + tailwind-merge)

## 🎨 Theme Structure

The theme is built on CSS custom properties that work with both light and dark modes:

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

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... other dark mode values */
}
```

## 🔧 Usage in Apps

### 1. Add Dependencies

In your app's `package.json`:

```json
{
  "dependencies": {
    "@kavzorn/ui": "workspace:*",
    "@kavzorn/tailwind-config": "workspace:*"
  }
}
```

### 2. Import Styles

In your app's `globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import "@kavzorn/ui/styles.css";
```

### 3. Configure Tailwind

In your app's `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss";
import baseConfig from "@kavzorn/tailwind-config";

export default {
  ...baseConfig,
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    // Include UI package components
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
} satisfies Config;
```

### 4. Use Components

```tsx
import { Button, Card, CardContent, CardHeader, CardTitle } from "@kavzorn/ui";

export default function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello World</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  );
}
```

## 🏗️ Architecture

```
@kavzorn/ui/
├── src/
│   ├── components/
│   │   └── ui/          # All Shadcn components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       └── ...
│   ├── lib/
│   │   └── utils.ts     # Utility functions
│   ├── styles.css       # Global styles & CSS variables
│   └── index.ts         # Main export file
├── components.json      # Shadcn configuration
├── tailwind.config.js   # Tailwind config for UI package
└── package.json

@kavzorn/tailwind-config/
├── base.js             # Base Tailwind configuration
├── index.ts            # Export file
└── package.json
```

## ✨ Benefits

1. **Consistency** - All apps use the same design system
2. **Maintainability** - Update components in one place
3. **Theme Coherence** - Centralized design tokens
4. **Type Safety** - Full TypeScript support
5. **Performance** - Tree-shaking enabled
6. **Developer Experience** - Auto-completion and intellisense

## 🔮 Future Enhancements

- [ ] Add more Shadcn components as needed
- [ ] Theme customization per app (if needed)
- [ ] Component documentation with Storybook
- [ ] Testing setup for components
- [ ] Icon system integration
