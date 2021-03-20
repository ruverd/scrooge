import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from '../services/api';

interface ITransaction {
  id: number;
  title: string;
  price: number;
  type: string;
  category: string;
  createdAt: string;
}

// interface ITransactionInput {
//   title: string;
//   price: number;
//   type: string;
//   category: string;
// }

type TTransactionInput = Omit<ITransaction, 'id' | 'createdAt'>;

interface ITransactionsProviderProps {
  children: ReactNode;
}

interface ITransactionContextData {
  transactions: ITransaction[];
  createTransaction: (transaction: TTransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<ITransactionContextData>(
  {} as ITransactionContextData
);

export function TransactionsProvider({ children }: ITransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transaction: TTransactionInput){
    const response = await api.post('transactions', { 
      ...transaction,
      createdAt: new Date(),
    });

    setTransactions([
      ...transactions, 
      response.data.transaction,
    ]);
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}