import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Hotel from './components/Hotel';
import "./Hotel.css";
import { Routes, Route } from 'react-router-dom';
import Destination from './components/Destination';
import Tickets from './components/tickets';
import Navbar from './Navbar';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route  path="/destination" element={<Destination/>} />
        <Route path="/hotel" element={<Hotel/>} />
        <Route path="/tickets" element={<Tickets/>} />
      </Routes>
    </Router>
  );
}

export default App;
