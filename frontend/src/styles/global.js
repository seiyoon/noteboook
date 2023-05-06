import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  #root, body,html {
    max-width: 100vw;
    min-height: 100%;
    margin: 0 auto;
    font-size: 62.5%;
    font-family: 'Inter';
  }

  * {
    box-sizing: border-box;
	}

  button:hover {
    cursor: pointer;
  }

  a {
    text-decoration-line: none;
  }  
`;

export default GlobalStyle;
