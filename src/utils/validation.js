export const validateForm = (step, formData) => {
    const errors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    const cardNumberRegex = /^[\d\s-]{16,19}$/;
    const cvvRegex = /^\d{3,4}$/;
    const expiryRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;

    switch (step) {
        case 1:
            if (!formData.caseTitle?.trim()) errors.caseTitle = "Case title is required";
            if (!formData.caseType) errors.caseType = "Please select a case type";
            break;

        case 2:
            if (!formData.firstName?.trim()) errors.firstName = "First name is required";
            if (!formData.lastName?.trim()) errors.lastName = "Last name is required";
            if (!formData.email?.trim()) errors.email = "Email is required";
            else if (!emailRegex.test(formData.email)) errors.email = "Invalid email format";
            if (!formData.phone?.trim()) errors.phone = "Phone number is required";
            else if (!phoneRegex.test(formData.phone)) errors.phone = "Invalid phone format";
            break;

        case 3:
            if (!formData.idType) errors.idType = "Please select an ID type";
            if (!formData.idNumber?.trim()) errors.idNumber = "ID number is required";
            if (!formData.idDocument) errors.idDocument = "ID document is required";
            break;

        case 4:
            if (!formData.claimantCompany?.trim()) errors.claimantCompany = "Claimant company is required";
            if (!formData.respondentCompany?.trim()) errors.respondentCompany = "Respondent company is required";
            break;

        case 5:
            if (!formData.contractValue) errors.contractValue = "Contract value is required";
            if (!formData.claimAmount) errors.claimAmount = "Claim amount is required";
            if (!formData.claimDescription?.trim()) errors.claimDescription = "Claim description is required";
            break;

        case 7:
            if (!formData.paymentMethod) errors.paymentMethod = "Please select a payment method";
            if (formData.paymentMethod === 'credit') {
                if (!cardNumberRegex.test(formData.cardNumber?.replace(/\s/g, ''))) 
                    errors.cardNumber = "Invalid card number";
                if (!expiryRegex.test(formData.expiryDate)) 
                    errors.expiryDate = "Invalid expiry date (MM/YY)";
                if (!cvvRegex.test(formData.cvv)) 
                    errors.cvv = "Invalid CVV";
            }
            break;
    }

    return errors;
};
