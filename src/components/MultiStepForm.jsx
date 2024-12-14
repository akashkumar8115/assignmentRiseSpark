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
import { useLocalStorage } from "../hooks/useLocalStorage";
import { generatePDF } from '../utils/pdfGenerator';

const MultiStepForm = () => {
    const [formData, setFormData] = useLocalStorage("formData", {
        caseTitle: "",
        caseType: "",
        caseDescription: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        idType: "",
        idNumber: "",
        idDocument: null,
        proofOfAddress: null,
        claimantCompany: "",
        claimantRegNumber: "",
        claimantAddress: "",
        respondentCompany: "",
        respondentRegNumber: "",
        respondentAddress: "",
        contractValue: "",
        claimAmount: "",
        claimDescription: "",
        supportingDocuments: [],
        paymentMethod: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        billingAddress: ""
    });

    const [currentStep, setCurrentStep] = useState(() => {
        const savedStep = localStorage.getItem("currentStep");
        return savedStep ? parseInt(savedStep) : 1;
    });

    const [completedSteps, setCompletedSteps] = useState(() => {
        const savedSteps = localStorage.getItem("completedSteps");
        return savedSteps ? JSON.parse(savedSteps) : [];
    });

    useEffect(() => {
        localStorage.setItem("currentStep", currentStep);
        localStorage.setItem("completedSteps", JSON.stringify(completedSteps));
    }, [currentStep, completedSteps]);

    const [notification, setNotification] = useState({
        show: false,
        message: "",
        type: ""
    });

    const [errors, setErrors] = useState({});
    const [timeSpent, setTimeSpent] = useState(0);
    const [startTime] = useState(Date.now());

    useEffect(() => {
        const timer = setInterval(() => {
            const currentTime = Date.now();
            setTimeSpent(Math.floor((currentTime - startTime) / 60000));
        }, 60000);

        return () => clearInterval(timer);
    }, [startTime]);

    const showNotification = (message, type = "success") => {
        setNotification({ show: true, message, type });
        setTimeout(() => setNotification({ show: false, message: "", type: "" }), 3000);
    };

    const validateStep = (step) => {
        let stepErrors = {};

        switch (step) {
            case 1:
                if (!formData.caseTitle) stepErrors.caseTitle = "Case title is required";
                if (!formData.caseType) stepErrors.caseType = "Case type is required";
                break;
            case 2:
                if (!formData.firstName) stepErrors.firstName = "First name is required";
                if (!formData.lastName) stepErrors.lastName = "Last name is required";
                if (!formData.email) stepErrors.email = "Email is required";
                else if (!/\S+@\S+\.\S+/.test(formData.email)) stepErrors.email = "Invalid email format";

                if (!formData.phone) {
                    stepErrors.phone = "Phone number is required";
                } else if (!/^\d{10}$/.test(formData.phone)) {
                    stepErrors.phone = "Phone number must be exactly 10 digits";
                }
                break;
            case 3:
                if (!formData.idType) stepErrors.idType = "ID type is required";
                // Updated ID number validation
                if (!formData.idNumber) {
                    stepErrors.idNumber = "ID number is required";
                } else if (!/^\d{12}$/.test(formData.idNumber)) {
                    stepErrors.idNumber = "ID number must be exactly 12 digits";
                }
                break;
            case 4:
                if (!formData.claimantCompany) stepErrors.claimantCompany = "Claimant company is required";
                if (!formData.respondentCompany) stepErrors.respondentCompany = "Respondent company is required";
                break;
            case 5:
                if (!formData.contractValue) stepErrors.contractValue = "Contract value is required";
                if (!formData.claimAmount) stepErrors.claimAmount = "Claim amount is required";
                if (!formData.claimDescription) stepErrors.claimDescription = "Claim description is required";
                break;
            case 7:
                if (!formData.paymentMethod) stepErrors.paymentMethod = "Payment method is required";
                if (formData.paymentMethod === 'credit') {
                    if (!formData.cardNumber) stepErrors.cardNumber = "Card number is required";
                    else if (!/^\d{4} \d{4} \d{4} \d{4}$/.test(formData.cardNumber)) stepErrors.cardNumber = "Card number must be in the format 1234 5678 9012 3456";

                    if (!formData.expiryDate) stepErrors.expiryDate = "Expiry date is required";
                    else if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) stepErrors.expiryDate = "Expiry date must be in the format MM/YY";

                    if (!formData.cvv) stepErrors.cvv = "CVV is required";
                    else if (!/^\d{3,4}$/.test(formData.cvv)) stepErrors.cvv = "CVV must be 3/4 digits";
                }
                // if (!formData.billingAddress) stepErrors.billingAddress = "Billing address is required";
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
        // Check if there are completed steps to go back
        if (currentStep > 1) {
            // Perform operations in reverse order for going back
            const updatedCompletedSteps = completedSteps.filter(step => step !== currentStep - 1);
            setCompletedSteps(updatedCompletedSteps); // Remove the previous step from completed steps
            setCurrentStep(prev => prev - 1); // Go back to the previous step
            setErrors({}); // Clear any errors
            showNotification("Moved to the previous step!", "info");
        } else {
            showNotification("You are already at the first step.", "warning");
        }
    };



    const handleSubmit = async () => {
        console.log("Form submitted:", formData);
        showNotification("Form submitted successfully!", "success");
        try {
            // Process payment and form submission
            showNotification("Payment successful!", "success");

            // Generate and download slip
            const slip = await generatePDF(formData);
            const downloadUrl = URL.createObjectURL(slip);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = `claim-receipt-${Date.now()}.pdf`;
            link.click();

            // Clean up
            URL.revokeObjectURL(downloadUrl);

            // Reset form or redirect
            setFormData({});
            setCurrentStep(1);
            setCompletedSteps([]);
        } catch (error) {
            showNotification("Error processing payment", "error");
        }
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

    return (
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Notification
                message={notification.message}
                type={notification.type}
                isVisible={notification.show}
                onClose={() => setNotification({ show: false, message: "", type: "" })}
            />
            <div className="mb-8">
                <Stepper currentStep={currentStep} completedSteps={completedSteps} timeSpent={timeSpent} />
            </div>

            {/* <div>write here docs name <hr /></div> */}

            <div className="bg-white rounded-xl shadow-lg p-4 px-2 sm:p-6 lg:p-8">
                <div className="max-w-3xl mx-auto">
                    {renderForm()}
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
                        {currentStep > 1 && (
                            <button
                                onClick={handlePrevious}
                                className="w-full sm:w-auto px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
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
