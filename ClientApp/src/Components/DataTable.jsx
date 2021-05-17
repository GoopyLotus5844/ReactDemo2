import React from 'react';
import { TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Table } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    titleCell: {
        fontWeight: "bold",
        textAlign: "right"
    }
}));

const _DataTable = (props) => {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const populateWeatherData = async () => {
        const response = await fetch('accounts');
        const data = await response.json();
        setData(data);
        setLoading(false);
    }

    useEffect(() => { populateWeatherData(); }, []);

    const renderDataTable = (data) => {
        return (
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell className={classes.titleCell} >Base year 1</TableCell>
                            <TableCell className={classes.titleCell} >Base year 2</TableCell>
                            <TableCell className={classes.titleCell} >Forecast year 1</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(row => (
                            <TableRow key={row.date}>
                                <TableCell component="th" scope="row">{row.entryID}</TableCell>
                                <TableCell>{row.entryName}</TableCell>
                                <TableCell align="right">{row.baseYear1}</TableCell>
                                <TableCell align="right">{row.baseYear2}</TableCell>
                                <TableCell align="right">{row.forecastYear1}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }

    return (
        <div>
            {loading
                ? <p><em>Loading...</em></p>
                : renderDataTable(data)
            }
        </div>
    );
}

export const DataTable = _DataTable;
