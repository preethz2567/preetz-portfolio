import React from "react";

const WelcomeWindow = ({ onClose }) => {
  return (
    <div
      className="relative sm:absolute flex flex-col z-20 shadow-[1px_1px_0_#333,2px_2px_0_#333] w-[95%] sm:w-[90%] max-w-[600px] sm:top-[50%] sm:left-[50%] sm:-translate-x-1/2 sm:-translate-y-1/2"
      style={{
        height: "auto",
        background: "#000000",
        border: "2px solid #555",
        outline: "1px solid #111",
        fontFamily: "'VT323', monospace",
      }}
    >
      {/* Title Bar - Black Theme */}
      <div
        className="flex justify-between items-center px-2 py-1 select-none"
        style={{
          background: "#1a1a1a",
          color: "#ffffff",
          borderBottom: "1px solid #333",
        }}
      >
        <div className="flex items-center gap-2">
          <img src="/assets/start.ico" alt="icon" className="w-4 h-4" style={{ filter: "grayscale(100%) brightness(200%)" }} />
          <span className="font-bold text-sm tracking-wide">WELCOME.EXE</span>
        </div>

      </div>

      {/* Content - Pure Black, Pixelated */}
      <div
        className="flex sm:flex-row flex-col items-center gap-4 sm:gap-6 p-4 sm:p-6"
        style={{ background: "#000000", color: "#ffffff" }}
      >
        <img
          src="/assets/images/me-main.jpg"
          alt="Preethi Durgaprasad profile photo"
          className="w-24 h-32 sm:w-40 sm:h-56 object-cover"
          style={{
            border: "2px solid #333",
            boxShadow: "2px 2px 0px #ffffff",
            objectPosition: "top center",
          }}
        />
        <div className="text-left space-y-2 flex-1 text-[16px] sm:text-[22px]">
          <h2 
            className="text-2xl sm:text-4xl md:text-5xl font-bold font-['VT323']"
            style={{ wordSpacing: "-4px" }}
          >
          Preethi Durgaprasad
        </h2>
          <p className="leading-tight" style={{ color: "#cccccc" }}>
            &gt; INIT SYSTEM... OK<br/>
            &gt; Welcome to my digital workspace!<br/>
            <span className="hidden sm:inline">&gt; I'm a systems-oriented software developer.<br/></span>
            &gt; Feel free to look around and explore my projects and experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeWindow;
