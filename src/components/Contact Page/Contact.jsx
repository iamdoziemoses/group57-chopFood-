import React, { Component } from 'react';
import Form from './Form';
import './Contact.styles.css';

const Contact = () => {
    return ( 
        <div className='contact section'>
            <div className='contact__intro'>
                <h2>Let's talk</h2>
                <p>Ask us anything or just say hi..</p>
                <div className='tel'>
                    <i className='fa fa-phone icon'></i>
                    <a href='+234 813 234 9116'>+234 813 234 9116</a>
                </div>
                <div className='location'>
                    <i className='fa fa-address-card icon'></i>
                    <p>14, Sadiku Street</p>
                </div>
            </div>
            <Form/>
        </div>
     );
}
 
export default Contact;