import { useState } from "react";
import logoImg from "../../assets/logo2.png";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <div>
          <img src={logoImg} alt="dougmoney" />
          <span>DougMoney</span>
        </div>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
};
