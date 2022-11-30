// React Imports
import React, { useState } from 'react';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';

// Local Imports
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { CarForm } from '../CarForm/CarForm';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'make',
        headerName: 'Make',
        width: 150,
        editable: true,
    },
    {
        field: 'model',
        headerName: 'Model',
        width: 150,
        editable: true,
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 110,
        editable: true,
    },
    {
        field: 'year',
        headerName: 'Year',
        width: 160,
        editable: true,
    },
    {
        field: 'acceleration',
        headerName: 'Acceleration',
        width: 160,
        editable: true,
    },
    {
        field: 'max_speed',
        headerName: 'Speed',
        width: 160,
        editable: true,
    },
    {
        field: 'weight',
        headerName: 'Weight',
        width: 160,
        editable: true,
    },
];


interface gridData {
    data: {
        id?:string;
    }
}

export const DataTable = () => {
    let { carData, getData } = useGetData();
    let [open, setOpen] = useState(false)
    let [gridData, setData] = useState<GridSelectionModel>([])

    let handleOpen = () => {
        setOpen(true)
    }

    let handleClose = () => {
        setOpen(false)
    }

    let deleteData = () => {
        serverCalls.delete(`${gridData[0]}`)
        getData()
    }

    console.log(gridData)

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={carData}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                onSelectionModelChange = {(newSelectionModel) => {setData(newSelectionModel);}}
                {...carData}
            />
            <Button onClick={handleOpen}>Update</Button>
            <Button variant='contained' color='secondary' onClick={deleteData}>Delete</Button>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update a Car</DialogTitle>
            <DialogContent>
                <DialogContentText>Car id: {gridData[0]}</DialogContentText>
                    <CarForm id={`${gridData[0]}`} />
            </DialogContent>
            <DialogActions>
                <Button onClick = {handleClose} color="primary">Cancel</Button>
                <Button onClick = {handleClose} color="primary">Done</Button>
            </DialogActions>
            </Dialog>
        </div>
    )
}