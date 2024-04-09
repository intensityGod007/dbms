import React, { useState } from 'react';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';

const CreateTable = () => {
    const [currentDdl, setCurrentDdl] = useState('createTable');
    const [numAttributes, setNumAttributes] = useState(0);
    const [attributes, setAttributes] = useState([]);
    const [dataTypes, setDataTypes] = useState([]);
    const [constraints, setConstraints] = useState([]);
    const [ddlcomm, setDdlComm] = useState('');
    const [tablename, setTablename] = useState('');
    const [message, setMessage] = useState('');

    const handleAttributeChange = (e, index) => {
        const updatedAttributes = [...attributes];
        updatedAttributes[index] = e.target.value;
        setAttributes(updatedAttributes);
    };

    const handleDataTypeChange = (e, index) => {
        const updatedDataTypes = [...dataTypes];
        updatedDataTypes[index] = e.target.value;
        setDataTypes(updatedDataTypes);
    };

    const handleConstraintChange = (e, index) => {
        const updatedConstraints = [...constraints];
        updatedConstraints[index] = e.target.value;
        setConstraints(updatedConstraints);
    };

    const handleAddAttribute = () => {
        setNumAttributes(numAttributes + 1);
        setAttributes([...attributes, '']);
        setDataTypes([...dataTypes, '']);
        setConstraints([...constraints, '']);
    };

    const handleRemoveAttribute = () => {
        if (numAttributes > 0) {
            setNumAttributes(numAttributes - 1);
            setAttributes(attributes.slice(0, numAttributes - 1));
            setDataTypes(dataTypes.slice(0, numAttributes - 1));
            setConstraints(constraints.slice(0, numAttributes - 1));
        }
    };

    const renderAttributeInputs = () => {
        let inputs = [];
        for (let i = 0; i < numAttributes; i++) {
            inputs.push(
                <div key={i} className="mt-4">
                    <label className="block text-gray-700">{`Attribute ${i + 1}`}</label>
                    <input
                        type="text"
                        placeholder={`Attribute ${i + 1}`}
                        value={attributes[i] || ''}
                        onChange={(e) => handleAttributeChange(e, i)}
                        className="block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    <label className="block mt-2 text-gray-700">Data type</label>
                    <input
                        type="text"
                        placeholder={`Data type for Attribute ${i + 1}`}
                        value={dataTypes[i] || ''}
                        onChange={(e) => handleDataTypeChange(e, i)}
                        className="block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    <label className="block mt-2 text-gray-700">Constraint</label>
                    <input
                        type="text"
                        placeholder={`Constraint for Attribute ${i + 1}`}
                        value={constraints[i] || ''}
                        onChange={(e) => handleConstraintChange(e, i)}
                        className="block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                </div>
            );

        }
        return inputs;
    };

    const handleDdl = (e) => {
        setDdlComm(e.target.value);
    };

    const handleSubmit = async () => {
        // Create an object containing table information
        const token = localStorage.getItem('token');
        const decodedToken = jwtDecode(token);

        const tableInfo = {
            decodedToken,
            tablename,
            attributes: attributes.slice(0, numAttributes),
            dataTypes: dataTypes.slice(0, numAttributes),
            constraints: constraints.slice(0, numAttributes)
        };

        try {
            // Send the object to the backend server
            const response = await axios.post('http://localhost:3334/ddl/createtable', tableInfo);

            // Handle response from the server
            console.log('Server response:', response.data);
            setMessage(response.data.message); // Set message from backend
            // You can handle the response as needed
        } catch (error) {
            // Handle error
            
            setMessage('Error creating table: ' + error.message);
        }
    };

    return (
        <div className="mt-4 ms-4 max-w-2xl mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <label htmlFor="tableName" className="">Table Name</label>
            <input
                value={tablename}
                onChange={(e) => setTablename(e.target.value)}
                id="tableName"
                type="text"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <h1 className="mt-2">Number of Attributes</h1>
            <input
                type="number"
                value={numAttributes}
                onChange={(e) => setNumAttributes(parseInt(e.target.value))}
                className="block w-auto rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mt-2 bg-white text-gray-900"
            />

            <div className="mt-4 overflow-y-auto max-h-40">
                {renderAttributeInputs()}
            </div>
            <button
                className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 mt-4"
                onClick={handleSubmit}
            >
                Create Table
            </button>
            {message && <p className="mt-4 text-sm text-gray-500">{message}</p>}
        </div>

    );
};

export default CreateTable;
