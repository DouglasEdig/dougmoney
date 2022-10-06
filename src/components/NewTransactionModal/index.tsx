import Modal from "react-modal";
import { Container, ButtonTransaction, RadioButton } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";
interface NewTransationModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTranslationModal = ({
  isOpen,
  onRequestClose,
}: NewTransationModalProps) => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  function handleCreateNewTransation(event: FormEvent) {
    event.preventDefault();
    const data = {
      title,
      value,
      category,
      type,
    };
    api.post("/transactions", data);
  }

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
      <Container onSubmit={handleCreateNewTransation}>
        <h2>Cadastrar transação</h2>
        <input
          placeholder="Titulo"
          value={title}
          onChange={(event) => setTitle(event?.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />
        <ButtonTransaction>
          <RadioButton
            type="button"
            isActive={type === "deposit"}
            activeColor="green"
            onClick={() => {
              setType("deposit");
            }}
          >
            <img src={incomeImg} alt="entradas" />
            <span>Entradas</span>
          </RadioButton>
          <RadioButton
            type="button"
            isActive={type === "withdraw"}
            activeColor="red"
            onClick={() => {
              setType("withdraw");
            }}
          >
            <img src={outcomeImg} alt="saidas" />
            <span>Saídas</span>
          </RadioButton>
        </ButtonTransaction>
        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event?.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};
