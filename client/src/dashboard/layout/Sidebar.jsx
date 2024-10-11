import Logo from "../components/Logo";
import Profile from "../components/Profile";
import { RxHome } from "react-icons/rx";
import { RiNewsLine } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { BsPersonPlus } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { RiUserSettingsLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <aside className="max-w-[300px] min-h-screen rounded-lg p-10 bg-white relative flex flex-col items-center">
      <div className="text-center">
        <Logo></Logo>
      </div>
      <div className="my-4 cursor-pointer">
        <Profile></Profile>
      </div>
      <div className="flex justify-center">
        <ul className="flex flex-col gap-3 text-md text-slate-900 cursor-pointer">
          <li className="flex items-center gap-3">
            <RxHome />
            Dashboard
          </li>
          <li className="flex items-center gap-3">
            <RiNewsLine />
            News
          </li>
          <li className="flex items-center gap-3">
            <BsPersonPlus />
            Add writer
          </li>
          <li className="flex items-center gap-3">
            <BsPeople />
            Writers
          </li>
          <li className="flex items-center gap-3">
            <RiUserSettingsLine />
            Settings
          </li>
        </ul>
      </div>
      <div className="absolute flex items-center gap-3 bottom-14 hover:text-slate-900 cursor-pointer text-md">
        <CiLogout /> Logout
      </div>
    </aside>
  );
};

export default Sidebar;
