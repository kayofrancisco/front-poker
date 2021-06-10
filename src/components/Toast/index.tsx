import { Container, ToastContainer } from "./styles";
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

export function Toast() {
    return (
        <Container>
            <ToastContainer tipo="alerta">
                <FiAlertCircle size={20} />

                <div>
                    <strong>Aconteceu um erro</strong>
                    <p>não foi possivel cadastrar</p>
                </div>

                <button type="button">
                    <FiXCircle size={18} />
                </button>
            </ToastContainer>

            <ToastContainer tipo="sucesso">
                <FiAlertCircle size={20} />

                <div>
                    <strong>Aconteceu um erro</strong>
                    <p>não foi possivel cadastrar</p>
                </div>

                <button type="button">
                    <FiXCircle size={18} />
                </button>
            </ToastContainer>
        </Container>
    )
}