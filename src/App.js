import "./App.css";
import { ThemeProvider } from "styled-components";

import Main from "./components/Main";
import GlobalStyle from "./globalStyles";

const theme = {
  highlight: "#ac3",
};

function App() {
  return (
    <ThemeProvider theme={theme} className="App">
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  );
}

export default App;
