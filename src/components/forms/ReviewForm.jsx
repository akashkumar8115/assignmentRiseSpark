import React from "react";
import { BiCheckCircle, BiFile } from 'react-icons/bi';

const ReviewForm = ({ formData }) => {
    const sections = [
        {
            title: "Case Information",
            fields: [
                { label: "Case Title", value: formData.caseTitle },
                { label: "Case Type", value: formData.caseType },
                { label: "Case Status", value: "Pending Review" }
            ]
        },
        {
            title: "Personal Information",
            fields: [
                { label: "Full Name", value: `${formData.firstName} ${formData.lastName}` },
                { label: "Email", value: formData.email },
                { label: "Phone", value: formData.phone },
                { label: "Address", value: formData.address }
            ]
        },
        {
            title: "KYC Information",
            fields: [
                { label: "ID Type", value: formData.idType },
                { label: "ID Number", value: formData.idNumber },
                { label: "Documents", value: "Verified ✓", icon: <BiFile /> }
            ]
        },
        {
            title: "Claim Details",
            fields: [
                { label: "Contract Value", value: `${formData.contractValue}` },
                { label: "Claim Amount", value: `${formData.claimAmount}` },
                { label: "Description", value: formData.claimDescription }
            ]
        },
        {
            title: "Parties Information",
            fields: [
                { label: "Claimant Company", value: formData.claimantCompany },
                { label: "Claimant Reg. Number", value: formData.claimantRegNumber },
                { label: "Respondent Company", value: formData.respondentCompany },
                { label: "Respondent Reg. Number", value: formData.respondentRegNumber }
            ]
        }
    ];

    return (
        <div className="space-y-6">
            {sections.map((section, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center space-x-2 mb-4">
                        <BiCheckCircle className="text-green-500 text-xl" />
                        <h3 className="text-lg font-semibold text-gray-800">{section.title}</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {section.fields.map((field, fieldIndex) => (
                            <div key={fieldIndex} className="space-y-1">
                                <label className="text-sm text-gray-600">{field.label}</label>
                                <div className="flex items-center space-x-2">
                                    {field.icon && <span className="text-gray-400">{field.icon}</span>}
                                    <p className="font-medium text-gray-800">{field.value || "Not provided"}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            
            <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 text-sm">
                    Please review all information carefully before proceeding to payment.
                </p>
            </div>
        </div>
    );
};

export default ReviewForm;