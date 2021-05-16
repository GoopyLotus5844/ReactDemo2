import { createMuiTheme } from '@material-ui/core';

export const lightTheme = createMuiTheme({
    typography: {
        fontFamily: 'Quicksand'
    },
});

export const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#000'
        },
        secondary: {
            main: '#FF0000'
        },
        background: {
            default: "#333"
        }
    },
    typography: {
        fontFamily: 'Quicksand'
    },
});