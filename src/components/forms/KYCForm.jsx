import React from "react";
import { FaIdCard, FaPassport, FaAddressCard, FaFileUpload } from 'react-icons/fa';

const KYCForm = ({ formData, setFormData, errors }) => {
    const idTypes = [
        { id: 'passport', label: 'Passport', icon: <FaPassport /> },
        { id: 'nationalId', label: 'National ID', icon: <FaIdCard /> },
        { id: 'drivingLicense', label: 'Driving License', icon: <FaAddressCard /> }
    ];

    const handleFileUpload = (field, file) => {
        setFormData({
            ...formData,
            [field]: file
        });
    };

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {idTypes.map(type => (
                    <div
                        key={type.id}
                        onClick={() => setFormData({...formData, idType: type.id})}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all
                            ${formData.idType === type.id 
                                ? 'border-blue-500 bg-blue-50' 
                                : 'border-gray-200 hover:border-blue-200'}`}
                    >
                        <div className="flex items-center space-x-3">
                            <div className={`text-xl ${formData.idType === type.id ? 'text-blue-500' : 'text-gray-400'}`}>
                                {type.icon}
                            </div>
                            <span>{type.label}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-medium mb-2">ID Number</label>
                    <input
                        type="text"
                        value={formData.idNumber}
                        onChange={(e) => setFormData({...formData, idNumber: e.target.value})}
                        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.idNumber && <p className="text-red-500 text-sm mt-1">{errors.idNumber}</p>}
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Upload ID Document</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                        <input
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={(e) => handleFileUpload('idDocument', e.target.files[0])}
                            className="hidden"
                            id="id-upload"
                        />
                        <label
                            htmlFor="id-upload"
                            className="flex flex-col items-center cursor-pointer"
                        >
                            <FaFileUpload className="text-3xl text-gray-400 mb-2" />
                            <span className="text-gray-600">Upload ID Document</span>
                            <span className="text-sm text-gray-400 mt-1">PDF, JPG up to 5MB</span>
                        </label>
                    </div>
                    {formData.idDocument && (
                        <p className="text-sm text-green-500 mt-2">
                            ✓ {formData.idDocument.name} uploaded
                        </p>
                    )}
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Proof of Address</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                        <input
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={(e) => handleFileUpload('proofOfAddress', e.target.files[0])}
                            className="hidden"
                            id="address-upload"
                        />
                        <label
                            htmlFor="address-upload"
                            className="flex flex-col items-center cursor-pointer"
                        >
                            <FaFileUpload className="text-3xl text-gray-400 mb-2" />
                            <span className="text-gray-600">Upload Proof of Address</span>
                            <span className="text-sm text-gray-400 mt-1">Recent utility bill or bank statement</span>
                        </label>
                    </div>
                    {formData.proofOfAddress && (
                        <p className="text-sm text-green-500 mt-2">
                            ✓ {formData.proofOfAddress.name} uploaded
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default KYCForm;