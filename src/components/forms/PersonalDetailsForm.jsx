import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const PersonalDetailsForm = ({ formData, setFormData, errors }) => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-gray-700 font-medium mb-2">First Name</label>
                    <div className="relative">
                        <FaUser className="absolute left-3 top-3.5 text-gray-400" />
                        <input
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                            className="w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter first name"
                        />
                    </div>
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Last Name</label>
                    <div className="relative">
                        <FaUser className="absolute left-3 top-3.5 text-gray-400" />
                        <input
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                            className="w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter last name"
                        />
                    </div>
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                </div>
            </div>

            <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <div className="relative">
                    <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter email address"
                    />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
                <label className="block text-gray-700 font-medium mb-2">Phone</label>
                <div className="relative">
                    <FaPhone className="absolute left-3 top-3.5 text-gray-400" />
                    <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter phone number"
                    />
                </div>
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
                <label className="block text-gray-700 font-medium mb-2">Address</label>
                <div className="relative">
                    <FaMapMarkerAlt className="absolute left-3 top-3.5 text-gray-400" />
                    <textarea
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                        className="w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        rows="3"
                        placeholder="Enter your address"
                    />
                </div>
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
            </div>
        </div>
    );
};

export default PersonalDetailsForm;