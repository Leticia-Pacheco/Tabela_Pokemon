import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    /* Paleta de cores */
    :root{
        --primary: #207996;
        --light: #FFFFFF;
        --gray: #d5e3e8;
    }

    body {
        width: 100vw;
        min-height: 10vh;
        height: auto;
        overflow: hidden;
    }

    *{
        margin: 0px;
        padding: 0px;
        outline: 0px;
        box-sizing: border-box;
    }

    /* A scrollbar num todo, tamanho, cores e afins */
    ::-webkit-scrollbar {
        width: 4px;
        background-color: var(--gray);
    }

    /* A parte de trás da barra de rolagem */
    ::-webkit-scrollbar-track {
        background-color: var(--gray);
    }

    /* O cursorzinho que, normalmente é cinza escuro. */
    ::-webkit-scrollbar-thumb {
        background-color: var(--light);
        border-radius: 2px;
    }
`;