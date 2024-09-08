"use client";
import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const WeeklyProjectStatus = () => {
  const statusRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  useEffect(() => {
    gsap.from(statusRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      delay: 0.5,
    });
    gsap.to(statusRef.current, {
      opacity: 1,
      scale: 0.8,
      duration: 0.5,
      delay: 0.5,
    });
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      ref={statusRef}
      className={`bg-[#1C1F22] p-10 rounded-3xl w-[400px] ${
        isOpen ? "" : "h-[200px]"
      } flex flex-col justify-between`}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center mr-10">
          <Image
            src="/images/status.png"
            alt="List icon"
            width={24}
            height={24}
          />
          <h1 className="text-xl font-semibold ml-4">Weekly Project Status</h1>
        </div>
        <div className="bg-[#2C3035]"></div>
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
          marginBottom: "10px",
          marginTop: "10px",
        }}
      />

      {/* Main Content */}
      <div className="flex flex-col justify-between gap-2">
        <div className="flex justify-between">
          <span className="text-sm text-white">Blink</span>
          <span className="text-sm text-white">50%</span>
        </div>
        <progress
          className="progress progress-info w-full"
          value="70"
          max="100"
        ></progress>
        <div className="flex justify-between">
          <span className="text-sm text-white">Completed Tasks</span>
          <span className="text-sm text-white">12/24</span>
        </div>
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="mt-4 flex flex-col gap-2">
          <div className="flex justify-between">
            <span className="text-sm text-white">Blink</span>
            <span className="text-sm text-white">50%</span>
          </div>
          <progress
            className="progress progress-info w-full"
            value="70"
            max="100"
          ></progress>
          <div className="flex justify-between">
            <span className="text-sm text-white">Completed Tasks</span>
            <span className="text-sm text-white">12/24</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeeklyProjectStatus;
