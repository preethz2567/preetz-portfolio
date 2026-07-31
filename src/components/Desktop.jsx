import React, { useState } from "react";
import AppScreen from "./AppScreen";
import Icon from "./UI/Icon";
import { Menu } from "../content/menu";
import Taskbar from "./Taskbar";
import WelcomeWindow from "./UI/WelcomeWindow";
import PhotoStrip from "./UI/PhotoStrip";
import ImageViewer from "./UI/ImageViewer";
import GithubWidget from "./UI/GithubWidget";

const Desktop = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  // Split menu into two columns so icons don't overflow vertically on small screens
  const col1 = Menu.slice(0, Math.ceil(Menu.length / 2));
  const col2 = Menu.slice(Math.ceil(Menu.length / 2));

  return (
    <>
      <div className="w-full min-h-screen bg-transparent overflow-x-hidden">
        <div
          className="w-full min-h-[100dvh] sm:h-screen flex sm:justify-center items-center sm:items-center flex-col overflow-x-hidden overflow-y-auto sm:overflow-hidden pt-6 pb-24 sm:p-0 relative"
          style={{ background: "var(--color-desktop-bg)" }}
        >
          {/* Desktop Icons - Col 1 (Top on mobile, Left on desktop) */}
          <div className="relative sm:absolute grid grid-cols-3 sm:flex sm:flex-col gap-4 sm:gap-6 w-[96%] sm:w-auto px-2 place-items-center sm:justify-start sm:top-[2%] sm:left-[2%] z-10 mb-8 sm:mb-0">
            {col1.map((menu, i) => (
              <Icon key={menu.name} menu={menu} />
            ))}
          </div>

          {/* Persistent Welcome Window */}
          {showWelcome && <WelcomeWindow onClose={() => setShowWelcome(false)} />}

          {/* Desktop Icons - Col 2 (Bottom on mobile, 2nd Column on desktop) */}
          <div className="relative sm:absolute grid grid-cols-3 sm:flex sm:flex-col gap-4 sm:gap-6 w-[96%] sm:w-auto px-2 place-items-center sm:justify-start sm:top-[2%] sm:left-[100px] z-10 mt-8 mb-8 sm:mt-0 sm:mb-0">
            {col2.map((menu, i) => (
              <Icon key={menu.name} menu={menu} />
            ))}
          </div>

          {/* GitHub Contributions Widget - after col2 on mobile, bottom-right on desktop */}
          <div className="relative sm:absolute z-10 mb-10 sm:mb-0 sm:bottom-[10%] sm:right-[5%]">
            <GithubWidget />
          </div>

          <AppScreen />

          {/* Live Photo Strip */}
          <PhotoStrip />

          {/* Desktop watermark */}
          <div className="text-center select-none pointer-events-none">
            <h1
              className="text-4xl sm:text-5xl font-bold tracking-tight"
              style={{ color: "var(--color-text-light)", opacity: 0.12 }}
            >
              Preethi D
            </h1>
            <h2
              className="text-xl sm:text-2xl mt-1"
              style={{ color: "var(--color-text-light)", opacity: 0.08 }}
            >
              <span>Software Engineer</span>
            </h2>
          </div>
        </div>
      </div>
      <Taskbar />
      <ImageViewer />
    </>
  );
};

export default Desktop;
