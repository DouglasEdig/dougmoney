import Modal from "react-modal";
import { Container } from "./styles";

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
      <Container>
        <h2>Cadastrar transação</h2>
        <input placeholder="Titulo" />
        <input type="number" placeholder="Titulo" />
        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};
