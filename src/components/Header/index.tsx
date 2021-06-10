import { Container, Conteudo, BotaoPagina } from "./styles";

interface HeaderProps {
    mudouPagina: (novaPagina: string) => void;
    paginaSelecionada: string;
}

export function Header({ mudouPagina, paginaSelecionada }: HeaderProps) {
    function clickouBotaoPagina(pagina: string) {
        mudouPagina(pagina);
    }

    return (
        <Container>
            <Conteudo>
                <BotaoPagina
                    type="button"
                    onClick={() => clickouBotaoPagina('clubes')}
                    ativo={paginaSelecionada === 'clubes'}
                >
                    Clubes
                </BotaoPagina>
                <BotaoPagina
                    type="button"
                    onClick={() => clickouBotaoPagina('partidas')}
                    ativo={paginaSelecionada === 'partidas'}
                >
                    Partidas
                </BotaoPagina>
            </Conteudo>
        </Container >
    )
}