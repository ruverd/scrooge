import React, { useState } from "react";


import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsTable } from "../../components/TransactionsTable";
import { NewTransactionModal } from "./NewTransactionModal";
import { Container } from "./styles";

export function Dashboard(){
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModalOpen} />
      <Container>
        <Summary />
        <TransactionsTable />
        <NewTransactionModal 
          onRequestClose={handleCloseNewTransactionModalOpen} 
          isOpen={isNewTransactionModalOpen} 
        />
      </Container>
    </>
  )
}