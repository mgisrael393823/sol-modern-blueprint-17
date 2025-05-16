import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import Navigation from '@/components/Navigation';
import { cn } from '@/lib/utils';

interface BaseLayoutProps {
  children?: React.ReactNode;
  className?: string;
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({ 
  children,
  className
}) => {
  const location = useLocation();
  const [activeTab, setActiveTab] = React.useState(location.pathname);
  
  React.useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);
  
  return (
    <SidebarProvider>
      <div 
        className={cn(
          "flex w-full min-h-screen font-sans bg-theme-gradient",
          className
        )}
      >
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1">
          <div className="container px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <SidebarTrigger className="md:hidden text-black" />
              {/* Theme and branding switchers removed as requested */}
            </div>
            <div>
              {children || <Outlet />}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default BaseLayout;