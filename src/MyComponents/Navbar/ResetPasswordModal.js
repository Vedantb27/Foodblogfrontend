import React, { useState } from 'react';
import axios from 'axios';

const ResetPasswordModal = ({ email, onClose, onPasswordReset }) => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleResetPassword = async () => {
        if (newPassword !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        try {
            const response = await axios.post(`${process.env.REACT_APP_API}/api/reset-password`, { email, newPassword });
            onPasswordReset();
        } catch (error) {
            setError(error.response?.data?.message || "Network error. Try again.");
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-4">Reset Password</h2>
                <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                {error && <p className="text-red-600 mb-4">{error}</p>}
                <button
                    onClick={handleResetPassword}
                    className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4"
                >
                    Reset Password
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

export default ResetPasswordModal;
