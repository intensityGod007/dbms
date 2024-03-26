
import React, { useState } from 'react';
import axios from 'axios';

const Createtable = () => {
  const [tableName, setTableName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCreateTable = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('http://localhost:3334/api/create-table', { tableName });
      console.log('Table created successfully:', response.data);
    } catch (err) {
      setError(err.message);
      console.error('Error creating table:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="m-4 p-4 border rounded">
      <h2 className="text-lg font-bold mb-4">Create Table</h2>
      {error && <div className="text-red-600 mb-4">Error: {error}</div>}
      <label htmlFor="tableName" className="block mb-2">Table Name:</label>
      <input
        type="text"
        id="tableName"
        value={tableName}
        onChange={(e) => setTableName(e.target.value)}
        className="border rounded w-1/2 py-2 px-3 mb-4"
      />
 <label htmlFor="tableName" className="block mb-2">Table Name:</label>
 <input >

 </input>
      <button
        onClick={handleCreateTable}
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
      >
        {loading ? 'Creating...' : 'Create Table'}
      </button>
    </div>
  );
};

export default Createtable;