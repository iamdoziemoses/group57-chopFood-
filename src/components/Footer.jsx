import React, { Component } from 'react';

const Footer = () => {
    const myStyle = {
        backgroundColor: '#000',
        color: '#f1f1f1',
        textAlign: 'center',
        padding: '2rem'
    }
    return ( 
        <div style={myStyle}>
            <h2>&copy; 2022</h2>
        </div>
     );
}
 
export default Footer;