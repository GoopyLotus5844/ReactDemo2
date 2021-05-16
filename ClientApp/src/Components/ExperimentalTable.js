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

const _ExperimentalTable = (props) => {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const populateWeatherData = () => {
        setData(stuff);
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
                                <TableCell component="th" scope="row">{row.parentid}</TableCell>
                                <TableCell>{row.childid}</TableCell>
                                <TableCell align="right">{row.accountname}</TableCell>
                                <TableCell align="right">{row.period}</TableCell>
                                <TableCell align="right">{row.ftypeid}</TableCell>
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

export const ExperimentalTable = _ExperimentalTable;
