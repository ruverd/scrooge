import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

import closeImg from '../../../assets/close.svg'
import incomeImg from '../../../assets/income.svg'
import expenseImg from '../../../assets/expense.svg'
import { useTransactions } from '../../../hooks/useTransactions';

Modal.setAppElement('#root');

interface INewTransactionModalProps {
  onRequestClose: () => void;
  isOpen: boolean;
}

export function NewTransactionModal({ onRequestClose, isOpen }: INewTransactionModalProps){
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title, 
      price, 
      category, 
      type
    });

    setTitle('');
    setPrice(0);
    setCategory('');
    setType('deposit');

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="New Transaction"
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close Modal"/>
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Add new Transaction</h2>

        <input 
          type="text" 
          placeholder="Title"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input 
          type="number" 
          placeholder="Price"
          value={price}
          onChange={event => setPrice(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox 
            type="button" 
            onClick={() => { setType('deposit') }}
            key="deposit"
            isActive={type === 'deposit'} 
            activeColor="green" 
          >
            <img src={incomeImg} alt="Income"/>
            <span>Income</span>
          </RadioBox>
          <RadioBox 
            type="button" 
            onClick={() => { setType('withdraw') }}
            key="withdraw"
            isActive={type === 'withdraw'} 
            activeColor="red" 
          >
            <img src={expenseImg} alt="Expense"/>
            <span>Expense</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input 
          type="text" 
          placeholder="Category"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">Save</button>
      </Container>
    </Modal>
  );
}