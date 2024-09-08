"use client";
import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const RecentActivity = () => {
  const recentActivityRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  useEffect(() => {
    gsap.from(recentActivityRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      delay: 0.5,
    });
    gsap.to(recentActivityRef.current, {
      opacity: 1,
      scale: 0.8,
      duration: 1.0,
      delay: 0.5,
    });
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      ref={recentActivityRef}
      className={`bg-[#1C1F22] p-10 rounded-3xl w-[400px] ${
        isOpen ? "" : "h-[200px]"
      } flex flex-col`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Image
            src="/images/recent.png"
            alt="List icon"
            width={24}
            height={24}
          />
          <h1 className="text-xl font-semibold ml-4">Recent Activity</h1>
        </div>
        <button className="bg-[#2C3035] p-2" onClick={toggleDropdown}>
          {isOpen ? (
            <IoIosArrowUp className="text-base" />
          ) : (
            <IoIosArrowDown className="text-base" />
          )}
        </button>
      </div>

      {/* Divider */}
      <div
        style={{
          borderBottom: "1px solid #2C2C2E",
          marginBottom: "16px",
        }}
      />

      {/* Main Content */}
      <div className="flex flex-col gap-2">
        {/* To-do Item */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Image
              src="/images/avatar-recent.png"
              alt="User avatar"
              width={36} // Adjust size to match image
              height={36}
              className="rounded-full mr-4"
            />
            <div>
              <span className="text-sm text-white font-semibold">
                Dias Nurbergenov
              </span>
              <p className="text-sm text-gray-400">
                Changed the status of{" "}
                <span className="text-[#2C7DFA]">Nimbl</span>
              </p>
            </div>
          </div>
          <div className="text-gray-500 text-xs">10 min ago</div>
        </div>

        {/* Additional Dropdown Content */}
        {isOpen && (
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Image
                  src="/images/avatar-recent.png"
                  alt="User avatar"
                  width={36} // Adjust size to match image
                  height={36}
                  className="rounded-full mr-4"
                />
                <div>
                  <span className="text-sm text-white font-semibold">
                    Dias Nurbergenov
                  </span>
                  <p className="text-sm text-gray-400">
                    Changed the status of{" "}
                    <span className="text-[#2C7DFA]">Nimbl</span>
                  </p>
                </div>
              </div>
              <div className="text-gray-500 text-xs">10 min ago</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image
                  src="/images/avatar-recent.png"
                  alt="User avatar"
                  width={36} // Adjust size to match image
                  height={36}
                  className="rounded-full mr-4"
                />
                <div>
                  <span className="text-sm text-white font-semibold">
                    Dias Nurbergenov
                  </span>
                  <p className="text-sm text-gray-400">
                    Changed the status of{" "}
                    <span className="text-[#2C7DFA]">Nimbl</span>
                  </p>
                </div>
              </div>
              <div className="text-gray-500 text-xs">10 min ago</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentActivity;
