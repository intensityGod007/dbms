import React, { useState } from 'react';
import Dd from './Ddl/Dd';
import Navbar from './Navbar';
import Side from './Ddl/Side';
import Dm from './Dml/Dm';
import { dbmscontext } from '../context/dbmscontext';
import { useContext } from 'react';



const HeroSection = () => {
  const{sqlcommand}=useContext(dbmscontext);
  console.log("sqlcommand:",sqlcommand);
  const d = new Date();
  let year = d.getFullYear();

    return (
        <>
            <div className=" flex flex-col text-center justify-between">
                <div className="bg-gray-200 p-2 h-24"><Navbar /></div>
                <div className="bg-gray-100 p-6 flex-grow">
                    {sqlcommand==='ddl' ? <Dd /> : <Dm />}
                </div>
                <footer className="bg-gray-200 text-center p-4">
          All rights reserved @{year}
        </footer>

             </div>
        </>
    );
};

export default HeroSection;
