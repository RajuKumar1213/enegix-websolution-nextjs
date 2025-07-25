"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  FileText,
  LogOut,
  Menu,
  X,
  Briefcase,
} from "lucide-react";
import { useState } from "react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navigationItems = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
      current: pathname === "/admin",
    },
    {
      name: "Team Management",
      href: "/admin/team",
      icon: Users,
      current: pathname === "/admin/team",
    },
    {
      name: "Portfolio",
      href: "/admin/portfolio",
      icon: Briefcase,
      current: pathname === "/admin/portfolio",
    },
    {
      name: "Blog Posts",
      href: "/admin/blogs",
      icon: FileText,
      current: pathname === "/admin/blogs",
    },

  ];

  const handleLogout = () => {
    // Implement logout logic here
    router.push("/admin-login");
  };

  return (
    <div className=" bg-gray-100">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className=" inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex gap-6">
        {/* Sidebar */}
        <div
          className={`fixed min-h-screen inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}>
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>

          <nav className="mt-8">
            <div className="px-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-3 py-3 text-sm font-medium rounded-lg mb-1 transition-colors ${
                    item.current
                      ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  }`}>
                  <item.icon
                    className={`mr-3 h-5 w-5 ${
                      item.current
                        ? "text-blue-500"
                        : "text-gray-400 group-hover:text-gray-500"
                    }`}
                  />
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Logout button */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <button
                onClick={handleLogout}
                className="group flex items-center w-full px-3 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-700 transition-colors">
                <LogOut className="mr-3 h-5 w-5 text-gray-400 group-hover:text-red-500" />
                Logout
              </button>
            </div>
          </nav>
        </div>

        {/* Main content */}
        <div className="bg-white overflow-y-auto flex-1">
          {/* Top bar */}
          <div className="sticky top-0 z-30 bg-white shadow-sm border-b border-gray-200">
            <div className="flex items-center justify-between h-14 px-6">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-gray-500 hover:text-gray-700">
                <Menu size={24} />
              </button>

              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-600">Admin</div>
                <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">A</span>
                </div>
              </div>
            </div>
          </div>

          {/* Page content */}
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
