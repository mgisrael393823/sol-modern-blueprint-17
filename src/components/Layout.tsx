
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navigation from "./Navigation";

const Layout = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-purple-50/20 font-sans">
      <div className="container mx-auto px-4 py-8 flex-1 max-w-7xl">
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="mt-8 animate-fadeIn">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
