import React from "react";

const PersonalDetailsForm = ({ formData, setFormData, errors }) => {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700 font-medium mb-2">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                </div>
            </div>
            <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
                <label className="block text-gray-700 font-medium mb-2">Phone</label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
        </div>
    );
};

export default PersonalDetailsForm;
