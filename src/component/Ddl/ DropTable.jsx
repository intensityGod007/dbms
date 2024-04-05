import React, { useState } from 'react';
import axios from 'axios';

const DropTable = () => {
  const [tableName, setTableName] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setTableName(event.target.value);
  };

  const handleDropTable = async () => {
    try {
      const response = await axios.delete(`http://localhost:3334/ddl/droptable/${tableName}`);
      setMessage(response.data.message);
    } catch (error) {
      setMessage('An error occurred while dropping the table');
      console.error('Error dropping table:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Drop Table</h1>
      <input
        className="border border-gray-300 rounded-md px-4 py-2 mb-4"
        type="text"
        value={tableName}
        onChange={handleInputChange}
        placeholder="Enter table name to drop"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleDropTable}
      >
        Drop Table
      </button>
      {message && <p className="text-red-500 mt-4">{message}</p>}
    </div>
  );
};

export default DropTable;
