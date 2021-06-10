import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --vermelho: #e52e4d;
        --azul: #5429cc;
        --verde: #33cc95;
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

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 3rem;
        background: var(--verde);
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        font-weight: 600;
        margin-top: 1rem;

        transition: filter 0.2s;


        &:hover {
            filter: brightness(0.9)
        }
        
    }

    button.botao-novo {
        margin: 0 3px;
        font-size: 1.25rem;
        color: var(--shape);
        background: var(--azul-light);
        border: 1px solid var(--shape);
        padding: 0 2rem;
        border-radius: 0%.25rem;
        height: 2rem;
        /* position: absolute; */
        left: 2rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 600px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9)
        }
    }
`;