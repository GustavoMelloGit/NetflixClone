import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    a{
        text-decoration: none;
    }
    body{
        font-family: 'Roboto', sans-serif;
        height: 100%;
    }
    #root{
        height: 100%;
    }
    .pointer{
        cursor: pointer;
    }
    button{
        cursor: pointer;
    }
`;

export default GlobalStyle;
