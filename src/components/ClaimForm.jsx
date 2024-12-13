import React, { useState } from "react";
import FileUpload from "./FileUpload";


const ClaimForm = () => {
    const [formData, setFormData] = useState({
        contractValue: "",
        claimValue: "",
        place: "",
        language: "",
        statement: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">Contract Value</label>
                    <input
                        type="text"
                        name="contractValue"
                        value={formData.contractValue}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                        placeholder="Enter contract value"
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">Claim Value</label>
                    <input
                        type="text"
                        name="claimValue"
                        value={formData.claimValue}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                        placeholder="Enter claim value"
                    />
                </div>
            </div>
            <div className="mt-6 space-y-2">
                <label className="block text-gray-700 font-medium">Statement</label>
                <textarea
                    name="statement"
                    value={formData.statement}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 min-h-[120px]"
                    placeholder="Enter your statement here..."
                ></textarea>
            </div>
            <FileUpload />
            <button
                type="submit"
                className="mt-6 bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Submit Claim
            </button>
        </form>
    );
};

export default ClaimForm;
