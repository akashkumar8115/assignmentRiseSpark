import React from "react";

const PreliminaryForm = ({ formData, setFormData, errors }) => {
    return (
        <div className="space-y-4">
            <div>
                <label className="block text-gray-700 font-medium mb-2">Case Title</label>
                <input
                    type="text"
                    name="caseTitle"
                    value={formData.caseTitle}
                    onChange={(e) => setFormData({...formData, caseTitle: e.target.value})}
                    className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Enter case title"
                />
                {errors.caseTitle && <p className="text-red-500 text-sm mt-1">{errors.caseTitle}</p>}
            </div>
            <div>
                <label className="block text-gray-700 font-medium mb-2">Case Type</label>
                <select
                    name="caseType"
                    value={formData.caseType}
                    onChange={(e) => setFormData({...formData, caseType: e.target.value})}
                    className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select case type</option>
                    <option value="civil">Civil</option>
                    <option value="criminal">Criminal</option>
                    <option value="corporate">Corporate</option>
                </select>
                {errors.caseType && <p className="text-red-500 text-sm mt-1">{errors.caseType}</p>}
            </div>
        </div>
    );
};

export default PreliminaryForm;
