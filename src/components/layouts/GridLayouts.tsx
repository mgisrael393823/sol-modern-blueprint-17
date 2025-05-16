import React from 'react';
import { cn } from '@/lib/utils';

type GridLayoutProps = {
  children: React.ReactNode;
  className?: string;
  columns?: 1 | 2 | 3 | 4 | '3x2';
};

export const CardGrid: React.FC<GridLayoutProps> = ({
  children,
  className,
  columns = 3
}) => {
  return (
    <div className={cn(
      "grid gap-6 sm:gap-8 md:gap-10",
      columns === 1 && "grid-cols-1",
      columns === 2 && "grid-cols-1 md:grid-cols-2",
      columns === 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      columns === 4 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
      columns === '3x2' && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3", // 3×2 grid that's responsive
      className
    )}>
      {children}
    </div>
  );
};

export const SplitLayout: React.FC<{
  left: React.ReactNode;
  right: React.ReactNode;
  leftWidth?: 'narrow' | 'wide' | 'equal';
  className?: string;
}> = ({ left, right, leftWidth = 'equal', className }) => {
  return (
    <div className={cn(
      "grid gap-6",
      leftWidth === 'narrow' && "grid-cols-1 lg:grid-cols-[1fr_2fr]",
      leftWidth === 'wide' && "grid-cols-1 lg:grid-cols-[2fr_1fr]",
      leftWidth === 'equal' && "grid-cols-1 lg:grid-cols-2",
      className
    )}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
};

export const ContentRow: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col md:flex-row gap-6", className)}>
      {children}
    </div>
  );
};

export const ContentColumn: React.FC<{
  children: React.ReactNode;
  className?: string;
  width?: 'auto' | 'full' | number;
}> = ({ children, className, width = 'auto' }) => {
  return (
    <div 
      className={cn(
        "flex-1", 
        width === 'full' && "w-full",
        className
      )}
      style={typeof width === 'number' ? { flexBasis: `${width}%` } : undefined}
    >
      {children}
    </div>
  );
};

export default {
  CardGrid,
  SplitLayout,
  ContentRow,
  ContentColumn
};