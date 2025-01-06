import React, { useState } from 'react';
import '../Register as client//RegisterClientSteps.css';
import Expertises from './Expertises';
import PersonalDetails from './PersonalDetails';
import ProfessionalDetails from './ProfessionalDetails';
import CurrentAddressForm from './CurrentAddressForm';
import OnboardingFormPartner from './OnboardingFormPartner';



function RegisterPartnerSteps() {
    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
        if (currentStep < 5) setCurrentStep(prevStep => prevStep + 1);
    };

    const handlePrevious = () => {
        if (currentStep > 1) setCurrentStep(prevStep => prevStep - 1);
    };

    const stepLabels = [
        'Select your expertises',
        'Personals Details',
        'Professional Details',
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
                <Expertises />
            )}


            {currentStep === 2 && (
                <PersonalDetails />
            )}

            {currentStep === 3 && (
                <CurrentAddressForm />
            )}

            {currentStep === 4 && (
                <ProfessionalDetails />
            )}

            {currentStep === 5 && (
                <OnboardingFormPartner />
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

export default RegisterPartnerSteps;
