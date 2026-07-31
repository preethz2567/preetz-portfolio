import { useContext } from "react";
import AppScreenFrame from "./UI/AppScreenFrame";
import { Menu } from "../content/menu";
import AppContext from "../context/AppContext";
import About from "./Apps/About";
import Mail from "./Apps/Mail";
import Projects from "./Apps/Projects";
import Skills from "./Apps/Skills";
import Experience from "./Apps/Experience";
import Education from "./Apps/Education";
import Hackathons from "./Apps/Hackathons";
import Competitions from "./Apps/Competitions";
import Certifications from "./Apps/Certifications";
import Resume from "./Apps/Resume";
import Journey from "./Apps/Journey";
import Socials from "./Apps/Socials";

// Build a lookup: appName → { component, menuIndex }
const menuByName = Object.fromEntries(Menu.map((m, i) => [m.name, { info: m, i }]));

const AppContentMap = {
  About:        About,
  Projects:     Projects,
  Mail:         Mail,
  Skills:       Skills,
  Experience:   Experience,
  Education:    Education,
  Hackathons:   Hackathons,
  Competitions: Competitions,
  Certifications: Certifications,
  Resume:       Resume,
  Journey:      Journey,
  Socials:      Socials,
};

const AppScreen = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      {Object.entries(AppContentMap).map(([appName, ContentComponent]) => {
        const appState = state[appName];
        if (!appState?.open) return null;
        const menuEntry = menuByName[appName];
        if (!menuEntry) return null;
        return (
          <AppScreenFrame
            key={appName}
            appInfo={menuEntry.info}
            isActive={appState.top}
            isMaximized={appState.fullscreen}
            isMinimized={appState.minimize}
            className=""
          >
            <ContentComponent isMaximized={appState.fullscreen} />
          </AppScreenFrame>
        );
      })}
    </>
  );
};

export default AppScreen;
