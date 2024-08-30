import { useState } from "react";
import BoardReact from "./boardR"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Add from "./add";

function App() {
  return (
      <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<BoardReact/>}/>
        <Route path="/add" element={<Add/>}/>
      </Routes>
    </BrowserRouter>  
      </div>  
  );
}

export default App;
