import React from "react";

const HillClimbing = ({ isMaximized }) => {
  return (
    <div 
      className={`flex flex-col items-center justify-center h-full w-full bg-[#000] ${isMaximized ? "pb-0" : ""}`}
      style={{ overflow: "hidden", touchAction: "none" }}
    >
      <iframe 
        src="https://www.crazygames.com/embed/moto-x3m"
        width="100%" 
        height="100%" 
        scrolling="none" 
        frameBorder="0"
        allowFullScreen
        title="Hill Climbing"
        style={{ border: "none", touchAction: "none", pointerEvents: "auto" }}
      ></iframe>
    </div>
  );
};

export default HillClimbing;
