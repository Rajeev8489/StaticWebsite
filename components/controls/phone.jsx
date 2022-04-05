import * as React from 'react';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import { FormHelperText, InputLabel, FormControl, OutlinedInput } from '@mui/material';

const TextMaskPhone = React.forwardRef(function TextMaskPhone(props, ref) {
     const { onChange, ...other } = props;
     return (
          <IMaskInput
               {...other}
               mask="#00-000-0000"
               definitions={{
                    '#': /[1-9]/,
               }}
               inputRef={ref}
               onAccept={(value) => onChange({ target: { name: props.name, value } })}
               overwrite
          />
     );
});

TextMaskPhone.propTypes = {
     name: PropTypes.string.isRequired,
     onChange: PropTypes.func.isRequired,
};

export default function phone(props) {

     const { name, label, value, onChange, error = null, required, disabled, readOnly } = props;

     return (
          <div>
          <FormControl   {...(error && { error: true })} size="small"
               // sx={{
               //      '& > :not(style)': { m: 1 },width: '80%', marginLeft: '10px'
               // }}
               >
               <InputLabel htmlFor="formatted-text-mask-input">{required ? label + ' *' : label}</InputLabel>
               <OutlinedInput
                    disabled={disabled || false}
                    value={value}
                    onChange={onChange}
                    name={name}
                    inputComponent={TextMaskPhone}
                    label={required ? label + ' *' : label}
                    {...(error && { error: true, helperText: error })}
                    inputProps={{
                         readOnly: Boolean(readOnly || false),
                    }}
               />
               {error && <FormHelperText>{error}</FormHelperText>}
          </FormControl>
          </div>
     )
}

