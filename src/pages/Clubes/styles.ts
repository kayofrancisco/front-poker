import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    table {
        width: 100%;
        padding: 2rem;
        max-width: 1200px;
        border-spacing: 0 0 0.5rem;

        th {
            color: var(--corpo-texto);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--corpo-texto);
            border-radius: 0.25rem;

            &:first-child {
                color: var(--titulo-texto)
            }

            button {
                border: 0;
                background: none;
            }
        }

    }
    .div-novo-clube {
        width: 100%;
        padding: 0 0 0 2rem;
        max-width: 1200px;
    }
`;


export const ContainerBotoes = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const Form = styled.form`
    h2 {
        color: var(--titulo-texto);
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 2.5rem;
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;

        background: #e7e9ee;
        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--corpo-texto);
        }

        & + input {
            margin-top: 0.5rem;
        }
    }
`;