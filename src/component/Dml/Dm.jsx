import React, { useState } from 'react';
import InsertTable from './InsertTable';
import UpdateTable from './UpdateTable';
import Delete from './Delete'
import Side from '../Ddl/Side';
const Dm = () => {
    const [dmlcomm, setDmlComm] = useState('');

    const handleDdl = (e) => {
        setDmlComm(e.target.value);
    };

    return (
    //     <div className="bg-custom-peach rounded-lg p-8 mt-8 mx-auto ms-4 right-7">
    //     <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
    //         <div className="flex flex-row gap-2">
    //             <button className="bg-red-300 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" value='create' onClick={handleDdl}>Insert</button>
    //             <button className="bg-amber-300 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded" value='alter' onClick={handleDdl}>Update</button>
    //             <button className="bg-lime-400 hover:bg-lime-600 text-white font-bold py-2 px-4 rounded" value='rename' onClick={handleDdl}>Delete</button>
    //         </div>
    //         <div className='flex justify-center md:justify-end'>
    //             {dmlcomm === 'Insert' && <InsertTable/>}
    //             {dmlcomm === 'Update' && <UpdateTable/>}
    //             {dmlcomm === 'Delete' && <Delete/>}
    //         </div>
    //     </div>
    // </div>
    <div className="w-min-screeen sm:grid grid-cols-5 grid-rows-2 px-4 py-6 min-h-full lg:min-h-screen space-y-6 sm:space-y-0 sm:gap-4">
    <div className="col-span-4 bg-gradient-to-tr bg-custom-peach rounded-md flex  w-auto">

        <div className="ml-2 mb-2">
            <div className="rounded-md mt-2 flex  xl:gap-2 sm:gap-1">        
                 <button className="bg-red-300 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" value='insert' onClick={handleDdl}>Insert</button>
                <button className="bg-amber-300 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded" value='update' onClick={handleDdl}>Update</button>
                <button className="bg-lime-400 hover:bg-lime-600 text-white font-bold py-2 px-4 rounded" value='delete' onClick={handleDdl}>Delete</button>
               
            </div>
            <div className=''>
                {dmlcomm === 'insert' && <InsertTable/>}
                {dmlcomm === 'update' && <UpdateTable />}       
                  {dmlcomm === 'delete' && < Delete/>}
                
            </div>
        </div>


    </div>
    <div class="h-96 col-span-1 ">
            <Side/>
    </div>
</div>


    );
};

export default Dm;
