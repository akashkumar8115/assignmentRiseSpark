import React from "react";
import { FaDollarSign, FaFileUpload } from 'react-icons/fa';

const ClaimDetailsForm = ({ formData, setFormData, errors }) => {
    const handleFileUpload = (e) => {
        const files = Array.from(e.target.files);
        setFormData({
            ...formData,
            supportingDocuments: [...(formData.supportingDocuments || []), ...files]
        });
    };

    const removeFile = (index) => {
        setFormData({
            ...formData,
            supportingDocuments: formData.supportingDocuments.filter((_, i) => i !== index)
        });
    };

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-row md:flex-row">
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Contract Value</label>
                    <div className="relative">
                        <FaDollarSign className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="number"
                            name="contractValue"
                            value={formData.contractValue}
                            onChange={(e) => setFormData({...formData, contractValue: e.target.value})}
                            className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {errors.contractValue && <p className="text-red-500 text-sm mt-1">{errors.contractValue}</p>}
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Claim Amount</label>
                    <div className="relative">
                        <FaDollarSign className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="number"
                            name="claimAmount"
                            value={formData.claimAmount}
                            onChange={(e) => setFormData({...formData, claimAmount: e.target.value})}
                            className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {errors.claimAmount && <p className="text-red-500 text-sm mt-1">{errors.claimAmount}</p>}
                </div>
            </div>
            <div>
                <label className="block text-gray-700 font-medium mb-2">Claim Description</label>
                <textarea
                    name="claimDescription"
                    value={formData.claimDescription}
                    onChange={(e) => setFormData({...formData, claimDescription: e.target.value})}
                    className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 min-h-[150px]"
                    placeholder="Describe your claim in detail..."
                />
                {errors.claimDescription && <p className="text-red-500 text-sm mt-1">{errors.claimDescription}</p>}
            </div>
            <div className="mt-6">
                <label className="block text-gray-700 font-medium mb-2">
                    Supporting Documents
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                    <input
                        type="file"
                        multiple
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                    />
                    <label
                        htmlFor="file-upload"
                        className="flex flex-col items-center cursor-pointer"
                    >
                        <FaFileUpload className="text-3xl text-gray-400 mb-2" />
                        <span className="text-gray-600">Click to upload documents</span>
                        <span className="text-sm text-gray-400 mt-1">
                            PDF, DOC up to 10MB each
                        </span>
                    </label>
                </div>

                {formData.supportingDocuments?.length > 0 && (
                    <div className="mt-4 space-y-2">
                        {formData.supportingDocuments.map((file, index) => (
                            <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                                <span className="text-sm text-gray-600">{file.name}</span>
                                <button
                                    onClick={() => removeFile(index)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ClaimDetailsForm;