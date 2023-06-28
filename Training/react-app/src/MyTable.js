import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function MyTable(){

    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [price, setPrice] = useState('');

    const [rowData, setRowData] = useState([
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxster", price: 72000}
    ]);

    const [columnDefs] = useState([
        { field: 'make' },
        { field: 'model' },
        { field: 'price' }
    ]);

    const addModel = () => {

        let rows = [...rowData];
        let newModel = {
            make: make,
            model: model,
            price: price
        }
        rows.push(newModel);
        setRowData(rows)

    }

    return (
        <>
        <div style={{padding: '10px'}}>
            <div>
                <TextField id="standard-basic" label="Make" variant="standard" style={{margin: "10px"}} onChange={(e) => setMake(e.target.value)} />
                <TextField id="standard-basic" label="Model" variant="standard" style={{margin: "10px"}} onChange={(e) => setModel(e.target.value)} />
                <TextField id="standard-basic" label="Price" variant="standard" style={{margin: "10px"}} onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div style={{padding: '20px'}}>
                <Button variant="contained" onClick={() => addModel()}>Add</Button>
            </div>            
        </div>

        <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}>
            </AgGridReact>
        </div>
        </>

    )



}

export default MyTable;