import React, { createContext, useContext, useState, useEffect } from 'react';
import { BrandingConfig, defaultBranding, brandings } from './brandingConfig';

interface BrandingContextType {
  branding: BrandingConfig;
  updateBranding: (updates: Partial<BrandingConfig>) => void;
  setBranding: (brandingName: string) => void;
  exportBranding: () => void;
  importBranding: (config: BrandingConfig) => void;
  availableBrandings: string[];
}

const BrandingContext = createContext<BrandingContextType | undefined>(undefined);

export const BrandingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [branding, setBrandingState] = useState<BrandingConfig>(defaultBranding);
  
  const updateBranding = (updates: Partial<BrandingConfig>) => {
    const updatedBranding = { ...branding, ...updates };
    setBrandingState(updatedBranding);
    localStorage.setItem('blueprint-branding', JSON.stringify(updatedBranding));
  };
  
  const setBranding = (brandingName: string) => {
    if (brandings[brandingName]) {
      setBrandingState(brandings[brandingName]);
      localStorage.setItem('blueprint-branding', JSON.stringify(brandings[brandingName]));
      localStorage.setItem('blueprint-branding-name', brandingName);
    }
  };
  
  const exportBranding = () => {
    const dataStr = JSON.stringify(branding, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', 'branding.json');
    linkElement.click();
  };
  
  const importBranding = (config: BrandingConfig) => {
    setBrandingState(config);
    localStorage.setItem('blueprint-branding', JSON.stringify(config));
  };
  
  // Load branding from localStorage on initial render
  useEffect(() => {
    const savedBrandingName = localStorage.getItem('blueprint-branding-name');
    const savedBranding = localStorage.getItem('blueprint-branding');
    
    if (savedBrandingName && brandings[savedBrandingName]) {
      setBrandingState(brandings[savedBrandingName]);
    } else if (savedBranding) {
      try {
        setBrandingState(JSON.parse(savedBranding));
      } catch (e) {
        console.error('Failed to parse saved branding:', e);
      }
    }
    
    // Try to load from branding.json at the root
    fetch('/branding.json')
      .then(response => {
        if (response.ok) return response.json();
        throw new Error('No branding.json found');
      })
      .then(data => {
        setBrandingState(data);
        localStorage.setItem('blueprint-branding', JSON.stringify(data));
      })
      .catch(err => {
        console.info('Using default or localStorage branding:', err.message);
      });
  }, []);
  
  return (
    <BrandingContext.Provider value={{
      branding,
      updateBranding,
      setBranding,
      exportBranding,
      importBranding,
      availableBrandings: Object.keys(brandings)
    }}>
      {children}
    </BrandingContext.Provider>
  );
};

export const useBranding = () => {
  const context = useContext(BrandingContext);
  if (!context) {
    throw new Error('useBranding must be used within a BrandingProvider');
  }
  return context;
};