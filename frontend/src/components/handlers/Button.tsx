import React from 'react'
import MUIButton, { ButtonProps } from "@mui/material/Button"

interface Props extends ButtonProps { }

const Button: React.FC<Props> = (props) => {
    const { className = "ct-button", ...restProps } = props;

    return (
        <MUIButton {...restProps} className={className} />
    )
}

export default Button;
