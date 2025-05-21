import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/cart">Cart</Link> | 
        <Link to="/login">Login</Link> | 
        <Link to="/register">Register</Link> | 
        <Link to="/admin">Admin</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminProducts />} />
      </Routes>
    </Router>
  );
};

export default App;
