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
    const [forecasts, setForecasts] = useState([]);
    const [loading, setLoading] = useState(true);

    const populateWeatherData = async () => {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        setForecasts(data);
        setLoading(false);
    }

    useEffect(() => { populateWeatherData(); }, []);

    const renderForecastsTable = (forecasts) => {
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
                        {forecasts.map(forecast => (
                            <TableRow key={forecast.date}>
                                <TableCell component="th" scope="row">{forecast.entryID}</TableCell>
                                <TableCell>{forecast.entryName}</TableCell>
                                <TableCell align="right">{forecast.baseYear1}</TableCell>
                                <TableCell align="right">{forecast.baseYear2}</TableCell>
                                <TableCell align="right">{forecast.forecastYear1}</TableCell>
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
                : renderForecastsTable(forecasts)
            }
        </div>
    );
}

export const DataTable = _DataTable;
