import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login.js';
import SignUp from './components/SignUp.js';
import Transactions from './components/Transactions.js';
import Incomes from './components/Incomes.js';
import Outcomes from './components/Outcomes.js';

function App() {
  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/transactions" element={<Transactions />} />
    <Route path="/income" element={<Incomes />} />
    <Route path="/outcome" element={<Outcomes />} />
  </Routes>
</BrowserRouter>
  );
}

export default App;
