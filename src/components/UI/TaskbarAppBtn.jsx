import React from "react";

const TaskbarAppBtn = ({
  appName,
  iconSrc,
  isActive,
  activeHandler,
  minimizeApp,
}) => {
  return (
    <button
      className={`w-fit sm:w-[120px] text-[12px] max-w-[130px] h-[28px] sm:h-[24px] mt-[2px] mb-[2px] leading-tight overflow-hidden px-2 flex justify-start items-center gap-2 cursor-default ${
        isActive ? "BtnClicked" : ""
      }`}
      style={{
        background: isActive ? undefined : "var(--color-btn-face)",
        color: "var(--color-text-light)",
        border: "1px solid var(--color-border-dark)",
        boxShadow: "none",
      }}
      onClick={() => {
        if (isActive) minimizeApp();
        else activeHandler();
      }}
    >
      <img
        src={iconSrc}
        alt={appName + " Icon"}
        className="w-[16px] h-[16px] sm:w-[14px] sm:h-[14px] flex-shrink-0"
        style={{ filter: "grayscale(30%)" }}
      />
      <span className="hidden sm:inline-block truncate">{appName}</span>
    </button>
  );
};

export default TaskbarAppBtn;
