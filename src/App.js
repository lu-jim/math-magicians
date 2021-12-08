import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Quote from './components/Quote';
import Calculator from './components/Calculator';

export default function App() {
  return (
    <Router>
      <nav id="navbar">
        <h1 className="nav-title">  Math Magicians</h1>
        <ul className="navlist">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/quote">Quote</Link>
          </li>
        </ul>
      </nav>
      <div className="App">
        <Routes>
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>

  );
}
