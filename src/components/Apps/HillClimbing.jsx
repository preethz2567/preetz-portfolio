import React from "react";

const HillClimbing = ({ isMaximized }) => {
  return (
    <div 
      className={`flex flex-col items-center justify-center h-full w-full bg-[#000] ${isMaximized ? "pb-0" : ""}`}
      style={{ overflow: "hidden", touchAction: "none" }}
    >
      <iframe 
        src="https://html5.gamedistribution.com/5b0abd4c0faa4f5eb190a9a16d5a1b4c/?gd_sdk_referrer_url=https://github.com/preethz2567/preetz-portfolio"
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
