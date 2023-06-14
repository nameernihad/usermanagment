import React from 'react';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Secret from "./pages/secret";
import  "react-toastify/dist/ReactToastify.css";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/" element={<Secret/>} />
        <Route exact path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}


