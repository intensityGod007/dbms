import React, { useState } from 'react';

const RenameTable = () => {
  const [newTableName, setNewTableName] = useState('');

  const handleNewTableNameChange = (event) => {
    setNewTableName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the form submission, for example, sending the data to a server
    console.log('New Table Name:', newTableName);
    // Reset form field
    setNewTableName('');
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Rename Table</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="newTableName" className="block text-sm font-medium text-gray-700">New Table Name:</label>
          <input
            type="text"
            id="newTableName"
            value={newTableName}
            onChange={handleNewTableNameChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
          Rename
        </button>
      </form>
    </div>
  );
};

export default RenameTable;
