import styled from 'styled-components';

interface BotaoPaginaProps {
    ativo: boolean;
}

export const Container = styled.header`
    background: var(--azul);
`;

export const Conteudo = styled.div`
    margin: 0 auto;
    max-width: 900px;
    padding: 0.5rem 1rem 1rem;

    display: flex;
    align-items: center;
    justify-content: flex-start;

`;

export const BotaoPagina = styled.button<BotaoPaginaProps>`
        margin: 0 3px;
        font-size: 1.25rem;
        color: var(--shape);
        background: ${(props) => props.ativo ? 'var(--azul-light)' : 'transparent'};
        border: ${(props) => props.ativo ? '1px solid var(--shape)' : '0'};
        padding: 0 2rem;
        border-radius: 0%.25rem;
        height: 2rem;

        cursor: ${(props) => props.ativo ? 'default' : 'pointer'};

        /* transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        } */

        &:first-child {
            margin: 0;
        }
`;
