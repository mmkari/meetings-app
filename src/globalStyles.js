import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

// // @import not working currently:
// // (https://styled-components.com/docs/faqs#note-regarding-css-import-and-createglobalstyle)
// @import url("https://fonts.googleapis.com/css?family=Lato:300,400,700,900");
  body {
    font-family: "Lato", sans-serif;
  }
`;

export default GlobalStyle;
