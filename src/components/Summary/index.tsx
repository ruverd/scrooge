import { Container } from "./styles";

import incomeImg from "../../assets/income.svg";
import expenseImg from "../../assets/expense.svg";
import totalImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit'){
      acc.deposits += transaction.price;
      acc.total += transaction.price;
    } else {
      acc.withdraws += transaction.price
      acc.total -= transaction.price;
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  })
  
  return (
    <Container>
      <div>
        <header>
          <span>Income</span>
          <img src={incomeImg} alt="Income" />
        </header>
        <strong>
          {
            new Intl
            .NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            })
            .format(summary.deposits)
          }
        </strong>
      </div>
      <div>
        <header>
          <span>Expense</span>
          <img src={expenseImg} alt="Expense" />
        </header>
        <strong>
          {
            new Intl
            .NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            })
            .format(- summary.withdraws)
          }
        </strong>
      </div>
      <div>
        <header>
          <span>Total</span>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {
            new Intl
            .NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            })
            .format(summary.total)
          }
        </strong>
      </div>
    </Container>
  )
}