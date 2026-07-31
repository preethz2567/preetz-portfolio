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
      <div className="w-screen h-screen bg-transparent">
        <div
          className="w-screen h-screen flex justify-center items-center -z-10 flex-col overflow-hidden"
          style={{ background: "var(--color-desktop-bg)" }}
        >
          {/* Desktop Icons - Col 1 (Top on mobile, Left on desktop) */}
          <div className="flex sm:flex-col flex-row flex-wrap gap-5 sm:gap-6 absolute top-[3%] sm:top-[2%] left-[2%] z-10 w-[96%] sm:w-auto px-2 justify-center sm:justify-start">
            {col1.map((menu, i) => (
              <Icon key={menu.name} menu={menu} />
            ))}
          </div>

          {/* Desktop Icons - Col 2 (Bottom on mobile, 2nd Column on desktop) */}
          <div className="flex sm:flex-col flex-row flex-wrap gap-5 sm:gap-6 absolute bottom-[12%] sm:bottom-auto sm:top-[2%] sm:left-[100px] left-[2%] z-10 w-[96%] sm:w-auto px-2 justify-center sm:justify-start">
            {col2.map((menu, i) => (
              <Icon key={menu.name} menu={menu} />
            ))}
          </div>

          {/* App windows */}
          <AppScreen />

          {/* Persistent Welcome Window */}
          {showWelcome && <WelcomeWindow onClose={() => setShowWelcome(false)} />}

          {/* GitHub Contributions Widget */}
          <GithubWidget />

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
              Full Stack Developer
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
