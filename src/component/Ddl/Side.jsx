import React, { useState } from 'react';
// import { useContext } from 'react';

// import { dbmscontext } from '../context/dbmscontext';
// import { jwtDecode } from "jwt-decode";
// import { useState } from 'react';
// import db from '../../../../Backened/db';
const Side = () => {
  // const {tableData}=useContext(dbmscontext)
  // const[alltables,setalltables]=useState('');
  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     const decodedToken =jwtDecode(token); 
  //   console.log("Decoded Token:", decodedToken);
  //   const userid=decodedToken.userId;
  //   const tables=async()=>{
  //   const a= await db.query('select *from table_creation_logs where user_id=$1',[userid])
  //   }
      
  //   }
  // }, []);




  return (
    <div className=" ms-4 mt-8 rounded-md h-full bg-custom-lightpink2 w-64 overflow-y-auto z-50">
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
        <li className="p-2 mx-4 rounded-md bg-custom-peach1 hover:bg-gray-700 transition duration-300 ease-in-out">
          <a href="/" className="flex text-white">
            <span className="ml-2">Table 1</span>
          </a>
        </li>
        <li className="p-2 mx-4 rounded-md bg-custom-begni hover:bg-gray-700 transition duration-300 ease-in-out">
          <a href="/shorts" className="flex text-white">
            <span className="ml-2">Table 2</span>
          </a>
        </li>
        <li className="p-2 mx-4 rounded-md bg-custom-lightpink hover:bg-gray-700 transition duration-300 ease-in-out">
          <a href="/blog/" className="flex text-white">
            <span className="ml-2">Table 3</span>
          </a>
        </li>
        <li className="p-2 mx-4 rounded-md bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out">
          <a href="/contact" className="flex text-white">
            <span className="ml-2">Table 4</span>
          </a>
        </li>
        <li className="p-2 mx-4 rounded-md bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out">
          <a href="/about" className="flex text-white">
            <span className="ml-2">Table 5</span>
          </a>
        </li>
        {/* Add more list items for additional tables */}
      </ul>
    </div>
  </nav>
</div>

  
  );
}

export default Side;
