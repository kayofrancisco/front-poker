import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --vermelho: #e52e4d;
        --azul: #5429cc;

        --azul-light: #6933ff;

        --titulo-texto: #363f5f;
        --corpo-texto: #969cb3;

        --shape: #ffffff; 
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 20px;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;