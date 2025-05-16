/**
 * ContentProvider Module
 * 
 * This module defines a React context provider that manages and distributes the blueprint's content
 * throughout the application. It handles loading content from localStorage, saving content changes,
 * and providing access to content data to all connected components.
 * 
 * The content structure is defined by the ContentStore interface in content-types.ts, ensuring
 * consistent data structure across the application.
 * 
 * @module ContentProvider
 */
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ContentStore } from './content-types';
import { defaultContent } from './content-presets/default';

/**
 * ContentContextType defines the shape of the content context object.
 * It provides access to the current content and methods to update it.
 * 
 * @interface ContentContextType
 * @property {ContentStore} content - The current content data
 * @property {Function} updateContent - Method to update partial content
 * @property {Function} setContent - Method to replace all content
 */
interface ContentContextType {
  content: ContentStore;
  updateContent: (updates: Partial<ContentStore>) => void;
  setContent: (newContent: ContentStore) => void;
}

// Create context with undefined initial value
const ContentContext = createContext<ContentContextType | undefined>(undefined);

/**
 * ContentProvider component that wraps the application and provides content data
 * to all child components. It manages content state and persistence to localStorage.
 * 
 * @component ContentProvider
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components that will have access to content
 * @returns {JSX.Element} Provider component with context
 */
export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize content state with default content
  const [content, setContentState] = useState<ContentStore>(defaultContent);
  
  /**
   * Effect hook to load saved content from localStorage on component mount.
   * Falls back to default content if localStorage data is missing or invalid.
   */
  useEffect(() => {
    const savedContent = localStorage.getItem('blueprint-content');
    if (savedContent) {
      try {
        setContentState(JSON.parse(savedContent));
      } catch (e) {
        console.error('Failed to parse saved content:', e);
      }
    }
  }, []);
  
  /**
   * Updates specific sections of the content while preserving the rest.
   * Automatically persists changes to localStorage.
   * 
   * @param {Partial<ContentStore>} updates - Partial content to merge with existing content
   */
  const updateContent = (updates: Partial<ContentStore>) => {
    setContentState(prev => {
      const updated = { ...prev, ...updates };
      localStorage.setItem('blueprint-content', JSON.stringify(updated));
      return updated;
    });
  };
  
  /**
   * Completely replaces the current content with new content.
   * Automatically persists changes to localStorage.
   * 
   * @param {ContentStore} newContent - Complete content to replace current content
   */
  const setContent = (newContent: ContentStore) => {
    setContentState(newContent);
    localStorage.setItem('blueprint-content', JSON.stringify(newContent));
  };
  
  return (
    <ContentContext.Provider value={{ 
      content, 
      updateContent,
      setContent
    }}>
      {children}
    </ContentContext.Provider>
  );
};

/**
 * Custom hook that provides access to the content context.
 * Must be used within a component that is a child of ContentProvider.
 * 
 * @example
 * // Using the useContent hook in a component
 * const MyComponent = () => {
 *   const { content, updateContent } = useContent();
 *   return <div>{content.siteTitle}</div>;
 * };
 * 
 * @returns {ContentContextType} Content context with current content and update methods
 * @throws {Error} If used outside of a ContentProvider
 */
export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};