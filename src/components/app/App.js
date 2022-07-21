import React from "react";
import Navbar from "../navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "../home/Home";
import Search from "../search/Search";
import MealDetails from "../details/MealDetails";

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
      </div>

      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/search" element={<Search/>}></Route>
        <Route exact path="/meal/:mealId" element={<MealDetails/>}></Route>
      </Routes>

    </Router>
   
  );
}

export default App;
