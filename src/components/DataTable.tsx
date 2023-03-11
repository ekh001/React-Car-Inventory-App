import React, { useState } from 'react'
import Modal from './Modal'
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

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
    // const [ selectionModel, setSelectionModel ] = useState<any>([])

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

        {/* 1. Modal (popup) */}
            <Modal 
                id={selectionModel}
                open={open} 
                onClose={handleClose}       
            />

        {/* 2. Data Table section */}
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
        style={{ height: 400, width: '100%'}}
        >
            <h2 className="p-3 bg-emerald-300 font-mono text-center text-xl my-2 rounded">My Cars</h2>
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
                    className='p-3 bg-emerald-300 m-3 rounded hover:bg-slate-800 hover:text-white'
                    onClick={() => handleOpen()}
                >
                    Enter New Car
                </button>
                <button
                    className='p-3 bg-emerald-300 m-3 rounded hover:bg-slate-800 hover:text-white'
                    onClick={handleOpen}
                >
                    Update Car Info
                </button>
                <button
                    className='p-3 bg-emerald-300 m-3 rounded hover:bg-slate-800 hover:text-white'
                    onClick={deleteData}
                >
                    Delete Car Info
                </button>
            </div>
        </div>
    </>
  )
}

export default DataTable
