import AppScreen from "./AppScreen";
import Icon from "./UI/Icon";
import { Menu } from "../content/menu";
import Taskbar from "./Taskbar";
import WelcomeWindow from "./UI/WelcomeWindow";
import PhotoStrip from "./UI/PhotoStrip";
import ImageViewer from "./UI/ImageViewer";
import GithubWidget from "./UI/GithubWidget";

const Desktop = () => {
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
          {/* Desktop icons — two column layout */}
          <div className="flex flex-row gap-4 sm:gap-6 absolute top-[2%] left-[2%] z-10">
            <div className="flex flex-col gap-5 sm:gap-6">
              {col1.map((menu, i) => (
                <Icon key={menu.name} menu={menu} />
              ))}
            </div>
            <div className="flex flex-col gap-5 sm:gap-6">
              {col2.map((menu, i) => (
                <Icon key={menu.name} menu={menu} />
              ))}
            </div>
          </div>

          {/* App windows */}
          <AppScreen />

          {/* Persistent Welcome Window */}
          <WelcomeWindow />

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
