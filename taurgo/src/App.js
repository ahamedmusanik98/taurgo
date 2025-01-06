import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Login/LoginPage';
import Register from './Register as client/Register';


import RegisterClientSteps from './Register as client/RegisterClientSteps';

import PartnerRegisterPage from './Register as partner/PartnerRegisterPage';
import RegisterPartnerSteps from './Register as partner/RegisterPartnerSteps';






function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
     
       
        <Route path="/registerclient" element={<RegisterClientSteps />} />
        <Route path="/PartnerRegisterPage" element={<PartnerRegisterPage />} />
        <Route path="/RegisterPartnerSteps" element={<RegisterPartnerSteps />} />
       


      </Routes>
    </Router>
  );
}

export default App;
