import styled, { css } from 'styled-components';

interface ToastProps {
    tipo: 'sucesso' | 'alerta';

}

const tipoVariacoesToas = {
    sucesso: css`
        background: #aaffaa;
        color: #222;
    `,

    alerta: css`
    background: #fffC94;
    color: #222;
`,
}

export const Container = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    padding: 4rem 1rem 0 0;
    overflow: hidden;
`;


export const ToastContainer = styled.div<ToastProps>`
    width: 20rem;
    position: relative;
    padding: 1rem 2rem 1rem 1rem;
    border-radius: 0.5rem;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    
    ${(props) => tipoVariacoesToas[props.tipo] || 'alerta'}

    > svg {
        margin: 0.25rem 0.75rem 0 0;
    }

    div {
        flex: 1;
    }

    p {
        margin-top: 0.25rem;
        opacity: 0.8;
        line-height: 20px;
    }

    button {
        position: absolute;
        right: 1rem;
        top: 1rem;
        opacity: 0.6;
        border: 0;
        background: transparent;
        color: inherit;
    }
`;