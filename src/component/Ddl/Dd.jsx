import React, { useState } from 'react';
import RenameTable from './RenameTable';
import AlterTable from './AlterTable';
import CreateTable from './CreateTable';
import DropTable from './ DropTable';

const Dd = () => {
    const [ddlcomm, setDdlComm] = useState('');

    const handleDdl = (e) => {
        setDdlComm(e.target.value);
    };

    return (
        <div className="flex flex-col bg-custom-peach rounded-lg p-8 mt-8 mx-auto ms-4 right-7" style={{ width: '55rem' }}>
    <div className="flex flex-row gap-2 ms-4">
        <button className="bg-red-300 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" value='create' onClick={handleDdl}>Create</button>
        <button className="bg-amber-300 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded" value='alter' onClick={handleDdl}>Alter</button>
        <button className="bg-lime-400 hover:bg-lime-600 text-white font-bold py-2 px-4 rounded" value='rename' onClick={handleDdl}>Rename</button>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" value='drop' onClick={handleDdl}>Drop</button>
    </div>

    {/* Render the appropriate component based on ddlcomm state */}
    <div className=''>
        {ddlcomm === 'create' && <CreateTable />}
        {ddlcomm === 'alter' && <AlterTable />}
        {ddlcomm === 'rename' && <RenameTable />}
        {ddlcomm === 'drop' && <DropTable />}
    </div>
</div>

    );
};

export default Dd;
