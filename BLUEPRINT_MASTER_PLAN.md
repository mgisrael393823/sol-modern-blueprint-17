# Blueprint Master Plan: SOL Modern Templatization

This master document outlines the comprehensive plan to transform the SOL Modern Blueprint template into a fully modular, consistent, and reusable system where only content and brand colors change between instances while maintaining visual and structural integrity.

## Project Overview

**Objective:** Create a reusable React-based report template where all visual and structural elements—including layout, typography, spacing, navigation, graphs, charts, and reusable UI components—remain exactly the same across future instances of this template.

**Key Principles:**
- Only text content and brand-specific colors should change between project instances
- Visual consistency must be maintained across all components
- Content should be completely decoupled from presentation
- Theming should be centralized and easy to update

## Phase 1: Foundation & Infrastructure

### 1.1 Comprehensive Theming System
- [x] Create `theme-config.ts` with ThemeConfig interface and default themes
- [x] Implement ThemeProvider with localStorage persistence
- [x] Update global CSS with CSS variables for theming
- [x] Modify Tailwind config to use theme variables
- [x] Create ThemeSwitcher component
- [ ] Convert hardcoded color references to theme variables

### 1.2 Branding Configuration
- [x] Create `brandingConfig.ts` with BrandingConfig interface
- [x] Implement BrandingProvider with import/export functionality
- [x] Create BrandingConfig component for settings management
- [x] Add branding.json loading capability
- [x] Connect branding settings to theme system

### 1.3 Core Layout Components
- [x] Create BaseLayout component
- [x] Implement SectionLayout for consistent page structures
- [x] Create reusable grid systems (CardGrid, SplitLayout)
- [x] Develop Section Card components
- [ ] Standardize spacing system

## Phase 2: Content Management System

### 2.1 Content Structure
- [x] Define content type interfaces for all sections
- [x] Create example content presets (default)
- [x] Implement ContentProvider with state management
- [x] Add localStorage persistence for content
- [ ] Create content import/export functionality

### 2.2 Content Validation
- [ ] Add Ajv schema validation library
- [ ] Create JSON schemas for all content types
- [ ] Implement content validation functions
- [ ] Add error handling and feedback for invalid content

### 2.3 Content Loading
- [ ] Create utilities for loading content from external sources
- [ ] Implement markdown parser for text-based content
- [ ] Add section extraction from markdown files
- [ ] Create content switcher component

## Phase 3: Component Development

### 3.1 UI Pattern Components
- [x] Create reusable metric card component
- [x] Implement SWOT analysis components
- [x] Build recommendation card component
- [ ] Create data visualization components with theming support
- [ ] Develop content section templates

### 3.2 Page Component Updates
- [x] Update HomePage to use content store
- [x] Modify ExecutiveSummary to use standardized components
- [x] Update MarketIntelligence with content-driven rendering
- [x] Refactor CompetitiveLandscape for consistent styling
- [x] Update StrategicOpportunities with pattern components
- [ ] Update remaining pages with pattern components

### 3.3 Navigation & Admin
- [x] Update Navigation component to use content store
- [x] Create BrandingSwitcher component
- [ ] Create AdminPanel for content management
- [ ] Implement content editor interface
- [ ] Add theme configuration controls

## Phase 4: Internationalization & Testing

### 4.1 Internationalization Framework
- [ ] Set up i18next with React integration
- [ ] Create translation files for English and Spanish
- [ ] Update components to use translation hooks
- [ ] Create LanguageSwitcher component
- [ ] Implement language persistence

### 4.2 Test Infrastructure
- [ ] Set up testing framework (Jest/React Testing Library)
- [ ] Create snapshot tests for key components
- [ ] Implement visual regression tests
- [ ] Add theme variation testing
- [ ] Create validation tests for content loading

### 4.3 Documentation
- [ ] Create component documentation templates
- [ ] Document theming and branding system
- [ ] Add content structure documentation
- [ ] Create developer guides for extending components
- [ ] Document i18n implementation

## Phase 5: Integration & Finalization

### 5.1 Application Integration
- [x] Update App.tsx with all providers
- [x] Ensure proper provider nesting
- [ ] Add context debugging tools
- [ ] Implement error boundaries
- [ ] Verify provider performance

