import React, { useState } from 'react';
import axios from 'axios';

const ForgotPasswordModal = ({ email, onClose, onEmailSent }) => {
    const [emailInput, setEmailInput] = useState(email || '');
    const [error, setError] = useState('');

    const handleSendEmail = async () => {
        if (!emailInput) {
            setError('Please enter your email address.');
            return;
        }
        try {
            const response = await axios.post(`${process.env.REACT_APP_API}/api/send-otp`, { email: emailInput });
            onEmailSent(emailInput);
        } catch (error) {
            setError(error.response?.data?.message || "Network error. Try again.");
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>
                <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                {error && <p className="text-red-600 mb-4">{error}</p>}
                <button
                    onClick={handleSendEmail}
                    className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4"
                >
                    Send OTP
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

export default ForgotPasswordModal;
