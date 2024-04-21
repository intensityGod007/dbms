import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { useContext } from 'react';
import { dbmscontext } from '../../context/dbmscontext';
import { Link } from 'react-router-dom';

const Side = () => {
  const [allTables, setAllTables] = useState([]);
  const { isLoggedIn,user_table,currentUserTable } = useContext(dbmscontext);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      if (token && isLoggedIn) {
        try {
          const decodedToken = jwtDecode(token);
          const userId = decodedToken.userId;

          const response = await axios.get(`http://localhost:3334/api/tabledata/${userId}`);
          const data = response.data;
          setAllTables(data.rows);
          // console.log("table:",data.rows[0]);
          currentUserTable(data.rows);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else {
        setAllTables([]); // Clear tables if not logged in or no token
      }
    };
    fetchData();
  }, [isLoggedIn]); // Fetch data whenever isLoggedIn changes

  return (
    <div className="ms-4  rounded-md h-full bg-custom-lightpink2 w-64 overflow-y-auto z-50">
      <nav id="hamburger" className="flex flex-col w-full">
        <div className="flex flex-col items-center mt-12 gap-4">
          <div className="mx-4 flex items-center justify-center w-full">
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md flex items-center w-full">
              <span>
                <i className="fas fa-search"></i>
              </span>
              <span className="ml-2">Search</span>
            </button>
          </div>
          <div className="mx-4 bg-gray-700 p-4 rounded-md w-full">
            <h1 className="text-white font-bold text-lg">Your tables</h1>
          </div>
          <ul className="flex flex-col gap-2 mt-4 w-full">
            {allTables.map((table, index) => (
              <li key={index} className="p-2 mx-4 rounded-md bg-custom-peach1 hover:bg-gray-700 transition duration-300 ease-in-out">
                <Link to="/" className="flex text-white">
                  <span className="ml-2">{table.table_name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Side;
