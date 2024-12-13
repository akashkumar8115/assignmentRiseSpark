import { useState, useEffect } from 'react';
import { validateForm } from '../utils/validation';

export const useFormValidation = (formData, currentStep) => {
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        const validationErrors = validateForm(currentStep, formData);
        setErrors(validationErrors);
        setIsValid(Object.keys(validationErrors).length === 0);
    }, [formData, currentStep]);

    return { errors, isValid };
};
