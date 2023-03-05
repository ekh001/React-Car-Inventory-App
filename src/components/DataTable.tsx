import React, { useState } from 'react'
import Modal from './Modal'
import { server_calls } from '../api/server';

function DataTable() {
    let [ open, setOpen ] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const getData = async () => {
        const result = await server_calls.get();
        console.log(server_calls.get())
    }

    return (
        <>

        {/* 1. Modal (popup) */}
            <Modal 
                open={open} 
                onClose={handleClose}       
            />

            {/*2.  Buttons */}
            <div className='flex flex-row'>
                <div>
                    <button
                        className='p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white'
                        onClick={() => handleOpen()}
                    >
                        Enter New Car
                    </button>
                    <button
                        className='p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white'
                    >
                        Update Car Info
                    </button>
                    <button
                        className='p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white'
                    >
                        Delete Car Info
                    </button>
                </div>
            </div>

        {/* 3. Data Table section */}
        <button onClick={getData}>get data</button>
        </>
  )
}

export default DataTable
