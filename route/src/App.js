import React from "react";
import About from "./about";
import Home from "./home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return(
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;

