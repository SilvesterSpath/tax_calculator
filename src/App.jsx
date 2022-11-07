import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { ItemList } from './components/ItemList';
import { AddItem } from './components/AddItem';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <h4>Your Balance</h4>
      </div>
      <div className='inc-exp-container'>
        <Balance />
      </div>
      <ItemList />
      <AddItem />
    </GlobalProvider>
  );
}

export default App;
