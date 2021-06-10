import { Container, Conteudo, BotaoPagina } from "./styles";

interface HeaderProps {
    mudouPagina: (novaPagina: string) => void;
    paginaSelecionada: string;
}

export function Header({ mudouPagina, paginaSelecionada }: HeaderProps) {
    return (
        <Container>
            <Conteudo>
                <BotaoPagina
                    type="button"
                    onClick={() => mudouPagina('clubes')}
                    ativo={paginaSelecionada === 'clubes'}
                >
                    Clubes
                </BotaoPagina>
                <BotaoPagina
                    type="button"
                    onClick={() => mudouPagina('partidas')}
                    ativo={paginaSelecionada === 'partidas'}
                >
                    Partidas
                </BotaoPagina>
            </Conteudo>
        </Container >
    )
}