/**
 * ThemeProvider Module
 * 
 * This module implements a theming system for the blueprint application. It manages
 * theme selection, persistence, and application of CSS variables across the entire app.
 * Themes control colors, typography, spacing, and other visual aspects.
 * 
 * The Theme configuration is defined in theme-config.ts with predefined theme options
 * that can be selected at runtime.
 * 
 * @module ThemeProvider
 */
import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeConfig, themes, defaultTheme } from "./theme-config";

/**
 * ThemeContextType defines the shape of the theme context object.
 * It provides access to the current theme, methods to change themes,
 * and a list of available themes.
 * 
 * @interface ThemeContextType
 * @property {ThemeConfig} theme - Current active theme configuration
 * @property {Function} setTheme - Method to change the active theme
 * @property {string[]} availableThemes - List of available theme names
 */
type ThemeContextType = {
  theme: ThemeConfig;
  setTheme: (themeName: string) => void;
  availableThemes: string[];
};

// Create context with undefined initial value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * ThemeProvider component that manages theme state and applies theme styles
 * to the document. It provides theme context to all child components and handles
 * theme persistence in localStorage.
 * 
 * @component ThemeProvider
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components that will have access to theme context
 * @returns {JSX.Element} Provider component with context
 */
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize theme state with default theme
  const [theme, setThemeState] = useState<ThemeConfig>(defaultTheme);
  
  /**
   * Changes the active theme and applies its styles to the document.
   * Updates CSS variables directly on the document root element and
   * persists the theme selection to localStorage.
   * 
   * @param {string} themeName - Name of the theme to activate
   */
  const setTheme = (themeName: string) => {
    if (themes[themeName]) {
      // Update theme state
      setThemeState(themes[themeName]);
      
      // Save theme preference to localStorage
      localStorage.setItem("blueprint-theme", themeName);
      
      // Apply CSS variables to document root
      const root = document.documentElement;
      const colors = themes[themeName].colors;
      
      // Apply color variables
      root.style.setProperty("--color-primary", colors.primary);
      root.style.setProperty("--color-primary-light", colors.primaryLight);
      root.style.setProperty("--color-primary-dark", colors.primaryDark);
      root.style.setProperty("--color-secondary", colors.secondary);
      root.style.setProperty("--color-secondary-light", colors.secondaryLight);
      root.style.setProperty("--color-accent", colors.accent);
      root.style.setProperty("--color-background", colors.background);
      root.style.setProperty("--color-text", colors.text);
      root.style.setProperty("--color-text-secondary", colors.textSecondary);
      root.style.setProperty("--color-sidebar", colors.sidebar);
      root.style.setProperty("--color-sidebar-active", colors.sidebarActive);
      
      // Apply typography and layout variables
      root.style.setProperty("--font-primary", themes[themeName].fontPrimary);
      root.style.setProperty("--font-secondary", themes[themeName].fontSecondary);
      root.style.setProperty("--border-radius", themes[themeName].borderRadius);
    }
  };
  
  /**
   * Effect hook to load saved theme from localStorage on component mount.
   * Falls back to default theme if localStorage theme is missing or invalid.
   */
  useEffect(() => {
    const savedTheme = localStorage.getItem("blueprint-theme");
    if (savedTheme && themes[savedTheme]) {
      setTheme(savedTheme);
    } else {
      // Initialize CSS variables with default theme
      setTheme("default");
    }
  }, []);
  
  return (
    <ThemeContext.Provider value={{ 
      theme, 
      setTheme, 
      availableThemes: Object.keys(themes) 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Custom hook that provides access to the theme context.
 * Must be used within a component that is a child of ThemeProvider.
 * 
 * @example
 * // Using the useTheme hook in a component
 * const MyComponent = () => {
 *   const { theme, setTheme } = useTheme();
 *   return (
 *     <button onClick={() => setTheme('blue')}>
 *       Current theme: {theme.name}
 *     </button>
 *   );
 * };
 * 
 * @returns {ThemeContextType} Theme context with current theme and theme controls
 * @throws {Error} If used outside of a ThemeProvider
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};