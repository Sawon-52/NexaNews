import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="min-w-screen min-h-screen bg-slate-400 font-sora p-5 flex gap-10">
      <div>
        <Sidebar></Sidebar>
      </div>

      <div className="p-8 px-2">
        <div className="text-3xl font-bold text-slate-900 mb-5">
          <h2>Hello, Mehedi Hasan!</h2>
        </div>

        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
