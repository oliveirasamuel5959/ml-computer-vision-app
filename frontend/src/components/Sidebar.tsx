import { Link } from "react-router";
import { useState } from "react";

interface SidebarLayoutProps {
  children: React.ReactNode;
}

export function Sidebar({ children }: SidebarLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={`bg-gray-900 text-white transition-all duration-300
        ${collapsed ? "w-16" : "w-64"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          {!collapsed && (
            <span className="text-lg font-semibold">Dashboard</span>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-400 hover:text-white"
          >
            ☰
          </button>
        </div>

        {/* Menu */}
        <nav className="p-2 space-y-1">
          <Link to="/">
            <SidebarItem label="Home" collapsed={collapsed} />
          </Link>
          <Link to="/add-streams">
            <SidebarItem label="Streams" collapsed={collapsed} />
          </Link>
          <SidebarItem label="Workflows" collapsed={collapsed} />
          <SidebarItem label="Settings" collapsed={collapsed} />
        </nav>
      </aside>

      {/* Content Slot */}
      <main className="flex-1 bg-gray-100 p-6">
        {children}
      </main>
    </div>
  );
}

function SidebarItem({
  label,
  collapsed,
}: {
  label: string;
  collapsed: boolean;
}) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-md cursor-pointer hover:bg-gray-800">
      <span className="text-xl"></span>
      {!collapsed && <span className="text-sm">{label}</span>}
    </div>
  );
}
