import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { dbmscontext } from '../context/dbmscontext';

const Login = () => {
    // State variables to store email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { loggined, isLoggedIn, currUser } = useContext(dbmscontext);

    // Function to handle login
    const handleLogin = async () => {
        try {
            // Make a POST request to the login endpoint with email and password data
            const response = await axios.post('http://localhost:3333/api/login', {
                email: email,
                password: password
            });
             
                localStorage.setItem("token",response.data.token);
                currUser(response.data.user.username)
                loggined(true);

            console.log('Login successful jiten:', response.data.token);
        } catch (error) {
            // Handle login error
            console.error('Login failed', error);
        }
    };

    return (
        
        <div className="flex justify-center items-center h-screen">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={handleLogin} // Call handleLogin function on button click
                    >
                        Log In
                    </button>
                </div>
                <p className="mt-3 text-sm">
                    Don't have an account?{' '}
                    <Link to="/Signup" className="text-blue-500 hover:underline">
                        Sign Up
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
