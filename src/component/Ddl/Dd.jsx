import React, { useState } from 'react';
import RenameTable from './RenameTable';
import AlterTable from './AlterTable';
import CreateTable from './createtable';
import DropTable from './ DropTable';

const Dd = () => {
    const [ddlcomm, setDdlComm] = useState('');

    const handleDdl = (e) => {
        setDdlComm(e.target.value);
    };

    return (
        <div className="flex flex-col bg-gray-100 rounded-lg p-8 mt-8 mx-auto" style={{ width: '55rem' }}>
            <div className="flex flex-row gap-2">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" value='create' onClick={handleDdl}>Create</button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" value='alter' onClick={handleDdl}>Alter</button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" value='rename' onClick={handleDdl}>Rename</button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" value='drop' onClick={handleDdl}>Drop</button>
            </div>

            {/* Render the appropriate component based on ddlcomm state */}
            {ddlcomm === 'create' && <CreateTable />}
            {ddlcomm === 'alter' && <AlterTable />}
            {ddlcomm === 'rename' && <RenameTable />}
            {ddlcomm === 'drop' && <DropTable />}
        </div>
    );
};

export default Dd;
