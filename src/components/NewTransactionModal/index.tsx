import Modal from "react-modal";
import { Container, ButtonTransaction } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
interface NewTransationModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTranslationModal = ({
  isOpen,
  onRequestClose,
}: NewTransationModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="modal-close">
        <img src={closeImg} alt="close" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>
        <input placeholder="Titulo" />
        <input type="number" placeholder="Valor" />
        <ButtonTransaction>
          <button type="button">
            <img src={incomeImg} alt="entradas" />
            <span>Entradas</span>
          </button>
          <button type="button">
            <img src={outcomeImg} alt="saidas" />
            <span>Saídas</span>
          </button>
        </ButtonTransaction>
        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};
