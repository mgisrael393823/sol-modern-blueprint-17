
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const Layout = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen bg-gradient-to-b from-white to-purple-50/20 font-sans">
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1">
          <div className="container px-4 py-8">
            <SidebarTrigger className="mb-4" />
            <div className="animate-fadeIn">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
