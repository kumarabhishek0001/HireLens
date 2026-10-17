import {
  FileChartLineIcon,
  Home,
  RotateCcwClockIcon,
} from "lucide-react";
import HireLensIcon from "./../components/Logo";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  const navItems = [
    {
      to: "/home/",
      label: "Home",
      Icon: Home,
      end: true,
    },
    {
      to: "/home/analyze",
      label: "Analyze",
      Icon: FileChartLineIcon,
    },
    {
      to: "/home/recents",
      label: "Recents",
      Icon: RotateCcwClockIcon,
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar: stays stationary */}
      <nav className="h-full w-64 shrink-0 border-r border-gray-100 bg-white px-4 py-5">
        {/* Logo and title */}
        <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
          <HireLensIcon />

          <h1 className="font-fancy text-2xl font-bold tracking-tight text-gray-950">
            hireLense
          </h1>
        </div>

        {/* Navigation: stays stationary */}
        <div className="mt-8 flex flex-col gap-2">
          {navItems.map(({ to, label, Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex min-h-12 items-center gap-3 rounded-lg px-3 py-2
                text-base transition-all duration-150
                ${
                  isActive
                    ? "bg-primary font-semibold text-white shadow-sm"
                    : "font-medium text-tertiary hover:bg-gray-50 hover:text-gray-950"
                }`
              }
            >
              <Icon size={21} strokeWidth={1.9} />
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Only the Outlet content scrolls */}
      <main className="min-w-0 min-h-0 flex-1 overflow-y-auto p-5">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;