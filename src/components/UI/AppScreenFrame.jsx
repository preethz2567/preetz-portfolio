import React, { useContext, useRef } from "react";
import AppContext from "../../context/AppContext";
import { motion, useDragControls } from "framer-motion";

const AppScreenFrame = ({
  children,
  className,
  appInfo,
  isActive,
  isMaximized,
  isMinimized,
}) => {
  const { closeApp, activeApp, minimizeApp, toggleFullScreen } =
    useContext(AppContext);
  const controls = useDragControls();
  const mainDivRef = useRef();

  function startDrag(event) {
    controls.start(event);
  }

  return (
    <motion.div
      className={`absolute border mobileMaximized ${
        isActive ? "z-50" : isMinimized ? "-z-50" : "z-10"
      } ${
        isMaximized
          ? "appMaximized"
          : "w-[85%] sm:w-[680px] h-[70vh] sm:h-[75vh] max-h-[680px]"
      }`}
      style={{
        background: "var(--color-window-chrome)",
        borderColor: isActive
          ? "var(--color-accent)"
          : "var(--color-border-dark)",
        padding: "2px",
      }}
      ref={mainDivRef}
      drag
      dragMomentum={false}
      dragElastic={0.1}
      dragListener={false}
      dragControls={controls}
      onPointerDown={() => activeApp(appInfo.name)}
    >
      {/* ─── Title bar ─── */}
      <div
        className="flex items-center justify-between min-w-[min-content] px-2 sm:h-[34px] h-[38px] sm:touch-auto touch-none"
        style={{
          background: isActive
            ? "var(--color-active-title)"
            : "var(--color-inactive-title)",
          cursor: "default",
        }}
        onPointerDown={startDrag}
        onTouchStart={startDrag}
      >
        {/* App name + icon */}
        <div className="flex justify-start gap-2 items-center h-full">
          <img
            src={appInfo.path}
            alt={appInfo.name + " Icon"}
            className={appInfo.headerIconSize}
          />
          <span
            className="text-[13px] font-semibold select-none"
            style={{ color: "var(--color-text-light)" }}
          >
            {appInfo.name}
          </span>
        </div>

        {/* Window control buttons */}
        <div className="flex gap-[3px]">
          {/* Minimize */}
          <button
            className="flex justify-center items-center cursor-default sm:h-[20px] sm:w-[18px] h-[22px] w-[20px]"
            style={{
              background: "var(--color-btn-face)",
              border: "1px solid var(--color-border-dark)",
              color: "var(--color-text-light)",
            }}
            onClick={() => minimizeApp(appInfo.name)}
          >
            <img src="/assets/minimize.svg" alt="minimize" className="w-[10px]" />
          </button>
          {/* Maximize / Restore */}
          <button
            className="flex justify-center items-center cursor-default sm:h-[20px] sm:w-[18px] h-[22px] w-[20px]"
            style={{
              background: "var(--color-btn-face)",
              border: "1px solid var(--color-border-dark)",
              color: "var(--color-text-light)",
            }}
            onClick={() => toggleFullScreen(appInfo.name)}
          >
            <img
              src={isMaximized ? "/assets/restore.svg" : "/assets/maximize.svg"}
              alt="maximize"
              className="w-[10px]"
            />
          </button>
          {/* Close */}
          <button
            className="flex justify-center items-center cursor-default sm:h-[20px] sm:w-[18px] h-[22px] w-[20px]"
            style={{
              background: "#6a2020",
              border: "1px solid #8a3030",
              color: "#fff",
            }}
            onClick={() => closeApp(appInfo.name)}
          >
            <img src="/assets/close.svg" alt="close" className="w-[10px]" />
          </button>
        </div>
      </div>

      {/* ─── Content area ─── */}
      <motion.div
        className={
          className +
          ` w-full relative ${
            isMaximized ? "appContentHeightInMax" : "appContentHeightInMin"
          }`
        }
        onDragStart={() => (mainDivRef.current.dragListener = true)}
        onDragEnd={() => (mainDivRef.current.dragListener = false)}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default AppScreenFrame;
