import Logo from "../components/Logo";
import Profile from "../components/Profile";
import { RxHome } from "react-icons/rx";
import { RiNewsLine } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { BsPersonPlus } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { RiUserSettingsLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="max-w-[300px] min-h-screen rounded-lg p-8 px-12 bg-white relative flex flex-col items-center gap-5">
      <div>
        <Logo></Logo>
      </div>
      <div className="my-4 cursor-pointer">
        <Profile></Profile>
      </div>
      <div className="flex justify-center">
        <ul className="flex flex-col gap-5 text-md text-slate-900 cursor-pointer">
          <NavLink to="/admin/dashboard" className={({ isActive, isPending }) => (isActive ? "text-red-500" : isPending ? "pending" : "")}>
            <li>
              <div className="flex items-center gap-3">
                <RxHome className="text-xl" />
                Dashboard
              </div>
            </li>
          </NavLink>
          <NavLink to="/admin/news" className={({ isActive, isPending }) => (isActive ? "text-red-500" : isPending ? "pending" : "")}>
            <li className="flex items-center gap-3">
              <RiNewsLine className="text-xl" />
              News
            </li>
          </NavLink>
          <NavLink to="/admin/addWriter" className={({ isActive, isPending }) => (isActive ? "text-red-500" : isPending ? "pending" : "")}>
            <li className="flex items-center gap-3">
              <BsPersonPlus className="text-xl" />
              Add writer
            </li>
          </NavLink>

          <NavLink to="/admin/Writers" className={({ isActive, isPending }) => (isActive ? "text-red-500" : isPending ? "pending" : "")}>
            <li className="flex items-center gap-3">
              <BsPeople className="text-xl" />
              Writers
            </li>
          </NavLink>

          <NavLink to="/admin/settings" className={({ isActive, isPending }) => (isActive ? "text-red-500" : isPending ? "pending" : "")}>
            <li className="flex items-center gap-3">
              <RiUserSettingsLine className="text-xl" />
              Settings
            </li>
          </NavLink>
        </ul>
      </div>

      <div className="absolute bottom-12 right-[100px] flex items-center gap-3 cursor-pointer text-md text-slate-900  hover:bg-red-500 py-1 px-2 rounded-md hover:text-white">
        <CiLogout className="text-xl" /> Logout
      </div>
    </aside>
  );
};

export default Sidebar;
