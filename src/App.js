import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Stock from "./pages/Stock";
import About from "./pages/About"
import stocks from './data';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" componenet={About} />
        <Route exact path="/stocks" component={Dashboard} />
        <Route path="/stocks: symbol" component={Stock} />
      </Routes>
    </Router>
  );
}

export default App;

//Router provides the routing functionality 
//Switch ensures that only one route is rendered at a time;
//Route defines mapping btw URLs and the components that should be rendered when those URLs are matched