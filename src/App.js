import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Stock from "./pages/Stock";
import About from "./pages/About"
import stocks from './data';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/about" element={<></>} />
        <Route path="/stocks:symbol" element={<></>} />
        <Route path="/stocks" element={<></>} />
      </Routes>
    </div>
  );
}

export default App;
