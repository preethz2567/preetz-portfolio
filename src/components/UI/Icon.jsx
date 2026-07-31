import React, { useContext, useRef } from "react";
import { motion } from "framer-motion";
import AppContext from "../../context/AppContext";
import { isMobileDevice } from "../../util/IsMobileDevice";

const Icon = ({ menu }) => {
  const { state, openApp, activeApp } = useContext(AppContext);
  const lastTapRef = useRef(0);

  const handleOpen = () => {
    if (state[menu.name]) {
      if (!state[menu.name].open) {
        openApp(menu.name);
      } else {
        activeApp(menu.name);
      }
    }
  };

  const handleTouchEnd = (e) => {
    const now = Date.now();
    const timeSince = now - lastTapRef.current;
    if (timeSince < 300 && timeSince > 0) {
      // Double tap detected
      e.preventDefault();
      handleOpen();
    }
    lastTapRef.current = now;
  };

  return (
    <motion.div
      aria-label={menu.name}
      tabIndex="-1"
      className="flex flex-col items-center z-10 gap-1 rounded-sm px-1 py-1 focus-within:outline"
      style={{
        outlineColor: "var(--color-accent)",
        outlineOffset: "2px",
        userSelect: "none",
        cursor: "default",
      }}
      drag={isMobileDevice ? false : true}
      dragMomentum={false}
      dragElastic={0.1}
      onDoubleClick={handleOpen}
      onTouchEnd={handleTouchEnd}
    >
      {/* Icon image with muted grayscale filter */}
      <img
        src={menu.path}
        alt={menu.name + " Icon"}
        className={menu.deskIconSize}
        draggable="false"
        style={{ filter: "grayscale(40%) brightness(0.85)" }}
      />
      {/* Label */}
      <span
        className="text-[11px] sm:text-[12px] text-center max-w-[70px] leading-tight"
        style={{ color: "var(--color-text-light)" }}
      >
        {menu.name}
      </span>
    </motion.div>
  );
};

export default Icon;
