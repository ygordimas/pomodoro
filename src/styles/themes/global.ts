import { createGlobalStyle } from "styled-components";
import { defaultTheme } from "./default";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    html {
        height: 100%;
        width: 100%;
    }
    body {
        height: 100%;
        background: ${defaultTheme["gray-dark"]} 
    }
    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
    }
    #root {
        
        height: 100%;
    }
`;
