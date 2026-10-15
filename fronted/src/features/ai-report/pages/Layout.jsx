import { FileChartLineIcon, Home, RotateCcwClockIcon } from "lucide-react";
import HireLensIcon from "./../components/Logo";
import { NavLink, Outlet } from "react-router-dom";




const Layout = () => {
  return (
    <div className="bg-background min-h-screen flex">
      <nav className="w-[17%] bg-white p-3 shadow-md">
        <div className="flex gap-2 items-center pb-3 border-b border-[#c1c2c2]">
          <HireLensIcon />
          <h1 className="text-shadow-sm font-fancy text-2xl font-bold">hireLense</h1>
        </div>

        <div className="flex flex-col gap-2 mt-6">
          <NavLink
          end
          to={"/home/"}
            className={({ isActive }) => 
              `flex items-center gap-2 px-2 py-1 rounded-md text-shadow-2xs ${isActive ? "bg-primary shadow-lg text-white font-bold" : "text-tertiary"} `
            }
          >
            <Home size={20}/>
            Home
          </NavLink>
          <NavLink
          to={"/home/analyze"}
            className={({ isActive }) => 
              `flex items-center gap-2 px-2 py-1 rounded-md text-shadow-2xs ${isActive ? "bg-primary text-white font-bold" : "text-tertiary"} `
            }
          > 
          <FileChartLineIcon size={20}/>
            Anlyze
          </NavLink>
          <NavLink
          to={"/home/recents"}
            className={({ isActive }) => 
              `flex items-center gap-2 px-2 py-1 rounded-md text-shadow-2xs ${isActive ? "bg-primary text-white font-bold" : "text-tertiary"} `
            }
          >
            <RotateCcwClockIcon size={20}/>
            Recents
          </NavLink>
        </div>
      </nav>

      <main className="w-[83%] p-5">
        <Outlet/>
      </main>
    </div>
  );
};

export default Layout;
