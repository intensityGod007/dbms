
import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useContext } from 'react';
import { dbmscontext } from '../context/dbmscontext';
import { useEffect } from 'react';
// import { decode } from 'jsonwebtoken';
import axios from 'axios';
const Signup = () => {
    const [username, setusername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[isSignup,setisSignup]=useState(false);
    const{loggined,isLoggedIn,currUser,}=useContext(dbmscontext);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user_id = uuidv4();
            console.log("user_id:",user_id);
        
          const response = await axios.post('http://localhost:3334/api/signup', { username, email, password,user_id });
          console.log('Signup successful:', response.data.token);
          console.log("username::",response.data.user.username)
          localStorage.setItem('token', response.data.token);
          // Add any additional logic after successful signup (e.g., redirect)
          
          currUser(response.data.user.username)
          loggined(true);
            setisSignup(true)
        //   setisSignup(true);
    
        } catch (err) {
          console.log('Signup fail',err);
        }
      }
    //   useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     if (token) {
    //       const decodedToken = decode(token);
    //       if (decodedToken) {
    //         currUser(decodedToken.username); // Set current user from decoded token
    //         loggined(true);
    //       }
    //     }
    //   }, []); 
  
    return (
        <div className="flex justify-center items-center h-screen">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input  id="username"
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                       email
                    </label>
                    <input    type="text"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
          
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
          
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>
              
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" onClick={handleSubmit}>
                        Sign Up
                    </button>
                
                <p className="text-sm text-gray-600">
                Already have an account?
                <Link to="/Login" className="text-blue-500 hover:underline">
                  Login
                </Link>
              </p>
            </form>
           
        </div>
    );
}

export default Signup;