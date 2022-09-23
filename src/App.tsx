import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyles } from "./Styles/global";
import { useState } from "react";
import Modal from "react-modal";
import { NewTranslationModal } from "./components/NewTransactionModal";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true);
  };

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false);
  };
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTranslationModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyles />
    </>
  );
}
