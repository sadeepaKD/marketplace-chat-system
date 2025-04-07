import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/chat/:roomId" element={<ChatPage />} />
          <Route path="/" element={<ChatPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;