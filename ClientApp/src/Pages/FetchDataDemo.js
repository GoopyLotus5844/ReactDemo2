import React, { Component } from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
}));

const _FetchDataDemo = (props) => {
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
                            <TableCell>Date</TableCell>
                            <TableCell align="right">Temp. (C)</TableCell>
                            <TableCell align="right">Temp. (f)</TableCell>
                            <TableCell align="right">Summary</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {forecasts.map(forecast => (
                            <TableRow key={forecast.date}>
                                <TableCell component="th" scope="row">
                                    {forecast.date}
                                </TableCell>
                                <TableCell align="right">{forecast.temperatureC}</TableCell>
                                <TableCell align="right">{forecast.temperatureF}</TableCell>
                                <TableCell align="right">{forecast.summary}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }

    return (
        <div>
            <Typography variant="h2">Wealther forecast</Typography>
            <Typography>This component demonstrates fetching data from the server.</Typography>
            {loading
                ? <p><em>Loading...</em></p>
                : renderForecastsTable(forecasts)
            }
        </div>
    );
}

export const FetchDataDemo = _FetchDataDemo;
