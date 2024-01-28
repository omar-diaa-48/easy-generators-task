import React from 'react'
import { Controller, useFormContext } from "react-hook-form";
import TextField, { OutlinedTextFieldProps } from "@mui/material/TextField";

interface Props extends OutlinedTextFieldProps {
    name: string;
    label: string;
    type?: 'text' | 'password';
    variant: 'outlined';
}

const TextFieldInput: React.FC<Props> = (props) => {
    const { name, label, variant = 'outlined', type = 'text' } = props;

    const methods = useFormContext();
    const { control } = methods;

    return (
        <Controller
            name={name}
            control={control}
            render={({
                field,
                fieldState: { error },
            }) => (
                <TextField
                    helperText={error ? error.message : null}
                    size="small"
                    error={!!error}
                    fullWidth
                    label={label}
                    type={type}
                    variant={variant}
                    autoComplete='off'
                    {...field}
                />
            )}
        />
    )
}

export default TextFieldInput;