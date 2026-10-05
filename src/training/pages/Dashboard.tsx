import { useState } from "react";
import Toolbar from "./Toolbar";

function Dashboard() {
  const [theme, setTheme] = useState("light");

  return (
    <div>
      <button type="button" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle theme
      </button>
      <Toolbar theme={theme} />
    </div>
  );
}

export default Dashboard;
