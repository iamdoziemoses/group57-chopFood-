import React, { Component } from 'react';
import Button from '../Button';
import './Form.styles.css';
 
const Form = () => {
    return ( 
        <div>
            <form className='form-group'>
                <div className='myform'>
                <div className='form'>
                    <label>NAME</label><br/>
                    <input type='text' placeholder='enter your full name'/>
                </div>

                <div className='form form-email'>
                    
                    <label>EMAIL</label><br/>
                    <input type='email' placeholder='enter your mail'/>
                </div>
                
                </div>
                <div className='form'>
                    <label>MESSAGE</label><br/>
                    <input type='text' placeholder='Hi there'/>
                </div>

                
                <div className='form'>
                    <Button text='SUBMIT' fontSize='15' backgroundColor='#f1f1f1' color='#865307'/>
                </div>
            </form>
        </div>
     );
}
 
export default Form;