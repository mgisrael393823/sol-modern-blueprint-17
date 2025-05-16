import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-primary)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-secondary)', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Theme-specific colors
        themePrimary: 'var(--color-primary)',
        themePrimaryLight: 'var(--color-primary-light)',
        themePrimaryDark: 'var(--color-primary-dark)',
        themeSecondary: 'var(--color-secondary)',
        themeSecondaryLight: 'var(--color-secondary-light)',
        themeAccent: 'var(--color-accent)',
        themeBackground: 'var(--color-background)',
        
        // Text colors
        textPrimary: 'var(--color-text)',
        textSecondary: 'var(--color-text-secondary)',
        
        // Sidebar specific
        themeSidebar: 'var(--color-sidebar)',
        themeSidebarActive: 'var(--color-sidebar-active)',
        
        // Shadcn components - keep these for compatibility
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      // Add theme-specific gradients
      backgroundImage: {
        'theme-gradient': 'linear-gradient(to bottom, var(--color-background), color-mix(in srgb, var(--color-primary-light) 10%, var(--color-background)))',
        'theme-header-gradient': 'linear-gradient(to right, var(--color-primary), var(--color-primary-dark))',
        'glass-gradient': 'linear-gradient(120deg, rgba(255,255,255,0.7), rgba(255,255,255,0.1))',
        'animated-gradient': 'linear-gradient(-45deg, #7c3aed, #6d28d9, #a78bfa, #7c3aed) 0% 0% / 300% 300%',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-subtle': 'pulseSubtle 3s infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'underline-expand': 'underlineExpand 2s cubic-bezier(0.19, 1, 0.22, 1) forwards 0.8s',
        'accordion-down': 'accordion-down 0.3s ease-out',
        'accordion-up': 'accordion-up 0.3s ease-out',
        'expand-item': 'expandItem 0.3s ease-out',
        'card-hover': 'cardHover 0.3s ease-out forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' }
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        underlineExpand: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'expandItem': {
          '0%': { opacity: '0', transform: 'translateY(5px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'cardHover': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-3px)' }
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;