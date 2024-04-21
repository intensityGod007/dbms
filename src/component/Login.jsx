// import React, { useState, useEffect } from 'react';
// import { Link} from 'react-router-dom'; // Import useHistory
// import axios from 'axios';
// import { useContext } from 'react';
// import { dbmscontext } from '../context/dbmscontext';
// import { jwtDecode } from "jwt-decode";
// // import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const { loggined, isLoggedIn, currUser } = useContext(dbmscontext);
//     const [message, setMessage] = useState('');
//     // const history = useHistory(); // Initialize useHistory
//     let navigate = useNavigate();

    
    

//     const handleLogin = async () => {
//         try {
//             const response = await axios.post('http://localhost:3334/api/login', {
//                 email,
//                 password
//             });
//             console.log("response:",response);
//             localStorage.setItem("token", response.data.token);
//             currUser(response.data.user.username);
//             loggined(true);
//             setMessage(response.data.message);
//             navigate('/');

//             // Redirect to home route after successful login
//             // history.push('/'); // Redirect to home route
//         } catch (error) {
//             console.error('Login failed:', error.response.data.message);
//             // setMessage(error.response.data.message || 'An error occurred during login.');
//         }
//     };

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             const decodedToken = jwtDecode(token);
//             loggined(true);
//             currUser(decodedToken.username);
//             navigate('/');
//              // Redirect to home route if user is already logged in
//         } else {
//             // Handle the case when there is no token
//             // For example, you can set loggined(false) or do any other necessary logic
//             loggined(false);
//             currUser(null);
//         }
//     },[]);

//     return (
//         <div className="flex justify-center items-center h-screen">
//             <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3">
//                 <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                         Email
//                     </label>
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         name="email"
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                     />
//                 </div>
//                 <div className="mb-6">
//                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//                         Password
//                     </label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         name="password"
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//                     />
//                 </div>
//                 <div className="flex items-center justify-between">
//                     <button
//                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                         type="button"
//                         onClick={handleLogin}
//                     >
//                         Log In
//                     </button>
//                 </div>
//                 <p className="mt-3 text-sm">
//                     Don't have an account?{' '}
//                     <Link to="/Signup" className="text-blue-500 hover:underline">
//                         Sign Up
//                     </Link>
//                 </p>
//                 {/* {message && <p className="text-red-500 mt-2">{message}</p>} */}
//             </form>
//         </div>
//     );
// }

// export default Login;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { dbmscontext } from '../context/dbmscontext';
import { jwtDecode } from "jwt-decode";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    // State variables to store email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { loggined, isLoggedIn, currUser } = useContext(dbmscontext);
    const navigate = useNavigate();

    // Function to handle login
    const handleLogin = async () => {
        try {
            // Make a POST request to the login endpoint with email and password data
            const response = await axios.post('http://localhost:3334/api/login', {
                email,
                password
            });

            localStorage.setItem("token", response.data.token);
            console.log("respone::", response.data.user.username);
            currUser(response.data.user.username)
            loggined(true);
            navigate('/');
            console.log('Login successful jiten:', response.data.token);
        } catch (error) {
            // Handle login error
            console.error('Login failed', error.message);
        }
    };
    useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken =jwtDecode(token); 
    //   console.log("Decoded Token:", decodedToken);
      loggined(true);
      currUser(decodedToken.username);
    }
  });

    return (
        <div>
            {isLoggedIn ===false ?

                (<div className="flex justify-center items-center h-screen">
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
                ) : ' '
            }
        </div>
    )
    };
    


export default Login;