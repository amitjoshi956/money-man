import './App.css';
import { AddNewTransaction } from './components/AddNewTransaction/AddNewTransaction';
import { Balance } from './components/Balance/Balance';
import { Header } from './components/Header/Header';
import { IncomeExpenses } from './components/IncomeExpenses/IncomeExpenses';
import { Transactions } from './components/Transactions/Transactions';

import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <Transactions />
        <AddNewTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
