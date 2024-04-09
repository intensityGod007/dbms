import React, { useState } from 'react';

const AlterTable = () => {
  const [tableName, setTableName] = useState('');
  const [alterations, setAlterations] = useState('');

  const handleTableNameChange = (event) => {
    setTableName(event.target.value);
  };

  const handleAlterationsChange = (event) => {
    setAlterations(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the form submission, for example, sending the data to a server
    console.log('Table Name:', tableName);
    console.log('Alterations:', alterations);
    // Reset form fields
    setTableName('');
    setAlterations('');
  };

  return (
    <div className="max-w-md mx-autoshadow-md rounded px-8 pt-6 pb-8 mb-4">
    <h1 className="text-3xl font-bold mb-4 text-center">Alter Table</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="tableName" className="block text-sm font-medium text-gray-700">
          Table Name:
        </label>
        <input
          type="text"
          id="tableName"
          value={tableName}
          onChange={handleTableNameChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter table name"
        />
      </div>
      <div>
        <label htmlFor="alterations" className="block text-sm font-medium text-gray-700">
          Alterations:
        </label>
        <textarea
          id="alterations"
          value={alterations}
          onChange={handleAlterationsChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          rows="4"
          placeholder="Enter alterations"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
      >
        Alter Table
      </button>
    </form>
  </div>
  
  );
};

export default AlterTable;
