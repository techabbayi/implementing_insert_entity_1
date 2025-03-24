// src/App.jsx

import React from 'react';
import Home from './Home';
import AddBookForm from './components/AddBookForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBookForm />} />

      </Routes>
    </Router>
  );
}

export default App;
