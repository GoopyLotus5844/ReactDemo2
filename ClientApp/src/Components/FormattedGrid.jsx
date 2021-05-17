import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {
    randomCreatedDate,
    randomTraderName,
    randomUpdatedDate,
} from '@material-ui/x-grid-data-generator';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { useEffect } from 'react';
import stuff from '../data';

const _FormattedGrid = (props) => {
    const [data, setData] = useState([]);

    

    return (
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
        </div>
    );

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
    useEffect(() => { setData(process(stuff)); }, []);
}

const columns = [
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
