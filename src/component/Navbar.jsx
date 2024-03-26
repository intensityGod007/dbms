
import React from 'react';
import { Link } from 'react-router-dom'; // Corrected import for Link from react-router-dom
import { useContext } from 'react';
import { dbmscontext } from '../context/dbmscontext.jsx';
const Navbar = () => {
const {currentuser,loggined,isLoggedIn, currUser }=useContext(dbmscontext)
const handleLogout = () => {
    // Clear authentication-related data
    console.log("logout");
    localStorage.removeItem('token');
    // Update application state to reflect logged-out status
    loggined(false);
    currUser(acount); // Clear current user information
    
};
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold">DBMS</div>
                <div className="menu flex flex-row justify-between items-center rounded-md h-12">

                    <ul className="flex flex-row gap-8 ">
                        <li className="group relative">
                            <Link to="/" className="flex text-white">
                                <span className="ml-2  hover:underline  hover:underline-blue-500">DDL</span>
                                <ul className="z-50 absolute left-0 mt-6 space-y-2 hidden group-hover:block bg-white text-gray-800 shadow-md">
                                    <li className="p-2 rounded-md hover:underline hover:bg-gray-200 transition duration-300 ease-in-out w-auto">
                                        <Link to="/create">Create</Link>
                                    </li>
                                    <li className="hover:underline p-2 rounded-md hover:bg-gray-200 transition duration-300 ease-in-out">
                                        <Link to="/drop">Drop</Link>
                                    </li>
                                    <li className=" hover:underline p-2 rounded-md hover:bg-gray-200 transition duration-300 ease-in-out">
                                        <Link to="/alter">Alter</Link>
                                    </li>
                                   
                                    <li className=" hover:underline p-2 rounded-md hover:bg-gray-200 transition duration-300 ease-in-out">
                                        <Link to="/rename">Rename</Link>
                                    </li>
                                </ul>
                            </Link>
                        </li>
                        <li className="group relative">
                            <Link to="/" className="flex text-white">
                                <span className="ml-2 hover:underline dark:first-line:">DML</span>
                                <ul className="absolute left-0 mt-6 space-y-2 hidden group-hover:block bg-white text-gray-800 shadow-md">
                                    <li className="p-2 rounded-md hover:underline hover:bg-gray-200 transition duration-300 ease-in-out">
                                        <Link to="/insert">Insert</Link>
                                    </li>
                                    <li className="hover:underline p-2 rounded-md hover:bg-gray-200 transition duration-300 ease-in-out">
                                        <Link to="/update">Update</Link>
                                    </li>
                                    <li className=" hover:underline p-2 rounded-md hover:bg-gray-200 transition duration-300 ease-in-out">
                                        <Link to="/Delete">Delete</Link>
                                    </li>
                                   
                                </ul>
                            </Link>
                        </li>
                       

                    </ul>
                </div>
                <div className="p-4">
                                <ul className="flex flex-row gap-6 md:gap-1 w-full">
                                    <li className="group p-2 mx-4 rounded-md relative hover:border  w-28 h-12">
                                        <Link to="/" className="flex text-white gap-2 w-20 h-12">
                                            <span><i className="fa-solid fa-user text-xl"></i></span>
                                            <span className="ml-2">{currentuser}</span>
                                       { isLoggedIn===false?( 
                                           <ul className="absolute left-0 mt-8 space-y-2 hidden group-hover:block bg-white text-gray-800 shadow-md">
                                                <li className="p-2 rounded-md hover:underline hover:bg-gray-200 transition duration-300 ease-in-out">
                                                    <Link to="/Login">Login</Link>
                                                </li>
                                                <li className="hover:underline p-2 rounded-md hover:bg-gray-200 transition duration-300 ease-in-out">
                                                    <Link to="/Signup">Signup</Link>
                                                </li>
                                               
                                            </ul>):

                                           (<ul className="absolute left-0 mt-8 space-y-2 hidden group-hover:block bg-white text-gray-800 shadow-md">
                                                <li className="p-2 rounded-md hover:underline hover:bg-gray-200 transition duration-300 ease-in-out">
                                                    <button onClick={handleLogout}>Logout</button>
                                                </li>
                                              
                                               
                                            </ul>)
                                            
                                       }
                                         
                                        
                                               
                                            
                                        </Link>
                                    </li>
                                   
                                </ul>
                            </div>
            </div>
        </nav>

    );
}

export default Navbar;