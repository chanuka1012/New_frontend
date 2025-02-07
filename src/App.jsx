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
import Report from './Components/Report/Report';
import Budget from './Components/Budget/Budget';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/expense/save" element={<ExpenseSavePage />} />
          <Route path="/main" element={<Main />} />
          <Route path="/income" element={<Income />} />
          <Route path="/income/save" element={<IncomeSave />} />
          <Route path="/report" element={<Report />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/account" element={<Account />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/account/save" element={<AccountSave />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
