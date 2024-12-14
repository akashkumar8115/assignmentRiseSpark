import { div } from "framer-motion/client";
import React from "react";
import { FaGavel, FaFileContract, FaBalanceScale } from 'react-icons/fa';

const PreliminaryForm = ({ formData, setFormData, errors }) => {
    const caseTypes = [
        { id: 'civil', label: 'Civil Case', icon: <FaGavel /> },
        { id: 'contract', label: 'Contract Dispute', icon: <FaFileContract /> },
        { id: 'corporate', label: 'Corporate Matter', icon: <FaBalanceScale /> }
    ];

    return (
        <div>
            <label className="block text-gray-700 font-medium mb-2">Case Title</label>  <hr /> <br />
            <div className="space-y-6">
                <div>
                    <div className="relative">
                        <input
                            type="text"
                            name="caseTitle"
                            value={formData.caseTitle}
                            onChange={(e) => setFormData({ ...formData, caseTitle: e.target.value })}
                            className="w-full border rounded-lg pl-10 p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Enter case title"
                        />
                        <FaGavel className="absolute left-3 top-3.5 text-gray-400" />
                    </div>
                    {errors.caseTitle && <p className="text-red-500 text-sm mt-1">{errors.caseTitle}</p>}
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Case Type</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {caseTypes.map(type => (
                            <div
                                key={type.id}
                                onClick={() => setFormData({ ...formData, caseType: type.id })}
                                className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200
                                ${formData.caseType === type.id
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'border-gray-200 hover:border-blue-200'}`}
                            >
                                <div className="flex items-center space-x-3">
                                    <div className={`text-xl ${formData.caseType === type.id ? 'text-blue-500' : 'text-gray-400'}`}>
                                        {type.icon}
                                    </div>
                                    <span className={formData.caseType === type.id ? 'text-blue-700' : 'text-gray-600'}>
                                        {type.label}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    {errors.caseType && <p className="text-red-500 text-sm mt-1">{errors.caseType}</p>}
                </div>
            </div>
        </div>
    );
};

export default PreliminaryForm;
