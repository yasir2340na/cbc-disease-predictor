// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // optional for styling
import logo from '/src/pages/logo.png'; // Ensure this path is correct

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo-container">
        <Link to="/">
          <img src="/src/pages/logo.png" alt="App Logo" className="app-logo" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
