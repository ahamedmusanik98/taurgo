import React, { useState } from 'react';
import './RegisterClientSteps.css';
import RegisterStep1 from './RegisterStep1';
import RegistrationSteps from './RegistrationSteps';
import CompanyAddressForm from './CompanyAddressForm';
import OnboardingForm from './OnboardingForm';
import CompanyInformation from './companyInformation';


function RegisterClientSteps() {
    const [currentStep, setCurrentStep] = useState(2);

    const handleNext = () => {
        if (currentStep < 5) setCurrentStep(prevStep => prevStep + 1);
    };

    const handlePrevious = () => {
        if (currentStep > 1) setCurrentStep(prevStep => prevStep - 1);
    };

    const stepLabels = [
        'Select your expertise',
        'Client Details',
        'Company address',
        'Fit to work',
        'Onboarding Complete',
    ];

    return (
        <div className="register-client-steps">
            {/* Progress Tracker */}
            <div className="progress-bar">
                {stepLabels.map((label, index) => (
                    <div
                        key={index}
                        className={`step ${currentStep > index + 1 ? 'completed' : ''}`}
                    >
                        <div className={`circle ${currentStep === index + 1 ? 'active' : ''}`}>
                            {index + 1}
                        </div>
                        <span className="label">{label}</span>
                        {index < stepLabels.length - 1 && (
                            <div className={`line ${currentStep > index + 1 ? 'completed' : ''}`}></div>
                        )}
                    </div>
                ))}
            </div>

            {currentStep === 1 && (
                <RegistrationSteps />
            )}


            {currentStep === 2 && (
                <RegisterStep1 />
            )}

            {currentStep === 3 && (
                <CompanyAddressForm />
            )}

            {currentStep === 4 && (
                <CompanyInformation />
            )}

            {currentStep === 5 && (
                <OnboardingForm />
            )}

            {/* Navigation Controls */}
            <div className="form-navigation">
                {currentStep > 1 && currentStep < 5 && (
                    <button onClick={handlePrevious}>Previous</button>
                )}
                {currentStep < 5 && <button onClick={handleNext}>Next</button>}
            </div>
        </div>
    );
}

export default RegisterClientSteps;
