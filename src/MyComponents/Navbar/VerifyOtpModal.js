import React, { useState } from 'react';
import axios from 'axios';

const VerifyOtpModal = ({ email, onClose, onOtpVerified }) => {
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');

    const handleVerifyOtp = async () => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API}/api/verify-otp`, { email, otp });
            onOtpVerified();
        } catch (error) {
            setError(error.response?.data?.message || "Invalid OTP. Try again.");
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-4">Verify OTP</h2>
                <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                {error && <p className="text-red-600 mb-4">{error}</p>}
                <button
                    onClick={handleVerifyOtp}
                    className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600 mb-4"
                >
                    Verify OTP
                </button>
                <button
                    onClick={onClose}
                    className="w-full p-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                    Back
                </button>
            </div>
        </div>
    );
};

export default VerifyOtpModal;
