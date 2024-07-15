import React from 'react';
import './App.css';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignupSucces from './Signup/SignupSucces';
import LoginSucces from './Login/LoginSucces';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login-success" element={<LoginSucces />} />
        <Route path="/signup-success" element={<SignupSucces />} />
      </Routes>
    </Router>
  );
}

export default App;
