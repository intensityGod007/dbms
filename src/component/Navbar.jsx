import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { dbmscontext } from '../context/dbmscontext.jsx';

const Navbar = () => {
    const { currentuser, isLoggedIn, loggined, currUser, setsqlfun, user_table, currentUserTable } = useContext(dbmscontext);
    const [phone, setPhone] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [showhamb, setshowhamb] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    const handlesqlcommand = (e) => {
        console.log("clicked")
        console.log("loged:", e.target.value)
        setsqlfun(e.target.value);
        console.log("loged:", e.target.value)
    }

    // Update width


    const handlehambur = () => {
        setshowhamb(!showhamb)
        console.log("clicked")

    }
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            console.log(width);
        };

        // Add event listener to listen for window resize
        window.addEventListener("resize", handleResize);

        // Remove event listener when the component is unmounted
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Update phone state based on window width
    useEffect(() => {
        if (width <= 900) {
            setPhone(true);
        } else {
            setPhone(false);
            setshowhamb(false);
        }
    }, [width]);

    const handleLogout = () => {
        // Clear authentication-related data
        localStorage.removeItem('token');
        // Update application state to reflect logged-out status
        loggined(false);
        currUser(null); // Clear current user information
    };

    return (
        <div>
            {!phone && (
                <nav className="fixed bg-custom-purple p-4 w-full z-10">
                    <div className="container mx-auto flex justify-between items-center">
                        <h1 className="text-white font-bold text-2xl">ClickQuery</h1>
                        <div className="menu flex flex-row justify-between items-center rounded-md h-12">
                            <ul className="flex flex-row gap-8">
                                <li className="group relative">
                                    <Link to="/dll" className="flex text-white">
                                        <button className="ml-2 hover:underline text-md" value='ddl' onClick={handlesqlcommand}>DDL</button>
                                    </Link>
                                </li>
                                <li className="group relative">
                                    <Link to="/dml" className="flex text-white">
                                        <button className="ml-2 hover:underline text-md" value='dml' onClick={handlesqlcommand}>DML</button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="p-4">
                            <ul className="flex flex-row gap-6 md:gap-1 w-full">
                                <li className="group p-2 mx-4 rounded-md relative hover:border w-28 h-12">
                                    <Link to="/" className="flex text-white gap-2 w-20 h-12">
                                        <span><i className="fa-solid fa-user text-xl"></i></span>
                                        <span className="ml-2">{currentuser}</span>
                                        {isLoggedIn === false ? (
                                            <ul className="absolute left-0 mt-8 space-y-2 hidden group-hover:block bg-white text-gray-800 shadow-md">
                                                <li className="p-2 rounded-md hover:underline hover:bg-gray-200 transition duration-300 ease-in-out">
                                                    <Link to="/Login">Login</Link>
                                                </li>
                                                <li className="hover:underline p-2 rounded-md hover:bg-gray-200 transition duration-300 ease-in-out">
                                                    <Link to="/Signup">Signup</Link>
                                                </li>
                                            </ul>
                                        ) : (
                                            <ul className="absolute left-0 mt-8 space-y-2 hidden group-hover:block bg-white text-gray-800 shadow-md">
                                                <li className="p-2 rounded-md hover:underline hover:bg-gray-200 transition duration-300 ease-in-out">
                                                    <button onClick={handleLogout}>Logout</button>
                                                </li>
                                            </ul>
                                        )}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            )}
            {phone && (
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center bg-custom-purple">
      <div className="flex flex-row items-center gap-1">
        <button className="focus:outline-none text-gray-400 hover:text-white md:hidden" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
        <h2 className="text-xl text-red-400 font-bold">ClickQuery</h2>
      </div>
      <div className="flex items-center space-x-2">
        <button className="focus:outline-none text-gray-400 hover:text-white">
          <i className="fas fa-search text-xl"></i>
        </button>
        <div>
          <ul className="flex flex-row gap-6 md:gap-1">
            <li className="relative">
              <button className="p-2 mx-4 rounded-md focus:outline-none text-gray-400 hover:text-white" onClick={toggleMenu}>
                <i className="fa-solid fa-user text-xl"></i>
                <span className="ml-2 text-white">{currentuser}</span>
              </button>
              {isMenuOpen && (
                <ul className="absolute left-0 mt-2 space-y-2 bg-gray-900 text-gray-400 shadow-md">
                  {!isLoggedIn ? (
                    <>
                      <li className="p-2 rounded-md hover:underline hover:bg-gray-800 transition duration-300 ease-in-out">
                        <Link to="/login">Login</Link>
                      </li>
                      <li className="p-2 rounded-md hover:underline hover:bg-gray-800 transition duration-300 ease-in-out">
                        <Link to="/signup">Signup</Link>
                      </li>
                    </>
                  ) : (
                    <li className="p-2 rounded-md hover:underline hover:bg-gray-800 transition duration-300 ease-in-out">
                      <button onClick={handleLogout}>Logout</button>
                    </li>
                  )}
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
)}


        </div>
    );
};

export default Navbar;
