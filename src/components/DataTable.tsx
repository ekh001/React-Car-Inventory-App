import React, { useState } from 'react'
import Modal from './Modal'
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';
import dataTableBackground from '../assets/images/datatable-bg2.svg'

const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90, hide: true },
    { field: 'make', headerName: 'Make', flex: 1 },
    { field: 'model', headerName: 'Model', flex: 1 },
    { field: 'color', headerName: 'Color', flex: 1 },
    { field: 'nickname', headerName: 'Nickname', flex: 2 },
]

function DataTable() {
    const [ open, setOpen ] = useState(false);
    const { contactData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`),
        setTimeout(() => {window.location.reload()}, 1000);
    }

    return (
        <>
            <div 
            style={{ backgroundImage: `url(${ dataTableBackground })`}}
            className="flex-row justify-center mx-auto bg-cover bg-fixed h-screen"
            >



        {/* 1. Modal (popup) */}
            <Modal 
                id={selectionModel}
                open={open} 
                onClose={handleClose}       
            />

        {/* 2. Data Table section */}
        <div className={ open ? "hidden" : "container mx-10 my-10 flex flex-col drop-shadow-md"}
        style={{ height: 400, width: 'auto'}}
        >
            <h1 className="p-3 bg-black text-white font-mono text-center text-xl my-2 rounded">Virtual Garage of Excellence</h1>
            <DataGrid rows={contactData} columns={columns} rowsPerPageOptions={[5]}
            checkboxSelection={true} 
            onSelectionModelChange={ (item:any) => {
                setSelectionModel(item)
            }}/>
        </div>

        {/*2.  Buttons */}
        <div className='flex flex-row justify-center'>
            <div>
                <button
                    className='p-3 bg-green-200 rounded border-2 border-black drop-shadow-md hover:bg-green-500 hover:text-white'
                    onClick={() => handleOpen()}
                >
                    Enter New Car
                </button>
                <button
                    className='p-3 bg-green-200 m-3 rounded border-2 border-black drop-shadow-md hover:bg-green-500 hover:text-white'
                    onClick={handleOpen}
                >
                    Update Car Info
                </button>
                <button
                    className='p-3 bg-green-200 m-3 rounded border-2 border-black drop-shadow-md hover:bg-green-500 hover:text-white'
                    onClick={deleteData}
                >
                    Delete Car Info
                </button>
            </div>
        </div>
        </div>

    </>
  )
}

export default DataTable
