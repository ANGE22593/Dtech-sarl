
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  BarChart2,
  Bell,
  Image,
  Settings,
  Users,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated");
    toast({
      title: "Déconnexion réussie",
      description: "Vous avez été déconnecté avec succès",
    });
    navigate("/admin/login");
  };

  const menuItems = [
    {
      label: "Tableau de bord",
      icon: <BarChart2 size={20} />,
      path: "/admin/dashboard",
    },
    {
      label: "Actualités",
      icon: <Bell size={20} />,
      path: "/admin/news",
    },
    {
      label: "Statistiques",
      icon: <Users size={20} />,
      path: "/admin/stats",
    },
    {
      label: "Paramètres",
      icon: <Settings size={20} />,
      path: "/admin/settings",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-white"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          <div className="px-4 py-6 border-b">
            <Link to="/admin/dashboard" className="flex items-center">
              <div className="bg-[#06a73d] rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-2">
                D
              </div>
              <div>
                <h2 className="font-bold text-lg">DTECH Admin</h2>
                <p className="text-xs text-gray-500">Interface d'administration</p>
              </div>
            </Link>
          </div>

          <nav className="flex-1 px-2 py-4 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? "bg-[#06a73d]/10 text-[#06a73d]"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t">
            <Button
              variant="ghost"
              className="w-full justify-start text-red-500 hover:text-red-700 hover:bg-red-50"
              onClick={handleLogout}
            >
              <LogOut size={20} className="mr-2" />
              Déconnexion
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className={`flex-1 ${sidebarOpen ? "lg:ml-64" : ""} transition-all duration-300`}>
        <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Administration DTECH SARL</h1>
          <Button variant="outline" onClick={handleLogout} size="sm">
            <LogOut size={16} className="mr-2" />
            Déconnexion
          </Button>
        </header>
        <main className="p-0">{children}</main>
      </div>
    </div>
  );
};
