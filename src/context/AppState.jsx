import React, { useReducer } from "react";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import {
  MAXIMIZE_APP,
  MINIMIZE_APP,
  CLOSE_APP,
  OPEN_APP,
  ACTIVE_APP,
  OPEN_IMAGE,
  CLOSE_IMAGE,
  NEXT_IMAGE,
  PREV_IMAGE,
} from "./AppAction";

const defaultAppState = {
  open: false,
  minimize: false,
  closed: true,
  top: false,
  fullscreen: false,
};

const initialState = {
  Mail:         { ...defaultAppState },
  About:        { ...defaultAppState },
  Projects:     { ...defaultAppState },
  Skills:       { ...defaultAppState },
  Experience:   { ...defaultAppState },
  Education:    { ...defaultAppState },
  Hackathons:   { ...defaultAppState },
  Competitions: { ...defaultAppState },
  Certifications: { ...defaultAppState },
  Resume:       { ...defaultAppState },
  Journey:      { ...defaultAppState },
  Socials:      { ...defaultAppState },
  previouslyActiveApp: "",
  taskbarAppStack: [],
  activeImage: null,
  activeImageList: [],
};

const AppState = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const openApp = (appName) =>
    dispatch({
      type: OPEN_APP,
      payload: appName,
    });

  const closeApp = (appName) =>
    dispatch({
      type: CLOSE_APP,
      payload: appName,
    });
  const activeApp = (appName) =>
    dispatch({
      type: ACTIVE_APP,
      payload: appName,
    });

  const minimizeApp = (appName) => {
    dispatch({
      type: MINIMIZE_APP,
      payload: appName,
    });
  };
  const toggleFullScreen = (appName) => {
    dispatch({
      type: MAXIMIZE_APP,
      payload: appName,
    });
  };

  const openImage = (src, list) => {
    dispatch({
      type: OPEN_IMAGE,
      payload: { src, list },
    });
  };

  const closeImage = () => {
    dispatch({
      type: CLOSE_IMAGE,
    });
  };

  const nextImage = () => {
    dispatch({ type: NEXT_IMAGE });
  };

  const prevImage = () => {
    dispatch({ type: PREV_IMAGE });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        openApp,
        closeApp,
        activeApp,
        minimizeApp,
        toggleFullScreen,
        openImage,
        closeImage,
        nextImage,
        prevImage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
