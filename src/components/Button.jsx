import React, { Component } from 'react';
import './Button.styles.css';

const Button = (props) => {
    const myStyle = {
        backgroundColor: props.backgroundColor,
        border: 'none',
        marginTop: '20px',
        padding: '14px 18px',
        color: props.color,
        fontSize: props.fontSize,
        fontWeight: 'bold',
        borderRadius: '5px',
        cursor: 'pointer',
        textAlign: props.textAlign
    }

    return ( 
        <div>
            <button style={myStyle}>{props.text}</button>
        </div>
     );
}
 
export default Button;