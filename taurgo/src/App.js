import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Login/LoginPage';
import Register from './Register as client/Register';
import RegistrationSteps from './Register as client/RegistrationSteps';
import CompanyAddressForm from './Register as client/CompanyAddressForm';
import RegisterStep1 from './Register as client/RegisterStep1';
import RegisterClientSteps from './Register as client/RegisterClientSteps';
import OnboardingForm from './Register as client/OnboardingForm';
import PartnerRegisterPage from './Register as partner/PartnerRegisterPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registrationsteps" element={<RegistrationSteps />} />
        <Route path="/companyAddressForm" element={<CompanyAddressForm />} />
        <Route path="/registerstep1" element={<RegisterStep1 />} />
        <Route path="/registerclient" element={<RegisterClientSteps />} />
        {/* <Route path="/registerstep6" element={<RegisterStep6 />} /> */}
        <Route path="/OnboardingForm" element={<OnboardingForm />} />
        <Route path="/registerpartner" element={<PartnerRegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
