import './TableComponent.scss';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link} from "react-router-dom";
import jsonProducts from '../../data/products.json';
import {AmountButtonGroup} from "../AmountButtonGroup/AmountButtonGroup";

let products = JSON.parse(JSON.stringify(jsonProducts, null, 2));

export const TableComponent = (props) => {


    function isChecked(product) {
        if(Object.entries(props.checkboxes).filter(checkbox => checkbox[1] === true).length === 0 ||
            Object.entries(props.checkboxes).filter(checkbox => checkbox[1] === true).map(checkbox =>  checkbox[0]).includes(product.coupling)) {
            return product;
        }
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <th className={'btn-container'} />
                        <th className={'favourite-container'} />
                        {Object.keys(props.data[0]).map((tableCell,key) => {
                            return (<TableCell key={key} >{tableCell[0].toUpperCase() + tableCell.substring(1)}</TableCell>);
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.filter(product=> {
                        return product.weight >= props.displayedItems[0] & product.weight <= props.displayedItems[1]
                    }).filter(product => isChecked(product)).map((product, key) => {
                        const fields = Object.values(product);
                
                        return (
                            <TableRow
                                key={key}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }} className={'tr'} onClick={() => {
                                    // console.log(cart);
                            }}
                            >
                                <AmountButtonGroup product={product} />
                                {/*<button className='buy-btn btn-container' onClick={() => changeCart(product, 1)}>BUY</button>*/}
                                {/*<button className='buy-btn btn-container' onClick={() => changeCart(product, 1)}>-</button>*/}
                                {/*<div>{1}</div>*/}
                                {/*<button className='buy-btn btn-container' onClick={() => changeCart(product, 1)}>+</button>*/}
                                {fields.map((field, index) => {
                                    return index === 0 ? <TableCell key={index}><Link to={`../${field}`}>{field}</Link></TableCell> : <TableCell key={index}>{field}</TableCell>;
                                })}
                                 {/* {fields.map(field => console.log(Object.entries(field)))} */}
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}