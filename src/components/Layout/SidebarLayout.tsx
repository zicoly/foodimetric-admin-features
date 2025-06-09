import type { ReactNode } from "react";
import { useState } from "react";
import {
  LayoutDashboard,
  Menu,
  UtensilsCrossed,
  LogOut,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";

const links = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Meals", path: "/meals", icon: UtensilsCrossed },
];

interface Props {
  children: ReactNode;
}

const SidebarLayout = ({ children }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeSidebar = () => setMobileOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  const SidebarContent = (
    <div className="h-screen flex flex-col justify-between overflow-y-auto bg-white border-r border-gray-200 w-56">
      <div className="p-4 space-y-6">
        <img src="img/logo.png" alt="Foodimetric" width={150} className="mt-4"/>
        <nav className="space-y-2">
          {links.map(({ name, path, icon: Icon }) => (
            <Link
              key={name}
              to={path}
              onClick={closeSidebar}
              className={clsx(
                "flex items-center gap-3 px-4 py-3 rounded-2xl text-base",
                location.pathname === path
                  ? "bg-[#147e03] text-white font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              )}
            >
              <Icon size={18} />
              <span>{name}</span>
            </Link>
          ))}
        </nav>
      </div>
      <div className="p-4">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-3 py-2 text-sm bg-red-100 text-red-600 hover:bg-red-200 rounded w-full cursor-pointer"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex">
      {/* Desktop sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:block bg-white shadow-lg z-40">
        {SidebarContent}
      </aside>

      {/* Mobile sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="relative z-50 bg-white shadow-lg">
            {SidebarContent}
          </div>
          <div
            onClick={closeSidebar}
            className="fixed inset-0 bg-black opacity-30"
          />
        </div>
      )}

      {/* Content area */}
      <div className="flex-1 lg:ml-56 h-screen overflow-y-auto bg-blue-50">
        {/* Topbar for mobile */}
        <div className="flex items-center justify-between px-4 py-3 bg-white shadow-md lg:hidden sticky top-0 z-10 w-full">
          <button onClick={() => setMobileOpen(true)}>
            <Menu size={24} />
          </button>
          <h2 className="text-lg font-semibold text-gray-700">Admin Panel</h2>
          <div className="w-6 h-6" /> {/* Spacer to center title */}
        </div>

        {/* Main content */}
        <main className="p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
  
};

export default SidebarLayout;
