# JusKel Color System - Usage Guide

All colors in the JusKel application are now centralized in one place to ensure consistency and make updates easy.

## Files & Locations

1. **`lib/colors.ts`** - TypeScript constants for JavaScript/React code
2. **`app/globals.css`** - CSS variables for Tailwind classes
3. **`tailwind.config.ts`** - Tailwind theme configuration

## How to Use Colors

### Option 1: CSS Classes (Recommended for styling)

Use CSS variables that are defined in `globals.css`:

```tsx
// In your component files
<div className="bg-[var(--color-charcoal-teal)] text-[var(--color-white)]">
  Content here
</div>
```

### Option 2: TypeScript Constants (For dynamic styles)

Import from `lib/colors.ts`:

```tsx
import { COLORS, colorMap } from '@/lib/colors'

export function MyComponent() {
  return (
    <div style={{ backgroundColor: COLORS.primary.charcoal }}>
      {/* Content */}
    </div>
  )
}
```

### Option 3: Direct CSS Variables

In CSS/SCSS files:

```css
.my-class {
  background-color: var(--color-charcoal-teal);
  color: var(--color-text-dark);
  border: 1px solid var(--color-border);
}
```

## Color Reference

### Primary Brand Colors

- **Charcoal Teal**: `#0E2F2A` - Main dark teal for backgrounds
- **Dark Teal**: `#1a2e2a` - Slightly lighter teal
- **Dark Teal Variant**: `#153D35` - Dark teal variant
- **Medium Teal**: `#1F6F68` - Medium teal accent
- **Data Teal**: `#2a7a6e` - Primary data/accent teal
- **Light Teal**: `#e6f2ee` - Light teal backgrounds

### Gold Accents

- **Gold Primary**: `#CBA052` - Main gold accent
- **Gold Light**: `#e8c876` - Light gold

### Neutral Colors

- **Text Dark**: `#1a2e2a` - Primary text
- **Text Body**: `#6b7c78` - Body text
- **Text Secondary**: `#4a5854` - Secondary text
- **Border**: `#d5d0c8` - Border color
- **Light Background**: `#F0EDE8` - Light backgrounds
- **White**: `#ffffff` - White

## Current Implementation Status

### ✅ Using Centralized Colors

- Navigation navbar
- Footer
- Logo component

### 🔄 To Be Migrated

The following files still have hardcoded colors that should be updated to use the centralized system:

- `app/page.tsx` - Hero section, cards, buttons
- `app/login/page.tsx` - Login form
- `app/signup/page.tsx` - Signup form
- `app/dashboard/page.tsx` - Dashboard layout
- And other component files...

## Migration Guide

When updating existing files to use centralized colors:

### Before (Hardcoded):
```tsx
<div className="bg-[#0E2F2A] text-[#ffffff]">
  <button className="bg-[#CBA052] hover:bg-[#e8c876]">
    Click me
  </button>
</div>
```

### After (Centralized):
```tsx
<div className="bg-[var(--color-charcoal-teal)] text-[var(--color-white)]">
  <button className="bg-[var(--color-gold-primary)] hover:bg-[var(--color-gold-light)]">
    Click me
  </button>
</div>
```

## Adding New Colors

If you need to add a new color:

1. Add it to `lib/colors.ts` in the appropriate category
2. Add a CSS variable to `app/globals.css` `:root` section
3. Use it throughout the app

Example:

```typescript
// In lib/colors.ts
export const COLORS = {
  // ...
  success: {
    light: '#d4edda',
    dark: '#155724',
  },
}

// In app/globals.css
--color-success-light: #d4edda;
--color-success-dark: #155724;
```

## Benefits

✅ Single source of truth for all colors
✅ Easy to update brand colors globally
✅ Consistent design across the application
✅ Reduced code duplication
✅ Better maintainability
✅ Easier for designers to collaborate

## Questions?

Refer to this guide when adding new features or updating styles to ensure color consistency across the application.
