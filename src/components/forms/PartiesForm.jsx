import React from "react";

const PartiesForm = ({ formData, setFormData, errors }) => {
    return (
        <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-blue-800 mb-4">Claimant Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Company Name</label>
                        <input
                            type="text"
                            name="claimantCompany"
                            value={formData.claimantCompany}
                            onChange={(e) => setFormData({...formData, claimantCompany: e.target.value})}
                            className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.claimantCompany && <p className="text-red-500 text-sm mt-1">{errors.claimantCompany}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Registration Number</label>
                        <input
                            type="text"
                            name="claimantRegNumber"
                            value={formData.claimantRegNumber}
                            onChange={(e) => setFormData({...formData, claimantRegNumber: e.target.value})}
                            className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.claimantRegNumber && <p className="text-red-500 text-sm mt-1">{errors.claimantRegNumber}</p>}
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-4">Respondent Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Company Name</label>
                        <input
                            type="text"
                            name="respondentCompany"
                            value={formData.respondentCompany}
                            onChange={(e) => setFormData({...formData, respondentCompany: e.target.value})}
                            className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.respondentCompany && <p className="text-red-500 text-sm mt-1">{errors.respondentCompany}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Registration Number</label>
                        <input
                            type="text"
                            name="respondentRegNumber"
                            value={formData.respondentRegNumber}
                            onChange={(e) => setFormData({...formData, respondentRegNumber: e.target.value})}
                            className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.respondentRegNumber && <p className="text-red-500 text-sm mt-1">{errors.respondentRegNumber}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartiesForm;
