import React from "react";
import { FaBuilding, FaRegAddressCard, FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';

const PartiesForm = ({ formData, setFormData, errors }) => {
    return (
        <div className="space-y-8">
            {/* Claimant Section */}
            <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                    <FaBuilding className="mr-2" />
                    Claimant Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Company Name</label>
                        <div className="relative">
                            <FaBuilding className="absolute left-3 top-3.5 text-gray-400" />
                            <input
                                type="text"
                                value={formData.claimantCompany}
                                onChange={(e) => setFormData({...formData, claimantCompany: e.target.value})}
                                className="w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter company name"
                            />
                        </div>
                        {errors.claimantCompany && (
                            <p className="text-red-500 text-sm mt-1">{errors.claimantCompany}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Registration Number</label>
                        <div className="relative">
                            <FaRegAddressCard className="absolute left-3 top-3.5 text-gray-400" />
                            <input
                                type="text"
                                value={formData.claimantRegNumber}
                                onChange={(e) => setFormData({...formData, claimantRegNumber: e.target.value})}
                                className="w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter registration number"
                            />
                        </div>
                        {errors.claimantRegNumber && (
                            <p className="text-red-500 text-sm mt-1">{errors.claimantRegNumber}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Contact Email</label>
                        <div className="relative">
                            <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
                            <input
                                type="email"
                                value={formData.claimantEmail}
                                onChange={(e) => setFormData({...formData, claimantEmail: e.target.value})}
                                className="w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter company email"
                            />
                        </div>
                        {errors.claimantEmail && (
                            <p className="text-red-500 text-sm mt-1">{errors.claimantEmail}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Contact Phone</label>
                        <div className="relative">
                            <FaPhone className="absolute left-3 top-3.5 text-gray-400" />
                            <input
                                type="tel"
                                value={formData.claimantPhone}
                                onChange={(e) => setFormData({...formData, claimantPhone: e.target.value})}
                                className="w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter company phone"
                            />
                        </div>
                        {errors.claimantPhone && (
                            <p className="text-red-500 text-sm mt-1">{errors.claimantPhone}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Website</label>
                        <div className="relative">
                            <FaGlobe className="absolute left-3 top-3.5 text-gray-400" />
                            <input
                                type="url"
                                value={formData.claimantWebsite}
                                onChange={(e) => setFormData({...formData, claimantWebsite: e.target.value})}
                                className="w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter company website"
                            />
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-gray-700 font-medium mb-2">Address</label>
                        <div className="relative">
                            <FaMapMarkerAlt className="absolute left-3 top-3.5 text-gray-400" />
                            <textarea
                                value={formData.claimantAddress}
                                onChange={(e) => setFormData({...formData, claimantAddress: e.target.value})}
                                className="w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                rows="3"
                                placeholder="Enter company address"
                            />
                        </div>
                        {errors.claimantAddress && (
                            <p className="text-red-500 text-sm mt-1">{errors.claimantAddress}</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Respondent Section */}
            <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <FaBuilding className="mr-2" />
                    Respondent Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Mirror the same fields as Claimant section but with respondent prefixes */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Company Name</label>
                        <div className="relative">
                            <FaBuilding className="absolute left-3 top-3.5 text-gray-400" />
                            <input
                                type="text"
                                value={formData.respondentCompany}
                                onChange={(e) => setFormData({...formData, respondentCompany: e.target.value})}
                                className="w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter company name"
                            />
                        </div>
                        {errors.respondentCompany && (
                            <p className="text-red-500 text-sm mt-1">{errors.respondentCompany}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Registration Number</label>
                        <div className="relative">
                            <FaRegAddressCard className="absolute left-3 top-3.5 text-gray-400" />
                            <input
                                type="text"
                                value={formData.respondentRegNumber}
                                onChange={(e) => setFormData({...formData, respondentRegNumber: e.target.value})}
                                className="w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter registration number"
                            />
                        </div>
                        {errors.respondentRegNumber && (
                            <p className="text-red-500 text-sm mt-1">{errors.respondentRegNumber}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Contact Email</label>
                        <div className="relative">
                            <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
                            <input
                                type="email"
                                value={formData.respondentEmail}
                                onChange={(e) => setFormData({...formData, respondentEmail: e.target.value})}
                                className="w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter company email"
                            />
                        </div>
                        {errors.respondentEmail && (
                            <p className="text-red-500 text-sm mt-1">{errors.respondentEmail}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Contact Phone</label>
                        <div className="relative">
                            <FaPhone className="absolute left-3 top-3.5 text-gray-400" />
                            <input
                                type="tel"
                                value={formData.respondentPhone}
                                onChange={(e) => setFormData({...formData, respondentPhone: e.target.value})}
                                className="w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter company phone"
                            />
                        </div>
                        {errors.respondentPhone && (
                            <p className="text-red-500 text-sm mt-1">{errors.respondentPhone}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Website</label>
                        <div className="relative">
                            <FaGlobe className="absolute left-3 top-3.5 text-gray-400" />
                            <input
                                type="url"
                                value={formData.respondentWebsite}
                                onChange={(e) => setFormData({...formData, respondentWebsite: e.target.value})}
                                className="w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter company website"
                            />
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-gray-700 font-medium mb-2">Address</label>
                        <div className="relative">
                            <FaMapMarkerAlt className="absolute left-3 top-3.5 text-gray-400" />
                            <textarea
                                value={formData.respondentAddress}
                                onChange={(e) => setFormData({...formData, respondentAddress: e.target.value})}
                                className="w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                rows="3"
                                placeholder="Enter company address"
                            />
                        </div>
                        {errors.respondentAddress && (
                            <p className="text-red-500 text-sm mt-1">{errors.respondentAddress}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartiesForm;
