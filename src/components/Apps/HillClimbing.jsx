import React from "react";

const HillClimbing = ({ isMaximized }) => {
  return (
    <div 
      className={`flex flex-col items-center justify-center h-full w-full bg-[#000] ${isMaximized ? "pb-0" : ""}`}
      style={{ overflow: "hidden" }}
    >
      <iframe 
        src="https://html5.gamedistribution.com/822814385dfb43bfbaec28e839dedeb7/"
        width="100%" 
        height="100%" 
        scrolling="none" 
        frameBorder="0"
        allowFullScreen
        title="Hill Climbing"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default HillClimbing;
