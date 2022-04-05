import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();
const UseStyles = makeStyles({
    root: {
        backgroundColor: '#154c79',
        margin: theme.spacing(1, 'auto'),
    },
});


export default function Button(props) {

    const { text,
        size,
        variant,
        onClick,
        ...other
    } = props;

    const Styles = UseStyles();

    return (
        <MuiButton
            className='formButton'
            variant={variant || "contained"}
            size={size || "small"}
            onClick={onClick}
            {...other}
        >
            {text}
        </MuiButton>
    )
}
