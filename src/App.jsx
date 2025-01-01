import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import HomePage from './Components/HomePage/HomePage';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/register" element={<Register />} />
         <Route path="/login" element={<Login />} />
       </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
