import React, { Component } from 'react';
import ProductList from './ProductList';
import Button from '../Button';
import beans from '../images/chopfood-beans.jpg';
import coconutrice from '../images/chopfood-coconut-rice.jpg';
import eggsauce from '../images/chopfood-egg__sauce.webp';
import okasi from '../images/chopfood-okasi.jpg';
import jellofrice from '../images/jellofrice.jpg';
import eguisi from '../images/chopfood-eguisi-soup.webp';
import './Product.styles.css';

const Products = () => {
    return ( 
        <div>
           <div className='about__intro'>
            <h1 className='about__title'>Our Sweet Dishes</h1>
            <p className='about__description'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architectoeaque ipsa quae ab illo inventore.</p>
                </div>
            <section className='product section'>
                <ProductList
                    image={jellofrice}
                    name='Jellof Rice'
                    price='$39'
                />

                <ProductList
                image={eggsauce}
                name='Egg Sauce'
                price='$48'
                />
                
            <ProductList
            image={eguisi}
            name='Eguisi Soup'
            price='$69'
        />
            <ProductList
                image={okasi}
                name='Okasi Soup'
                price='$19'
            />
                
            <ProductList
            image={beans}
            name='Beans'
            price='$15'
        />
        <ProductList
        image={coconutrice}
        name='Coconut Rice'
        price='$20'
                />
            </section>
            <div className='btn'>
                <Button text='ORDER NOW' fontSize='20px' backgroundColor='#865307' color='#f1f1f1'/>
            </div>
        </div>
     );
}
 
export default Products;