### 5.2 Performance Optimization
- [ ] Add React.memo where appropriate
- [ ] Implement useMemo for expensive computations
- [ ] Add useCallback for event handlers
- [ ] Review context re-renders
- [ ] Optimize component tree

### 5.3 Export & Clone Process
- [ ] Create template export script
- [ ] Document cloning process
- [ ] Add setup wizard for new projects
- [ ] Create CLI tool for project initialization
- [ ] Add version tracking for template

## Implementation Details

### Key Files to Create:

#### Theme System
```
src/lib/theme-config.ts            - Theme configuration types and defaults ✅
src/lib/ThemeProvider.tsx          - Theme context provider ✅
src/components/ThemeSwitcher.tsx   - Theme selection UI ✅
```

#### Branding System
```
src/lib/brandingConfig.ts          - Branding configuration types and defaults ✅
src/lib/BrandingProvider.tsx       - Branding context provider ✅
src/components/BrandingConfig.tsx  - Branding management UI ✅
src/components/BrandingSwitcher.tsx - Branding selection UI ✅
```

#### Layout Components
```
src/components/layouts/BaseLayout.tsx    - Main application layout ✅
src/components/layouts/SectionLayout.tsx - Standard section container ✅
src/components/layouts/GridLayouts.tsx   - Reusable grid patterns ✅
```

#### Content Management
```
src/lib/content-types.ts           - Content structure definitions ✅
src/lib/ContentProvider.tsx        - Content context provider ✅
src/lib/contentSchema.ts           - JSON schema validation
src/lib/content-presets/           - Folder with content presets ✅
src/components/ContentSwitcher.tsx - Content selection UI
```

#### UI Components
```
src/components/patterns/MetricCard.tsx         - Reusable metric display ✅
src/components/patterns/SwotCard.tsx           - SWOT presentation ✅
src/components/patterns/RecommendationCard.tsx - Standard recommendation UI ✅
```

#### Testing and i18n
```
src/lib/i18n.ts                      - i18n configuration
src/components/LanguageSwitcher.tsx  - Language selection UI
src/__tests__/components/            - Component test files
src/__tests__/themes/                - Theme variation tests
```

## Testing Strategy

The testing approach ensures components maintain visual consistency:

1. **Unit Tests**: Test individual components for proper rendering and behavior
2. **Snapshot Tests**: Capture component appearance for regression testing
3. **Theme Variation Tests**: Ensure components look correct with different themes
4. **Content Validation Tests**: Verify content structure validation works properly
5. **i18n Tests**: Ensure translations are applied correctly

## Documentation Plan

Comprehensive documentation will be created for:

1. **Component Library**: Usage examples and props for each component
2. **Theming Guide**: How to customize colors, spacing, and typography
3. **Content Structure**: Required fields and formatting for content
4. **Developer Guide**: How to extend the template for custom needs
5. **Clone Process**: Step-by-step guide for creating new instances

## Timeline and Deliverables

**Week 1: Foundation**
- Complete theming system
- Implement branding configuration
- Create core layout components

**Week 2: Content System**
- Complete content type definitions
- Implement content provider
- Add validation system

**Week 3: Components**
- Create pattern components
- Update page components
- Build admin interface

**Week 4: i18n and Testing**
- Implement i18n framework
- Create test suite
- Document components

**Week 5: Integration and Finalization**
- Complete application integration
- Optimize performance
- Finalize documentation

## Progress Tracking

| Phase | Status | Notes |
|-------|--------|-------|
| Phase 1 | In Progress | Theme system, branding system, and core layouts completed |
| Phase 2 | In Progress | Content types and provider implemented, presets created |
| Phase 3 | In Progress | Key pattern components created, most pages updated |
| Phase 4 | Not Started | |
| Phase 5 | In Progress | App.tsx updated with providers and nesting |

## Known Issues/Challenges

- Ensuring consistent component rendering across all themes
- Handling complex content structures in markdown parsing
- Balancing flexibility with visual consistency

---

This master plan will be updated as implementation progresses. All team members should refer to this document for the current status and plan details.

Last Updated: May 13, 2025