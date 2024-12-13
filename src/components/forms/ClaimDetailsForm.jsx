import React from "react";
import FileUpload from "../FileUpload";

const ClaimDetailsForm = ({ formData, setFormData, errors }) => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Contract Value</label>
                    <div className="relative">
                        <span className="absolute left-3 top-3">$</span>
                        <input
                            type="number"
                            name="contractValue"
                            value={formData.contractValue}
                            onChange={(e) => setFormData({...formData, contractValue: e.target.value})}
                            className="w-full border rounded-lg p-2.5 pl-8 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {errors.contractValue && <p className="text-red-500 text-sm mt-1">{errors.contractValue}</p>}
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Claim Amount</label>
                    <div className="relative">
                        <span className="absolute left-3 top-3">$</span>
                        <input
                            type="number"
                            name="claimAmount"
                            value={formData.claimAmount}
                            onChange={(e) => setFormData({...formData, claimAmount: e.target.value})}
                            className="w-full border rounded-lg p-2.5 pl-8 focus:ring-2 focus:ring-blue-500"
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
            <FileUpload />
        </div>
    );
};

export default ClaimDetailsForm;
