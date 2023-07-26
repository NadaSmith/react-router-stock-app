import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Stock from "./pages/Stock";
import About from "./pages/About";
import Dashboard from './components/Dashboard';


function App() {
  return (
    <Router className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks" element={<Dashboard />} />
        <Route path="/stocks/:symbol" element={<Stock />} />
      </Routes>
    </Router>
  );
}

export default App;

//Router provides the routing functionality 
//Switch ensures that only one route is rendered at a time;
//Route defines mapping btw URLs and the components that should be rendered when those URLs are matched