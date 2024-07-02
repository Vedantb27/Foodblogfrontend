import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ForgotPasswordModal from './ForgotPasswordModal';
import VerifyOtpModal from './VerifyOtpModal';
import ResetPasswordModal from './ResetPasswordModal';
import LoginFormComponent from './LoginFormComponent';

export const Loginform = ({ onClose }) => {
    const LoginformRef = useRef();
    const [showLoginForm, setShowLoginForm] = useState(true);
    const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
    const [showVerifyOtpModal, setShowVerifyOtpModal] = useState(false);
    const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);
    const [email, setEmail] = useState("");

    const closeLoginform = (e) => {
        if (LoginformRef.current === e.target) {
            onClose();
        }
    };

    const handleEmailSent = (email) => {
        setEmail(email);
        setShowForgotPasswordModal(false);
        setShowVerifyOtpModal(true);
    };

    const handleOtpVerified = () => {
        setShowVerifyOtpModal(false);
        setShowResetPasswordModal(true);
    };

    const handlePasswordReset = () => {
        setShowResetPasswordModal(false);
        onClose();
        alert("Password updated successfully");
    };

    const handleShowForgotPasswordModal = () => {
        setShowLoginForm(false);
        setShowForgotPasswordModal(true);
    };

    return (
        <div ref={LoginformRef} onClick={closeLoginform} className="fixed flex  inset-0 bg-opacity-30 backdrop-blur-sm z-20 bg-white">
            <div className="fixed bg-white z-10 w-full max-w-md p-4 bg-white rounded-lg shadow-md md:right-96 md:top-16 mt-12">
                <div className="text-end mb-8">
                    <button className="text-2xl font-bold text-gray-800" onClick={() => onClose()}><i className="fa-regular fa-x text-red-700"></i></button>
                </div>
                {showLoginForm && <LoginFormComponent onShowForgotPasswordModal={handleShowForgotPasswordModal} />}
                {showForgotPasswordModal && (
                    <ForgotPasswordModal
                        email={email}
                        onClose={() => { setShowForgotPasswordModal(false); setShowLoginForm(true); }}
                        onEmailSent={handleEmailSent}
                    />
                )}
                {showVerifyOtpModal && (
                    <VerifyOtpModal
                        email={email}
                        onClose={() => { setShowVerifyOtpModal(false); setShowLoginForm(true); }}
                        onOtpVerified={handleOtpVerified}
                    />
                )}
                {showResetPasswordModal && (
                    <ResetPasswordModal
                        email={email}
                        onClose={() => { setShowResetPasswordModal(false); setShowLoginForm(true); }}
                        onPasswordReset={handlePasswordReset}
                    />
                )}
            </div>
        </div>
    );
};
