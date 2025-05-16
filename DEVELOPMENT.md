# SOL Modern Blueprint Development Guide

This document provides an architectural overview and development guidelines for the SOL Modern Blueprint project. It's designed to help developers understand the system's structure, component relationships, and content management approach.

## Architecture Overview

The SOL Modern Blueprint is built as a content-driven application using React, TypeScript, and Tailwind CSS. It's designed with these key architectural principles:

1. **Content/Presentation Separation**: All content is decoupled from presentation components
2. **Consistent Theming**: A centralized theming system allows for visual customization
3. **Component Reusability**: Pattern components ensure visual consistency
4. **Responsive Design**: All components adapt to different screen sizes

## Project Structure

```
src/
├── components/        # UI components
│   ├── layouts/       # Layout components
│   ├── patterns/      # Reusable content patterns
│   └── ui/            # Base UI components (from shadcn)
├── lib/               # Core libraries and utilities
│   ├── content-presets/  # Default content
│   ├── content-types.ts  # Content type definitions
│   ├── ContentProvider.tsx # Content management
│   ├── theme-config.ts   # Theme configuration
│   ├── ThemeProvider.tsx # Theme management
│   └── utils.ts          # Utility functions
├── pages/             # Page components for each section
└── App.tsx            # Application entry point with routes
```

## Core Systems

### 1. Content Management System

The content system is built around TypeScript interfaces that define the structure of all content. The system includes:

#### ContentProvider

`ContentProvider` manages the application's content state, providing methods to read and update content data. It handles:

- Loading content from localStorage
- Saving content changes
- Providing content to all components

```jsx
// Example: Accessing content in a component
const MyComponent = () => {
  const { content, updateContent } = useContent();
  
  return <div>{content.siteTitle}</div>;
};
```

#### Content Types

All content follows structured type definitions in `content-types.ts`. The root `ContentStore` interface contains all sections, with specialized interfaces for each section type.

**Content Hierarchy**:
- `ContentStore` (root)
  - `ExecutiveSummaryContent`
  - `MarketIntelligenceContent`
  - `CompetitiveLandscapeContent`
  - etc.

### 2. Theming System

The theme system provides visual customization while maintaining consistency. It's built around:

#### ThemeProvider

`ThemeProvider` manages theme state and applies theme variables to the DOM. It:

- Stores current theme selection
- Applies CSS variables based on theme
- Persists theme selection in localStorage

```jsx
// Example: Using the theme system
const ThemeSwitcher = () => {
  const { theme, setTheme, availableThemes } = useTheme();
  
  return (
    <select 
      value={theme.name}
      onChange={(e) => setTheme(e.target.value)}
    >
      {availableThemes.map(name => (
        <option key={name} value={name}>{name}</option>
      ))}
    </select>
  );
};
```

#### Theme Configuration

Themes are defined in `theme-config.ts` with consistent properties including:
- Colors (primary, secondary, accent, etc.)
- Typography (font families)
- Layout properties (border radius)

### 3. Component System

The component system is organized in layers:

#### Layout Components

Layout components provide consistent structure for pages and sections. Key components include:

- `BaseLayout`: Overall application wrapper with navigation
- `SectionLayout`: Standard section container with title and description
- `GridLayouts`: Flexible grid systems for content arrangement

#### Pattern Components

Pattern components implement specific content visualization patterns:

- `MetricCard`: Displays a key metric with title, value, and trend
- `SwotCard`: Presents a SWOT analysis category
- `RecommendationCard`: Shows a strategic recommendation

#### Base UI Components

Shadcn UI components provide the foundation elements like:
- `Card`, `Button`, `Badge`
- `Table`, `Tabs`
- etc.

## Component Relationships

This diagram shows the key component relationships:

```
App
├── ThemeProvider
│   └── ContentProvider
│       └── BaseLayout
│           ├── Navigation
│           └── {Page Component}
│               └── SectionLayout
│                   ├── Pattern Components
│                   │   ├── MetricCard
│                   │   ├── SwotCard
│                   │   └── etc.
│                   └── UI Components
```

## Content Flow

Content flows through the application following this pattern:

1. `ContentProvider` loads content from localStorage or defaults
2. Page components access content via `useContent()` hook
3. Content is passed to pattern components for rendering
4. User updates modify content through `updateContent()`
5. Modified content is saved to localStorage

## State Management

The application uses React Context for global state management:

- `ContentContext`: Manages all content data
- `ThemeContext`: Manages theme selection and application

Local component state is used for UI-specific state that doesn't need to be shared.

## Routing

Routing is handled by React Router with routes defined in `App.tsx`. Each route corresponds to a page component in the `pages/` directory.

## Extension Guide

### Adding a New Section

To add a new content section:

1. Add a new interface in `content-types.ts`
2. Add the section to the `ContentStore` interface
3. Create a default content preset in `content-presets/default.ts`
4. Create a new page component in `pages/`
5. Add the route in `App.tsx`

### Creating a New Pattern Component

To create a new reusable pattern:

1. Create a new component in `components/patterns/`
2. Follow the existing pattern for props and structure
3. Use theme variables for styling
4. Add comprehensive JSDoc comments

### Adding a New Theme

To add a new theme option:

1. Add a new theme configuration in `theme-config.ts`
2. Ensure all required theme properties are defined
3. Test the theme across all components

## Best Practices

### 1. Content Changes

- Always use the `updateContent` method from `useContent`
- Validate content structure before updates
- Use TypeScript to ensure type safety

### 2. Styling

- Use theme variables instead of hardcoded colors
- Use Tailwind utility classes for styling
- Follow consistent spacing patterns

### 3. Component Development

- Create self-contained components
- Use comprehensive prop validation
- Add detailed JSDoc comments
- Include usage examples in comments

## Troubleshooting

### Content Issues

If content isn't displaying correctly:
- Check localStorage for corrupted content
- Clear localStorage to reset to defaults
- Verify content structure matches interfaces

### Theme Issues

If theme isn't applying correctly:
- Check if CSS variables are being properly set
- Verify theme configuration has all required properties
- Check for hardcoded values overriding theme variables

## Performance Considerations

- Use React.memo for expensive components
- Implement code-splitting for large sections
- Optimize image assets
- Avoid unnecessary re-renders from context changes