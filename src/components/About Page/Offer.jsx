import React, { Component } from 'react';
import fontawesome from '../font-awesome/css/all.min.css';
import './Offer.styles.css'

const Offer = (props) => {
    var myStyle = {
        color: "#865307",
        fontSize: "4rem",
        marginBottom: "2rem"
    }
    return ( 
        <div>
            <div className='offer__container'>
                <div className='offer__data'>
                    <i className={props.icon} style={myStyle}></i>
                    <h3>{props.title}</h3>
                    <p>{ props.description}</p>
                </div>
            </div>
        </div>
     );
}
 
export default Offer;