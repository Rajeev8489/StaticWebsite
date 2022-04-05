import { FormControl, FormHelperText, InputLabel, TextareaAutosize } from '@mui/material';
import React from 'react'

export default function Textarea(props) {

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
        <div >
            
            <FormControl
               variant="outlined"
               size='small'
               disabled={disabled || false}
               {...(error && { error: true })} >
               <TextareaAutosize
                placeholder={required ? label + ' *' : label}
                style={{ height: 150 }}
                name={name}
                value={value}
                onChange={onChange}
                inputProps={{
                    readOnly: Boolean(readOnly || false),
                }}
                {...other}
            />
               {error && <FormHelperText>{error}</FormHelperText>}
          </FormControl>
        </div>
    )
}
