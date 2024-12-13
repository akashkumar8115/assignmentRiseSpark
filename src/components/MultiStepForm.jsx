import React, { useState, useEffect } from "react";
import PreliminaryForm from "./forms/PreliminaryForm";
import PersonalDetailsForm from "./forms/PersonalDetailsForm";
import KYCForm from "./forms/KYCForm";
import PartiesForm from "./forms/PartiesForm";
import ClaimDetailsForm from "./forms/ClaimDetailsForm";
import ReviewForm from "./forms/ReviewForm";
import PaymentForm from "./forms/PaymentForm";
import Notification from "./Notification";
import Stepper from "./Stepper";

const MultiStepForm = () => {
    // Add to state
    const [completedSteps, setCompletedSteps] = useState([]);

    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Preliminary
        caseTitle: "",
        caseType: "",

        // Personal Details
        firstName: "",
        lastName: "",
        email: "",
        phone: "",

        // KYC
        idType: "",
        idNumber: "",

        // Parties
        claimantCompany: "",
        claimantRegNumber: "",
        respondentCompany: "",
        respondentRegNumber: "",

        // Claim Details
        contractValue: "",
        claimAmount: "",
        claimDescription: "",

        // Payment
        paymentMethod: "",
        cardNumber: "",
        expiryDate: "",
        cvv: ""
    });

    const [notification, setNotification] = useState({
        show: false,
        message: "",
        type: ""
    });

    const showNotification = (message, type = "success") => {
        setNotification({ show: true, message, type });
        setTimeout(() => setNotification({ show: false, message: "", type: "" }), 3000);
    };

    const [errors, setErrors] = useState({});

    const validateStep = (step) => {
        let stepErrors = {};

        switch (step) {
            case 1: // Preliminary
                if (!formData.caseTitle) stepErrors.caseTitle = "Case title is required";
                if (!formData.caseType) stepErrors.caseType = "Case type is required";
                break;

            case 2: // Personal Details
                if (!formData.firstName) stepErrors.firstName = "First name is required";
                if (!formData.lastName) stepErrors.lastName = "Last name is required";
                if (!formData.email) stepErrors.email = "Email is required";
                else if (!/\S+@\S+\.\S+/.test(formData.email)) stepErrors.email = "Invalid email format";
                if (!formData.phone) stepErrors.phone = "Phone number is required";
                break;

            case 3: // KYC
                if (!formData.idType) stepErrors.idType = "ID type is required";
                if (!formData.idNumber) stepErrors.idNumber = "ID number is required";
                break;

            case 4: // Parties
                if (!formData.claimantCompany) stepErrors.claimantCompany = "Claimant company is required";
                if (!formData.respondentCompany) stepErrors.respondentCompany = "Respondent company is required";
                break;

            case 5: // Claim Details
                if (!formData.contractValue) stepErrors.contractValue = "Contract value is required";
                if (!formData.claimAmount) stepErrors.claimAmount = "Claim amount is required";
                if (!formData.claimDescription) stepErrors.claimDescription = "Claim description is required";
                break;

            case 7: // Payment
                if (!formData.paymentMethod) stepErrors.paymentMethod = "Payment method is required";
                if (formData.paymentMethod === 'credit') {
                    if (!formData.cardNumber) stepErrors.cardNumber = "Card number is required";
                    if (!formData.expiryDate) stepErrors.expiryDate = "Expiry date is required";
                    if (!formData.cvv) stepErrors.cvv = "CVV is required";
                }
                break;

            default:
                break;
        }

        return stepErrors;
    };

    const handleNext = () => {
        const stepErrors = validateStep(currentStep);

        if (Object.keys(stepErrors).length === 0) {
            setCompletedSteps([...completedSteps, currentStep]);
            if (currentStep === 7) {
                handleSubmit();
            } else {
                setCurrentStep(prev => prev + 1);
                setErrors({});
                showNotification("Step completed successfully!", "success");
            }
        } else {
            setErrors(stepErrors);
            showNotification("Please fill all required fields", "error");
        }
    };

    const handlePrevious = () => {
        setCurrentStep(prev => prev - 1);
        setErrors({});
    };

    const handleSubmit = () => {
        // Here you would typically send the data to your backend
        console.log("Form submitted:", formData);
        showNotification("Form submitted successfully!", "success");
    };

    const renderForm = () => {
        switch (currentStep) {
            case 1:
                return <PreliminaryForm formData={formData} setFormData={setFormData} errors={errors} />;
            case 2:
                return <PersonalDetailsForm formData={formData} setFormData={setFormData} errors={errors} />;
            case 3:
                return <KYCForm formData={formData} setFormData={setFormData} errors={errors} />;
            case 4:
                return <PartiesForm formData={formData} setFormData={setFormData} errors={errors} />;
            case 5:
                return <ClaimDetailsForm formData={formData} setFormData={setFormData} errors={errors} />;
            case 6:
                return <ReviewForm formData={formData} />;
            case 7:
                return <PaymentForm formData={formData} setFormData={setFormData} errors={errors} />;
            default:
                return null;
        }
    };
    // Add to state
    const [timeSpent, setTimeSpent] = useState(0);
    const [startTime] = useState(Date.now());
    // Add useEffect for time tracking
    useEffect(() => {
        const timer = setInterval(() => {
            const currentTime = Date.now();
            const minutesSpent = Math.floor((currentTime - startTime) / 60000);
            setTimeSpent(minutesSpent);
        }, 60000);

        return () => clearInterval(timer);
    }, [startTime]);
    // const showNotification = (message, type) => {
    //     setNotification({ show: true, message, type });
    //     setTimeout(() => {
    //         setNotification({ show: false, message: "", type: "" });
    //     }, 3000);
    // };
    return (
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Notification
                message={notification.message}
                type={notification.type}
                isVisible={notification.show}
                onClose={() => setNotification({ show: false, message: "", type: "" })}
            />

            <div className="mb-8">
                <Stepper currentStep={currentStep} completedSteps={completedSteps} timeSpent={timeSpent} />
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
                <div className="max-w-3xl mx-auto">
                    {renderForm()}

                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
                        {currentStep > 1 && (
                            <button
                                onClick={handlePrevious}
                                className="w-full sm:w-auto px-6 py-3 bg-gray-100 text-gray-700 rounded-lg
                                         hover:bg-gray-200 transition-colors duration-200
                                         focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                            >
                                Previous
                            </button>
                        )}
                        <button
                            onClick={handleNext}
                            className="w-full sm:w-auto px-6 py-3 bg-blue-500 text-white rounded-lg
                                     hover:bg-blue-600 transition-colors duration-200
                                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            {currentStep === 7 ? "Submit" : "Next"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MultiStepForm;
