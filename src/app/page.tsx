"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import MainContainer from "../app/components/MainContainer";
import Milestone from "../app/components/Milestone";
import RecentActivity from "../app/components/RecentActivity";
import WeeklyStatus from "../app/components/WeeklyProjectStatus";
import TodoList from "../app/components/ToDoList";
import Header from "./components/Header";

export default function Home() {
  const lineRef = useRef(null);
  const mainRef = useRef(null);
  const cornerRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .fromTo(
        lineRef.current,
        { opacity: 0, display: "block", scaleY: 0, height: "0vh", y: "0%" },
        {
          opacity: 1,
          scaleY: 1,
          height: "10vh", // Line grows vertically to the middle of the screen
          duration: 0.5,
          transformOrigin: "center center",
          ease: "power3.inOut",
        }
      )
      .to(lineRef.current, {
        height: "150px", // Shrinks height to match the MainContainer
        width: "45vw", // Line becomes as wide as MainContainer
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          // After the line shrinks, reveal the MainContainer
          gsap.fromTo(
            mainRef.current,
            { opacity: 0.7, scale: 0.8 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.3,
              ease: "power3.out",
            }
          );

          // Show corner components with staggered effect
          gsap.to(cornerRefs.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
          });
        },
      });

    return () => {
      timeline.kill(); // Cleanup animation on unmount
    };
  }, []);

  return (
    <div className="relative w-full h-[90vh] flex justify-center items-center bg-neutral-900">
      <div
        ref={lineRef}
        className="absolute hidden w-2 h-10 bg-gradient-to-r from-[#26C9FF] via-[#8D79FE] to-[#F18145] rounded-full shadow-lg"
        style={{
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Center the line
          background: `linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), 
                      linear-gradient(90deg, #26C9FF 0.37%, #5AA1FE 25.57%, #8D79FE 50.5%, #BE7DA3 74.54%, #F18145 99.63%)`,
        }}
      ></div>

      {/* Main Container */}
      <div ref={mainRef} className="absolute opacity-0">
        <MainContainer />
      </div>

      {/* Corner Components */}
      <div
        className="absolute top-0 left-0 opacity-0 transform scale-95 bg-[#1C1F2] p-2 rounded-lg text-white text-lg font-semibold"
        ref={(el) => {
          cornerRefs.current[0] = el!;
        }}
      >
        <TodoList />
      </div>
      <div
        className="absolute top-0 right-0 opacity-0 transform scale-95 bg-[#1C1F2] p-2 rounded-lg text-white text-lg font-semibold"
        ref={(el) => {
          cornerRefs.current[1] = el!;
        }}
      >
        <Milestone />
      </div>
      <div
        className="absolute bottom-0 left-0 opacity-0 transform scale-95 bg-[#1C1F2] p-2 rounded-lg text-white text-lg font-semibold"
        ref={(el) => {
          cornerRefs.current[2] = el!;
        }}
      >
        <RecentActivity />
      </div>
      <div
        className="absolute bottom-0 right-0 opacity-0 transform scale-95 bg-[#1C1F2] p-2 rounded-lg text-white text-lg font-semibold"
        ref={(el) => {
          cornerRefs.current[3] = el!;
        }}
      >
        <WeeklyStatus />
      </div>
    </div>
  );
}
