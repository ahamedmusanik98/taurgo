import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Login/LoginPage';
import Register from './Register/Register';
import RegistrationSteps from './Register/RegistrationSteps';
import CompanyAddressForm from './Register/CompanyAddressForm';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registrationsteps" element={<RegistrationSteps />} />
        <Route path="/companyAddressForm" element={<CompanyAddressForm />} />
      </Routes>
    </Router>
  );
}

export default App;
