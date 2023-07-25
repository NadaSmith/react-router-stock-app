import './App.css';
import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Stock from "./pages/Stock";
import About from "./pages/About"
import stocks from './data';
import Dasbhoard from './components/Dashboard';

function App() {
  return (
    <Router className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" componenet={About} />
        <Route exact path="/stocks" component={Dashboard} />
        <Route path="/stocks: symbol" component={Stock} />
      </Switch>
    </Router>
  );
}

export default App;
