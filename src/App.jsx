
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"

import Login from "./Login";
import Dashboard from "./Dashboard";

import Mechanics from "./Subject/Mechanics";
import Beee from "./Subject/Beee";
import Chemistry from "./Subject/Chemistry";
import Maths from "./Subject/Maths";
import Edcg from "./Subject/Edcg";



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />
        {/* <Route path="/page1" element={<h1>Page 1</h1>} /> */}
        <Route path ="/Mechanics" element={<Mechanics/>}/>
        <Route path="/Beee" element={<Beee/>} />
        <Route path="/Chemistry" element={<Chemistry/>} />
        <Route path="/Maths" element={<Maths/>} />
        <Route path="/Edcg" element={<Edcg/>} />

        </Routes>
      </Router>

    </div>
  )
}


export default App;

