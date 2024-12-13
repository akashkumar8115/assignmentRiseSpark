import React from "react";
import { FaCreditCard, FaPaypal, FaLock } from 'react-icons/fa';

const PaymentForm = ({ formData, setFormData, errors }) => {
    const paymentMethods = [
        { id: 'credit', icon: <FaCreditCard />, label: 'Credit Card', description: 'Pay securely with your credit card' },
        { id: 'paypal', icon: <FaPaypal />, label: 'PayPal', description: 'Fast and secure payment with PayPal' }
    ];

    return (
        <div className="space-y-8">
            <div className="bg-blue-50 p-4 rounded-lg flex items-center space-x-3">
                <FaLock className="text-blue-500" />
                <p className="text-blue-800 text-sm">Your payment information is secure and encrypted</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {paymentMethods.map((method) => (
                    <div
                        key={method.id}
                        className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 
                            ${formData.paymentMethod === method.id ? 'border-blue-500 bg-blue-50' : 'hover:border-gray-400'}`}
                        onClick={() => setFormData({...formData, paymentMethod: method.id})}
                    >
                        <div className="flex items-center space-x-3">
                            <div className="text-2xl text-blue-500">{method.icon}</div>
                            <div>
                                <p className="font-medium">{method.label}</p>
                                <p className="text-sm text-gray-600">{method.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {formData.paymentMethod === 'credit' && (
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Card Number</label>
                        <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                            className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500"
                            placeholder="1234 5678 9012 3456"
                        />
                        {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Expiry Date</label>
                            <input
                                type="text"
                                name="expiryDate"
                                value={formData.expiryDate}
                                onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                                className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500"
                                placeholder="MM/YY"
                            />
                            {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">CVV</label>
                            <input
                                type="text"
                                name="cvv"
                                value={formData.cvv}
                                onChange={(e) => setFormData({...formData, cvv: e.target.value})}
                                className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500"
                                placeholder="123"
                            />
                            {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
                        </div>
                    </div>
                </div>
            )}

            <div className="mt-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600">Total Amount:</span>
                        <span className="text-xl font-bold text-gray-800">${formData.claimAmount}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentForm;