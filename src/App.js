import { useState } from "react";
import Toggler from "./Toggler";
// import ThemeContext from "./ThemeContext";
import styled, { ThemeContext } from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStlyes = createGlobalStyle`
body{
  background-color: ${(props) => (props.darkMode ? "#334" : "#eef")};
  color: ${(props) => (props.darkMode ? "#eee" : "#222")};
}
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <GlobalStlyes darkMode={darkMode} />
        <h2>Dark Mode</h2>
        <Toggler />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
