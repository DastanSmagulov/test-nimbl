// app/components/RecentActivity.tsx
"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

const RecentActivity = () => {
  const recentActivityRef = useRef(null);

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

  return (
    <div
      ref={recentActivityRef}
      className="bg-[#1C1F22] p-10 rounded-3xl w-[400px] h-[200px]"
    >
      {/* Header */}
      <div className="flex tems-center justify-between mb-4">
        <div className="flex items-center">
          <Image
            src="/images/recent.png"
            alt="List icon"
            width={24}
            height={24}
          />
          <h1 className="text-xl font-semibold ml-2">Recent Activity</h1>
        </div>
        <div className="bg-[#2C3035]"></div>
        <div className="bg-[#2C3035] p-2">
          <IoIosArrowDown className="text-base" />
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          borderBottom: "1px solid #2C2C2E",
          marginBottom: "16px",
        }}
      />

      {/* To-do Item */}
      <div className="flex items-center justify-between">
        <div className="flex">
          <input
            type="checkbox"
            className="mr-3 mt-1"
            style={{
              width: "24px",
              height: "24px",
              border: "2px solid #9A9A9A",
              borderRadius: "4px",
              backgroundColor: "#1C1C1E",
            }}
          />
          <span className="text-base text-white">Lorem Ipsum is simply</span>
        </div>

        <div className="flex items-center ml-3">
          <Image
            src="/images/avatar-recent.png"
            alt="Clock icon"
            width={16}
            height={16}
            className="mr-1"
          />
          <span className="text-sm text-white ml-2">30 Sep</span>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
