import React from "react";

const GithubWidget = () => {
  return (
    <div
      className="absolute flex flex-col z-10 shadow-[1px_1px_0_#333,2px_2px_0_#333] cursor-pointer hover:scale-105 transition-transform"
      style={{
        bottom: "10%",
        right: "5%",
        background: "#000000",
        border: "2px solid #555",
        outline: "1px solid #111",
        fontFamily: "'MS Sans Serif', monospace",
        width: "350px",
      }}
      onClick={() => window.open("https://github.com/preethz2567", "_blank")}
    >
      <div
        className="flex justify-between items-center px-2 py-1 select-none"
        style={{
          background: "#1a1a1a",
          color: "#ffffff",
          borderBottom: "1px solid #333",
        }}
      >
        <div className="flex items-center gap-2">
          <span className="font-bold text-xs tracking-wide">GITHUB_CONTRIBUTIONS.EXE</span>
        </div>
      </div>
      <div className="p-3 flex justify-center items-center bg-black">
        <img
          src="https://ghchart.rshah.org/298C5E/preethz2567"
          alt="GitHub Contributions"
          style={{ width: "100%", filter: "contrast(1.5) grayscale(0.2)" }}
        />
      </div>
    </div>
  );
};

export default GithubWidget;
