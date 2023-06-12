import React from 'react';
import { BrowserRouter, Routes,Route } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<register/>} />
        <Route exact path="/login" element={<login/>} />
        <Route exact path="/" element={<secret/>} />
      </Routes>
    </BrowserRouter>
  )
}


