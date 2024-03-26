import React, { createContext, useEffect } from "react";

import { useState } from "react";

export const dbmscontext = createContext(null);

const DbmscontextProvider = (props) => {
    
   
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State for isLoggedIn
    const [currentuser, setCurrentUser] = useState('Account'); // State for current user

  

    const loggined = (e) => {
        setIsLoggedIn(e); // Function to set isLoggedIn to the value passed in
    };

    const currUser = (name) => {
        setCurrentUser(name);
    };

   

    const contextValue = { isLoggedIn, loggined, currentuser, currUser }; // Include loggined function
    return (
        <dbmscontext.Provider value={contextValue}>
            {props.children}
        </dbmscontext.Provider>
    );
};

export default DbmscontextProvider;