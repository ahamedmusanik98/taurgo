import React, { useState } from 'react';
import './RegisterClientSteps.css';

const RegisterClientSteps = () => {
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

            {/* Step-Specific Content */}
            {currentStep === 2 && (
                <div className="form-section">
                    <h2>Organisation Details</h2>
                    <form>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="companyName">Company Name *</label>
                                <input
                                    type="text"
                                    id="companyName"
                                    placeholder="Enter company name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name *</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    placeholder="Enter full name"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="hello@example.com"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="Enter phone number"
                                    required
                                />
                            </div>
                        </div>
                    </form>
                </div>
            )}

            {/* Navigation Controls */}
            <div className="form-navigation">
                {currentStep > 1 && <button onClick={handlePrevious}>Previous</button>}
                {currentStep < 5 && <button onClick={handleNext}>Next</button>}
            </div>
        </div>
    );
};

export default RegisterClientSteps;
