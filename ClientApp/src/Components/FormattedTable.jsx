import React from 'react';
import { TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Table } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { useEffect } from 'react';
import stuff from '../data';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    titleCell: {
        fontWeight: "bold",
        textAlign: "right"
    }
}));

const _FormattedTable = (props) => {
    const classes = useStyles();
    const [data, setData] = useState([]);

    useEffect(() => { setData(process(stuff)); }, []);

    const renderDataTable = (data) => {
        return (
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell className={classes.titleCell} >Actuals-2</TableCell>
                            <TableCell className={classes.titleCell} >Present year</TableCell>
                            <TableCell className={classes.titleCell} >Forecast year 1</TableCell>
                            <TableCell className={classes.titleCell} >Forecast year 2</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(row => (
                            <TableRow key={row.accountname}>
                                <TableCell component="th" scope="row">{row.id}</TableCell>
                                <TableCell>{row.accountname}</TableCell>
                                <TableCell align="right">{row.values[0]}</TableCell>
                                <TableCell align="right">{row.values[1]}</TableCell>
                                <TableCell align="right">{row.values[2]}</TableCell>
                                <TableCell align="right">{row.values[3]}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }

    const process = (data) => {
        let newData = [];
        let lastChildId = -1;
        let lastParentId = -1;
        let workingRow;
        for (const item of data) {
            if (lastChildId != item.childid) {
                if (lastChildId != -1) newData.push(workingRow);
                if (item.parentid != lastParentId) {
                    newData.push({ 'id': item.parentid, 'accountname': '', 'values': [] })
                    lastParentId = item.parentid;
                }
                lastChildId = item.childid;
                workingRow = {
                    'id': item.childid,
                    'accountname': item.accountname,
                    'values': []
                }
            }
            workingRow.values[new Date(item.period).getFullYear() - 2019] = item.amounts_per_child_account_per_year;
        }
        newData.push(workingRow)
        return newData;
    }

    return (
        <div>
            {renderDataTable(data)}
        </div>
    );
}

export const FormattedTable = _FormattedTable;
