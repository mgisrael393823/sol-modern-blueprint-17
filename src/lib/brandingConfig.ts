/**
 * Branding configuration for SOL Modern Blueprint
 * 
 * This module defines the branding configuration interface and provides
 * default branding settings. Branding manages project-specific information
 * like project name, logos, contact information, etc.
 */

export interface BrandingConfig {
  name: string;
  version: string;
  generatedDate: string;
  description: string;
  logo: {
    main: string;
    alt: string;
    favicon: string;
  };
  contact?: {
    email: string;
    website: string;
    phone?: string;
  };
  metadata?: Record<string, string>;
}

export const defaultBranding: BrandingConfig = {
  name: "SOL Modern",
  version: "1.0.0",
  generatedDate: new Date().toISOString(),
  description: "Strategy Blueprint Template",
  logo: {
    main: "/logo.svg",
    alt: "SOL Modern Logo",
    favicon: "/favicon.ico"
  },
  contact: {
    email: "info@solmodern.com",
    website: "https://solmodern.com"
  },
  metadata: {
    industry: "Real Estate",
    docType: "Strategy Blueprint",
    author: "Sol Modern Team"
  }
};

// Example alternative brandings
export const brandings: Record<string, BrandingConfig> = {
  default: defaultBranding,
  
  sample1: {
    name: "BluePrint Ventures",
    version: "1.0.0",
    generatedDate: new Date().toISOString(),
    description: "Investment Analysis Report",
    logo: {
      main: "/sample-logos/blueprint-ventures.svg",
      alt: "BluePrint Ventures Logo",
      favicon: "/sample-logos/blueprint-ventures-favicon.ico"
    },
    contact: {
      email: "info@blueprint-ventures.example",
      website: "https://blueprint-ventures.example",
      phone: "+1 (555) 123-4567"
    },
    metadata: {
      industry: "Finance",
      docType: "Investment Analysis",
      author: "BluePrint Ventures Team"
    }
  },
  
  sample2: {
    name: "EcoSmart Analytics",
    version: "1.0.0",
    generatedDate: new Date().toISOString(),
    description: "Sustainability Report",
    logo: {
      main: "/sample-logos/ecosmart.svg",
      alt: "EcoSmart Analytics Logo",
      favicon: "/sample-logos/ecosmart-favicon.ico"
    },
    contact: {
      email: "hello@ecosmart.example",
      website: "https://ecosmart.example"
    },
    metadata: {
      industry: "Environmental",
      docType: "Sustainability Analysis",
      author: "EcoSmart Team"
    }
  }
};