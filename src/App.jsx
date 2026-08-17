import { useEffect } from "react";
import Desktop from "./components/Desktop";
import AppState from "./context/AppState";
import Clippy from "./components/UI/Clippy";

function App() {
  useEffect(() => {
    document.addEventListener("contextmenu", (event) => event.preventDefault());
  }, []);
  return (
    <>
      <AppState>
        <Desktop />
        <Clippy />
      </AppState>
    </>
  );
}

export default App;
