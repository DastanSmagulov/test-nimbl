"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Milestone = () => {
  const milestoneRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.from(milestoneRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      delay: 0.5,
    });
    gsap.to(milestoneRef.current, {
      opacity: 1,
      scale: 0.8,
      duration: 1.0,
      delay: 0.5,
    });
  }, []);

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      ref={milestoneRef}
      className={`bg-[#1C1F22] p-10 rounded-3xl w-[400px] ${
        isOpen ? "" : "h-[200px]"
      }  flex flex-col`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Image
            src="/images/milestone.png"
            alt="List icon"
            width={24}
            height={24}
          />
          <h1 className="text-xl font-semibold ml-4">Milestone</h1>
        </div>
        <div
          className="bg-[#2C3035] p-2 cursor-pointer"
          onClick={toggleDropdown}
        >
          {isOpen ? (
            <IoIosArrowUp className="text-base" />
          ) : (
            <IoIosArrowDown className="text-base" />
          )}
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          borderBottom: "1px solid #2C2C2E",
          marginBottom: "6px",
        }}
      />

      <div className="flex items-center justify-between mt-6">
        <div className="flex flex-col mr-10">
          <span className="text-base text-white">Lorem Ipsum is simply</span>
          <span className="text-base text-white">2 days left</span>
        </div>
        <div className="flex items-center ml-3">
          <Image
            src="/images/time.png"
            alt="Clock icon"
            width={16}
            height={16}
            className="mr-1"
          />
          <span className="text-sm text-white ml-2">30 Sep</span>
        </div>
      </div>

      {/* Milestone Items */}
      {isOpen && (
        <div className="milestone-items">
          <div className="flex items-center justify-between mt-6">
            <div className="flex flex-col mr-10">
              <span className="text-base text-white">
                Lorem Ipsum is simply
              </span>
              <span className="text-base text-white">2 days left</span>
            </div>
            <div className="flex items-center ml-3">
              <Image
                src="/images/time.png"
                alt="Clock icon"
                width={16}
                height={16}
                className="mr-1"
              />
              <span className="text-sm text-white ml-2">30 Sep</span>
            </div>
          </div>

          {/* Add more milestones as needed */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex flex-col mr-10">
              <span className="text-base text-white">
                Lorem Ipsum is simply
              </span>
              <span className="text-base text-white">2 days left</span>
            </div>
            <div className="flex items-center ml-3">
              <Image
                src="/images/time.png"
                alt="Clock icon"
                width={16}
                height={16}
                className="mr-1"
              />
              <span className="text-sm text-white ml-2">30 Sep</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Milestone;
