import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import HomePage from './Components/HomePage/HomePage';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Expense from './Components/Expense/Expense';
import ExpenseSavePage from './Components/ExpenseSave/ExpenseSave';
import Main from './Components/Main/Main';
import Income from './Components/Income/Income';
import IncomeSave from './Components/IncomeSave/IncomeSave';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<HomePage />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/expense/save" element={<ExpenseSavePage />} />
          <Route path="/main" element={<Main />} />
          <Route path="/income" element={<Income />} />
          <Route path="/income/save" element={<IncomeSave />} />
        </Routes>
      </BrowserRouter>



    </>
  );
}

export default App;
