/**
 * Theme configuration for SOL Modern Blueprint
 * 
 * This module defines the theme configuration interface and provides
 * default themes for the application. Themes control the color scheme,
 * typography, and other visual aspects of the blueprint.
 */

export type ThemeColors = {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  secondary: string;
  secondaryLight: string;
  accent: string;
  background: string;
  text: string;
  textSecondary: string;
  sidebar: string;
  sidebarActive: string;
};

export type ThemeConfig = {
  name: string;
  colors: ThemeColors;
  fontPrimary: string;
  fontSecondary: string;
  borderRadius: string;
};

export const defaultTheme: ThemeConfig = {
  name: "SOL Modern",
  colors: {
    primary: "#7c3aed", // Purple
    primaryLight: "#e9d5ff", 
    primaryDark: "#6d28d9",
    secondary: "#a78bfa",
    secondaryLight: "#f3e8ff",
    accent: "#fde68a", // Yellow
    background: "#ffffff",
    text: "#333333",
    textSecondary: "#777777",
    sidebar: "#f9fafb",
    sidebarActive: "#f3e8ff",
  },
  fontPrimary: "Montserrat",
  fontSecondary: "Montserrat",
  borderRadius: "0.5rem",
};

// Example alternative themes
export const themes: Record<string, ThemeConfig> = {
  default: defaultTheme,
  blue: {
    name: "Blueprint Blue",
    colors: {
      primary: "#2563eb",
      primaryLight: "#bfdbfe",
      primaryDark: "#1d4ed8",
      secondary: "#60a5fa",
      secondaryLight: "#dbeafe",
      accent: "#fde68a",
      background: "#f8fafc",
      text: "#1e293b",
      textSecondary: "#64748b",
      sidebar: "#f1f5f9",
      sidebarActive: "#dbeafe",
    },
    fontPrimary: "Inter",
    fontSecondary: "Inter",
    borderRadius: "0.375rem",
  },
  green: {
    name: "Evergreen",
    colors: {
      primary: "#10b981",
      primaryLight: "#d1fae5",
      primaryDark: "#059669",
      secondary: "#34d399",
      secondaryLight: "#ecfdf5",
      accent: "#fcd34d",
      background: "#f9fafb",
      text: "#1f2937",
      textSecondary: "#6b7280",
      sidebar: "#f3f4f6",
      sidebarActive: "#d1fae5",
    },
    fontPrimary: "Montserrat",
    fontSecondary: "Montserrat",
    borderRadius: "0.5rem",
  },
};