import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {
    randomCreatedDate,
    randomTraderName,
    randomUpdatedDate,
} from '@material-ui/x-grid-data-generator';
import { useState } from 'react';
import { useEffect } from 'react';
import stuff from '../data';

const _FormattedGrid = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => { setData(process(stuff)); }, []);

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
                    'year1': 0,
                    'year2': 0,
                    'year3': 0,
                    'year4': 0
                }
            }
            //workingRow.values[new Date(item.period).getFullYear() - 2019] = item.amounts_per_child_account_per_year;
            let yearNum = new Date(item.period).getFullYear() - 2019;
            if (yearNum == 0) workingRow.year1 = item.amounts_per_child_account_per_year;
            if (yearNum == 1) workingRow.year2 = item.amounts_per_child_account_per_year;
            if (yearNum == 2) workingRow.year3 = item.amounts_per_child_account_per_year;
            if (yearNum == 3) workingRow.year4 = item.amounts_per_child_account_per_year;
        }
        newData.push(workingRow)
        console.log(newData);
        return newData;
    }

    return (
        <div style={{ height: 800, width: '100%' }}>
            <DataGrid style={{ colCellSortable: false }} rows={data} columns={columns} />
        </div>
    );
}

const columns = [
    { field: 'id', headerName: 'ID', type: 'number', editable: false, width: 180 },
    { field: 'accountname', headerName: 'Account name', type: 'string', editable: false, width: 300 },
    { field: 'year1', headerName: 'Actuals-2', type: 'number', editable: false, width: 180 },
    { field: 'year2', headerName: 'Present year', type: 'number', editable: false, width: 180 },
    { field: 'year3', headerName: 'Forecast year 1', type: 'number', editable: false, width: 180 },
    { field: 'year4', headerName: 'Forecast year 2', type: 'number', editable: false, width: 180 },
];

const columns2 = [
    { field: 'name', headerName: 'Name', width: 180, editable: true },
    { field: 'age', headerName: 'Age', type: 'number', editable: true },
    {
        field: 'dateCreated',
        headerName: 'Date Created',
        type: 'date',
        width: 180,
        editable: true,
    },
    {
        field: 'lastLogin',
        headerName: 'Last Login',
        type: 'dateTime',
        width: 220,
        editable: true,
    },
];

const rows = [
    {
        id: 1,
        name: randomTraderName(),
        age: 25,
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate(),
    },
    {
        id: 2,
        name: randomTraderName(),
        age: 36,
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate(),
    },
    {
        id: 3,
        name: randomTraderName(),
        age: 19,
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate(),
    },
    {
        id: 4,
        name: randomTraderName(),
        age: 28,
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate(),
    },
    {
        id: 5,
        name: randomTraderName(),
        age: 23,
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate(),
    },
];

export const FormattedGrid = _FormattedGrid;
