"use client";
import Image from "next/image";
import { useState } from "react";
import { FaHome, FaBell } from "react-icons/fa"; // Use react-icons for icons

const Header = () => {
  const [isNotification, setNotification] = useState(true);

  return (
    <div className="h-[8vh] px-5 bg-[#1C1F22] p-2 flex items-center justify-between shadow-md border-r-8 header">
      {/* Left Section: Home and Title */}
      <div className="flex items-center space-x-2 md:space-x-4">
        <FaHome className="text-[#565D64] w-5 h-5 md:w-6 md:h-6" />
        <h1 className="text-white text-xs md:text-sm">Untitled</h1>
        <Image src="/images/divider.png" alt="divider" width={16} height={8} />
      </div>

      {/* Center Section: Tabs */}
      <div className="hidden lg:flex space-x-2 md:space-x-4 items-center ml-0 md:ml-10 lg:ml-20">
        <button className="flex items-center space-x-2 border border-[#35373B] text-white px-2 py-1 md:px-4 md:py-2 rounded-full">
          <Image
            src="/images/weekly_task.png"
            alt="weekly"
            width={12}
            height={10}
          />
          <span className="text-xs md:text-sm">Weekly task</span>
        </button>
        <button className="flex items-center space-x-2 border border-[#35373B] text-white px-2 py-1 md:px-4 md:py-2 rounded-full">
          <Image src="/images/gantt.png" alt="gantt" width={12} height={10} />
          <span className="text-xs md:text-sm">Gantt chart</span>
        </button>
        <button className="flex items-center space-x-2 border border-[#35373B] text-white px-2 py-1 md:px-4 md:py-2 rounded-full">
          <Image src="/images/kanban.png" alt="kanban" width={12} height={10} />
          <span className="text-xs md:text-sm">Kanban workflow</span>
        </button>
        <button className="flex items-center space-x-2 border border-[#35373B] text-white px-2 py-1 md:px-4 md:py-2 rounded-full">
          <Image src="/images/team.png" alt="team" width={12} height={10} />
          <span className="text-xs md:text-sm">Team chart</span>
        </button>
      </div>

      {/* Right Section: Notifications, Upgrade, Talkie, User */}
      <div className="flex items-center space-x-3 md:space-x-5">
        <button className="text-green-400 text-xs md:text-sm">
          Report a bug
        </button>
        <button className="text-purple-400 text-xs md:text-sm">Upgrade</button>

        <button className="bg-[#0C8CE9] text-white text-xs md:text-sm px-3 md:px-5 py-2 rounded-full">
          Talkie
        </button>

        <div className="relative">
          <FaBell className="text-white w-4 h-4 md:w-5 md:h-5" />
          {isNotification && (
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-600"></span>
          )}
        </div>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-circle avatar">
            <div className="w-8 md:w-10 rounded-full">
              <img src="https://i.pravatar.cc/300" alt="user" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-36 md:w-52"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
