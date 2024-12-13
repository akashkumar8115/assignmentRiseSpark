import React from "react";
import FileUpload from "../FileUpload";

const KYCForm = ({ formData, setFormData, errors }) => {
    return (
        <div className="space-y-6">
            <div>
                <label className="block text-gray-700 font-medium mb-2">ID Type</label>
                <select
                    name="idType"
                    value={formData.idType}
                    onChange={(e) => setFormData({...formData, idType: e.target.value})}
                    className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select ID type</option>
                    <option value="passport">Passport</option>
                    <option value="drivingLicense">Driving License</option>
                    <option value="nationalId">National ID</option>
                </select>
                {errors.idType && <p className="text-red-500 text-sm mt-1">{errors.idType}</p>}
            </div>
            <div>
                <label className="block text-gray-700 font-medium mb-2">ID Number</label>
                <input
                    type="text"
                    name="idNumber"
                    value={formData.idNumber}
                    onChange={(e) => setFormData({...formData, idNumber: e.target.value})}
                    className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500"
                />
                {errors.idNumber && <p className="text-red-500 text-sm mt-1">{errors.idNumber}</p>}
            </div>
            <FileUpload />
        </div>
    );
};

export default KYCForm;
