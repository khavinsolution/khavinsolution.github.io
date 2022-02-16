import { createTheme } from "@mui/material/styles";

const masterTheme = createTheme({
    typography: {
        fontFamily: [
            'monospace',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    palette: {
        text: {
            primary: '#525F85',
            secondary: '#5C65AC',
        },
        primary: {
            main: '#43527F',
        },
        secondary: {
            main: '#5C65AC'
        },
    },
})


const Theme = createTheme(masterTheme, {
    palette: {
        info: {
            main: masterTheme.palette.secondary.main,
        },
    },
});

export default Theme