import React, { Component } from 'react';
import './product-list.styles.css';

const ProductList = (props) => {
    return ( 
        <div>
            <div>
                <div className='product-list'>
                    <img src={props.image} width={400} height={300} />
                    <div className='label-container'>
                        <h2>{props.name}</h2>
                        <p>{props.price}</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
export default ProductList;