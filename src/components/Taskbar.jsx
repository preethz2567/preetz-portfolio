import { useState, useContext } from "react";
import StartMenu from "./StartMenu";
import { Menu } from "../content/menu";
import TaskbarAppBtn from "./UI/TaskbarAppBtn";
import AppContext from "../context/AppContext";
import Clock from "./UI/Clock";

const Taskbar = () => {
  const { state, activeApp, minimizeApp } = useContext(AppContext);
  const [isStartClicked, setIsStartClicked] = useState(false);

  return (
    <>
      {isStartClicked && <StartMenu setCloseStartMenu={setIsStartClicked} />}
      <div
        className="fixed bottom-0 left-0 w-screen h-[40px] sm:h-[36px] border-t p-[4px] z-[100] flex justify-between items-center overflow-hidden"
        style={{
          background: "var(--color-taskbar-bg)",
          borderColor: "var(--color-border-dark)",
        }}
      >
        {/* Left: Start + open app buttons */}
        <div className="flex items-center justify-center gap-[4px] p-1">
          {/* Start button */}
          <button
            className={`flex items-center justify-center gap-1 text-[13px] px-2 h-[28px] sm:h-[26px] cursor-default ${
              isStartClicked ? "BtnClicked" : ""
            }`}
            style={{
              background: isStartClicked ? undefined : "var(--color-btn-face)",
              color: "var(--color-text-light)",
              border: "1px solid var(--color-border-dark)",
              minWidth: 72,
            }}
            onClick={() => setIsStartClicked((prev) => !prev)}
          >
            <img src="/assets/start.ico" alt="start" className="w-[16px] h-[16px]" />
            Start
          </button>

          {/* Divider */}
          <div
            className="h-[22px] mx-1"
            style={{ borderLeft: "1px solid var(--color-border-dark)", borderRight: "1px solid #0e0f12" }}
          />

          {/* Open app buttons — driven by Menu so no per-app hardcoding */}
          {Menu.map((menu) => {
            const appState = state[menu.name];
            if (!appState?.open) return null;
            const isActive = appState.top && !appState.minimize;
            return (
              <TaskbarAppBtn
                key={menu.name}
                appName={menu.name}
                iconSrc={menu.path}
                isActive={isActive}
                activeHandler={() => activeApp(menu.name)}
                minimizeApp={() => minimizeApp(menu.name)}
              />
            );
          })}
        </div>

        {/* Right: clock tray */}
        <div
          className="flex items-center justify-center gap-[5px] px-2 h-[28px] sm:h-[26px] m-1 cursor-default"
          style={{
            border: "1px solid var(--color-border-dark)",
            background: "var(--color-btn-face)",
            color: "var(--color-text-light)",
          }}
        >
          <img src="/assets/speakers.png" alt="speaker" className="w-[14px] h-[14px]" />
          <Clock />
        </div>
      </div>
    </>
  );
};

export default Taskbar;
