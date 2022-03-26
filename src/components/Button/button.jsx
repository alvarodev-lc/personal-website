import React from "react";
import './button.min.css'

const STYLES = [
    'c-btn-primary',
    'c-btn-outline',
]

const SIZES = [
    'c-btn-medium',
    'c-btn-large',
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
}) =>{
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return(
        <button className={`c-btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}
