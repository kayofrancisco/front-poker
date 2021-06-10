import { FormEvent, useEffect, useState } from "react"
import Modal from 'react-modal';

import { Clube } from "../../models/Clube"
import { api } from "../../services/api"
import fechaImg from '../../assets/close.svg';

import { retirarLetras } from '../../shared/utils'

import { Container, ContainerBotoes, Form } from "./styles";

import { retornaDataSemHora } from '../../shared/utils';
import { AxiosError } from "axios";
import { FiTrash2, FiEdit } from 'react-icons/fi';

export function Clubes() {
    const [clubes, setClubes] = useState<Clube[]>([]);

    const [idClubeEditando, setIdClubeEditando] = useState('');

    const [modalClubeAberto, setModalClubeAberto] = useState(false);
    const [nome, setNome] = useState('');
    const [rakeback, setRakeback] = useState(0);

    useEffect(() => {
        api.get<Clube[]>('clubes').then(resposta => setClubes(resposta.data));
    }, [])

    function submitForm(evento: FormEvent) {
        evento.preventDefault();

        if (idClubeEditando) {
            editarClube();
        } else {
            if (verificaSeClubeJaExiste()) {
                alert('Clube já existe');
                return;
            }
            criarClube();
        }
    }

    function criarClube() {
        api.post<Clube>('clubes', { nome, rakeback }).then(resposta => {
            setClubes([...clubes, resposta.data]);
            fecharModal();
        }).catch((error: AxiosError) => {
            if (error.response?.status === 400) {
                alert(error.response.data.messages);
            }
        });
    }

    function editarClube() {
        api.put<Clube>('clubes/' + idClubeEditando, { nome, rakeback }).then(resposta => {
            clubes.forEach(clube => {
                if (clube.id === idClubeEditando) {
                    clube.nome = nome;
                    clube.rakeback = rakeback;
                }
            })
            fecharModal();
        }).catch((error: AxiosError) => {
            if (error?.response?.status === 400) {
                alert(error.response.data.messages);
            }
            fecharModal();
        });

    }

    function excluirClube(id: string) {
        api.delete<void>('clubes/' + id).then(resposta => {
            setClubes(clubes.filter(clube => clube.id !== id));
        }).catch((error: AxiosError) => {
            if (error?.response?.status === 400) {
                alert(error.response.data.messages);
            }
        });
    }

    function verificaSeClubeJaExiste(): Clube | undefined {
        return clubes.find(clube => clube.nome === nome);
    }

    function iniciarModoEdicao(clube: Clube) {
        setIdClubeEditando(clube.id);
        setNome(clube.nome);
        setRakeback(clube.rakeback);
        setModalClubeAberto(true);
    }

    function fecharModal() {
        setIdClubeEditando('');
        setNome('');
        setRakeback(0);
        setModalClubeAberto(false);
    }

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Rakeback</th>
                        <th>Data Entrada</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {clubes.map(clube => (
                        <tr key={clube.id}>
                            <td>{clube.nome}</td>
                            <td>{clube.rakeback}%</td>
                            <td>{retornaDataSemHora(clube?.criado_em)}</td>
                            <td>
                                <ContainerBotoes>
                                    <button type="button" onClick={() => iniciarModoEdicao(clube)}>
                                        <FiEdit size={20} color="363f5f" />
                                    </button>
                                    <button type="button" onClick={() => excluirClube(clube.id)}>
                                        <FiTrash2 size={20} color="363f5f" />
                                    </button>
                                </ContainerBotoes>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="div-novo-clube">
                <button
                    className="botao-novo"
                    type="button"
                    onClick={() => { setModalClubeAberto(true) }}
                >
                    novo clube
                </button>
            </div>
            <Modal
                isOpen={modalClubeAberto}
                onRequestClose={fecharModal}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
            >
                <Form onSubmit={submitForm}>
                    <button
                        type="button"
                        className="react-modal-close"
                        onClick={fecharModal}
                    >
                        <img src={fechaImg} alt="Fechar modal" />
                    </button>
                    <h2>Cadastrar Clube</h2>
                    <input
                        placeholder="Nome do Clube"
                        value={nome}
                        onChange={evento => setNome(evento.target.value)}
                    />
                    <input
                        placeholder="Rakeback"
                        value={rakeback}
                        onChange={evento => setRakeback(Number(retirarLetras(evento.target.value)))}
                    />
                    <button type="submit">Confirmar</button>
                </Form>
            </Modal>
        </Container>
    )
}