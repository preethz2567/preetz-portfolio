import React, { useContext, useRef, useState } from "react";
import { motion } from "framer-motion";
import AppContext from "../../context/AppContext";
import { isMobileDevice } from "../../util/IsMobileDevice";

const Icon = ({ menu }) => {
  const { state, openApp, activeApp } = useContext(AppContext);
  const [selected, setSelected] = useState(false);
  const resetTimer = useRef(null);

  const handleOpen = () => {
    if (state[menu.name]) {
      if (!state[menu.name].open) {
        openApp(menu.name);
      } else {
        activeApp(menu.name);
      }
    }
  };

  const handleClick = () => {
    if (isMobileDevice) {
      if (!selected) {
        // First tap: select the icon
        setSelected(true);
        // Auto-deselect after 2 seconds of inactivity
        clearTimeout(resetTimer.current);
        resetTimer.current = setTimeout(() => setSelected(false), 2000);
      } else {
        // Second tap: open the app
        setSelected(false);
        clearTimeout(resetTimer.current);
        handleOpen();
      }
    } else {
      // Desktop: single click just focuses
    }
  };

  return (
    <motion.div
      aria-label={menu.name}
      tabIndex="-1"
      className="flex flex-col items-center z-10 gap-1 rounded-sm px-1 py-1 focus-within:outline"
      drag={isMobileDevice ? false : true}
      dragMomentum={false}
      dragElastic={0.1}
      onDoubleClick={handleOpen}
      onClick={handleClick}
      style={{
        outlineColor: "var(--color-accent)",
        outlineOffset: "2px",
        userSelect: "none",
        cursor: "default",
        outline: selected ? "1px solid var(--color-accent)" : undefined,
        backgroundColor: selected ? "rgba(255,255,255,0.08)" : undefined,
      }}
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
