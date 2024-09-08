import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const MainContainer = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    // Animate opacity and scale separately for smoother appearance
    timeline
      .fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power2.out" }
      )
      .fromTo(
        containerRef.current,
        { scale: 0.2 },
        { scale: 1, duration: 0.7, ease: "power2.out" },
        "-=0.2" // Overlap the animations for a smoother look
      );
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center text-[#17191C]"
      ref={containerRef}
      style={{
        height: "30vh",
        width: "50vw",
      }}
    >
      <div
        className="flex flex-col items-start p-6 rounded-lg shadow-lg"
        style={{
          background: `linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), 
            linear-gradient(90deg, #26C9FF 0.37%, #5AA1FE 25.57%, #8D79FE 50.5%, #BE7DA3 74.54%, #F18145 99.63%)`,
          padding: "20px",
          borderRadius: "24px",
          width: "100%",
          height: "20vh",
        }}
      >
        {/* Profile Icon and Input */}
        <div className="flex flex-col w-full">
          {/* Profile Icon */}
          <div className="mr-4 flex mb-5 items-center">
            <video
              src="/videos/video.mp4"
              width={60}
              height={60}
              className="rounded-full mr-3"
              autoPlay
              loop
              muted
              playsInline
            >
              Your browser does not support the video tag.
            </video>
            <h1
              className="text-xl text-[#17191C]"
              style={{ fontFamily: "General Sans" }}
            >
              What would you like to do today?
            </h1>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Input field with mic icon */}
            <div className="relative">
              <input
                type="text"
                placeholder="Describe what you would like to create..."
                className="input input-bordered w-full pl-4 pr-12 py-8 bg-[#17191C] text-white text-lg"
                style={{
                  borderRadius: "12px", // Adjusted radius for input field
                  borderColor: "transparent",
                }}
              />

              {/* Microphone Icon */}
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 mr-7">
                <Image
                  src="/images/audio.png"
                  width={14}
                  height={11}
                  alt="Microphone Icon"
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-flow-col gap-3 mt-4">
        {[
          "Sprint overview",
          "Sprint goals",
          "Gantt board",
          "Performance report",
          "Employee performance",
        ].map((label, idx) => (
          <button
            key={idx}
            className="btn text-white"
            style={{
              backgroundColor: "#2C3035",
              borderRadius: "24px",
              padding: "10px 20px",
              fontFamily: "General Sans",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MainContainer;
