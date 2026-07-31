import { useContext } from "react";
import { Menu } from "../content/menu";
import AppContext from "../context/AppContext";

const StartMenu = ({ setCloseStartMenu }) => {
  const { state, openApp } = useContext(AppContext);

  return (
    <>
      {/* Click-away overlay */}
      <div
        className="w-screen h-screen z-[99] absolute top-0 left-0"
        onClick={() => setCloseStartMenu((prev) => !prev)}
      />
      <div
        aria-label="startMenu"
        className="flex z-[999] h-auto w-[210px] absolute left-[2px] bottom-[38px]"
        style={{
          background: "var(--color-window-chrome)",
          border: "1px solid var(--color-border-dark)",
          borderBottom: "none",
        }}
      >
        {/* Sidebar strip */}
        <div
          className="w-[26px] flex-shrink-0 flex items-end justify-center py-2"
          style={{ background: "var(--color-active-title)" }}
        >
          <span
            className="text-[10px] font-bold writing-mode-vertical select-none"
            style={{
              color: "rgba(255,255,255,0.6)",
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              letterSpacing: "0.15em",
            }}
          >
            PORTFOLIO
          </span>
        </div>

        {/* Menu items */}
        <div className="flex flex-col justify-between flex-1">
          <ul className="list-none m-0 p-0 pointer-events-auto">
            {Menu.map((app) => (
              <li
                key={app.name}
                className="flex gap-2 items-center px-3 py-2 cursor-default"
                style={{
                  color: "var(--color-text-light)",
                  borderBottom: "1px solid var(--color-border-dark)",
                  fontSize: "13px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--color-active-title)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
                onClick={() => {
                  if (state[app.name] && !state[app.name].open) openApp(app.name);
                  setCloseStartMenu((prev) => !prev);
                }}
              >
                <img
                  src={app.path}
                  alt={app.name + " Icon"}
                  className={app.startIconSize}
                  style={{ filter: "grayscale(30%) brightness(0.9)" }}
                />
                <span>{app.name}</span>
              </li>
            ))}
          </ul>

          {/* Shut Down */}
          <div
            className="flex gap-2 items-center px-3 py-3 cursor-default"
            style={{
              borderTop: "1px solid var(--color-border-dark)",
              color: "var(--color-text-light)",
              fontSize: "13px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--color-active-title)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            <img src="/assets/shutdown.png" alt="Shutdown" className="w-[20px] h-[20px]" />
            <span>Shut Down…</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartMenu;
