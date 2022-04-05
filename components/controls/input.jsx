import { TextField } from '@mui/material';
import React from 'react'

export default function Input(props) {

     const {
          name,
          label,
          value,
          error = null,
          required,
          disabled,
          readOnly,
          onChange,
          ...other
     } = props;

     return (
          <div>
               <TextField
                    // sx={{
                    //      '& > :not(style)': { m: 1, }, width: '80%', marginLeft:'10px'
                    // }}
                    size="small"
                    disabled={disabled || false}
                    label={required ? label + ' *' : label}
                    name={name}
                    value={value}
                    onChange={onChange}
                    {...(error && { error: true, helperText: error })}
                    inputProps={{
                         readOnly: Boolean(readOnly || false),
                    }}
                    {...other}
               />
          </div>
     )
}
