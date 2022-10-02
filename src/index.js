import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import Navbar from './components/navbar/Navbar.js'

import './index.scss';
import Dashboard from './components/dashboard/Dashboard.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user/:userId" element={<Dashboard />} />
        <Route path="/user/:userId/activity" element={<Dashboard />} />
        <Route path="/user/:userId/average-sessions" element={<Dashboard />} />
        <Route path="/user/:userId/today-score" element={<Dashboard />} />
        <Route path="/user/:userId/activities" element={<Dashboard />} />
        <Route path="/user/:userId/key-data" element={<Dashboard />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
