import { Dashboard } from './pages/Dashboard';
import { GlobalStyle } from './styles/global';
import { TransactionsProvider } from './contexts/TransactionsContext';

export function App() {
  return (
    <TransactionsProvider>
      <Dashboard />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
