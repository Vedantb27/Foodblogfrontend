import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginFormComponent = ({ onShowForgotPasswordModal }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API}/login`, { email, password });
            localStorage.setItem("token", response.data.token);
            navigate("/Admineditcategory");
        } catch (error) {
            setError("Invalid credentials");
        }
    };

    return (
        <form className="space-y-4" onSubmit={handleLogin}>
            {/* <div className="flex items-center">
                <button
                    type="button"
                    className="flex items-center justify-center px-4 py-2 mr-2 text-sm font-medium text-center text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none"
                >
                    <i className="fab fa-google"></i>
                    <span className="ml-2">Log in with Google</span>
                </button>
                <button
                    type="button"
                    className="flex items-center justify-center px-4 py-2 text-sm font-medium text-center text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none"
                >
                    <i className="fab fa-facebook"></i>
                    <span className="ml-2">Log in with Facebook</span>
                </button>
            </div> */}
            <hr className="my-4" />
            <div className="text-center">
                <h1 className="text-2xl font-semibold text-gray-800">Log In to Your Account</h1>
                <p className="text-gray-600">Enter your credentials to access your account.</p>
            </div>
            <div className="relative">
                <input
                    type="email"
                    className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="relative">
                <input
                    type="password"
                    className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
            >
                Log In
            </button>
            <div className="text-center">
                <p className="text-gray-600">Forgot your password?</p>
                <button
                    type="button"
                    className="text-sm text-blue-600 hover:underline"
                    onClick={onShowForgotPasswordModal}
                >
                    Reset Password
                </button>
            </div>
            {error && <p className="text-red-600 text-center">{error}</p>}
        </form>
    );
};

export default LoginFormComponent;
