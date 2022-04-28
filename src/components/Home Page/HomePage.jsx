import React, { Component } from 'react';
import Button from '../Button';
import sweetFood from '../images/sweet-food.jpg';
import Offer from '../About Page/Offer';

const HomePage = () => {
    return ( 
        <div>
        <section className='about'>
            <div className='about__intro'>
                <h1 className='about__title'>Chop Arena</h1>
                <p className='about__description'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,</p>
            </div>

            <div className='about__our-story'>
                <div className='about__our-storyImg'>
                    <img src={sweetFood} width={500} height={580}/>
                </div>

                <div className='about__our-storydata'>
                    <h1>Our Story</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias excepturi iusto hic ipsam quod voluptates.
                        Libero delectus doloremque, rem ea aliquid blanditiis aperiam reiciendis, numquam necessitatibus vitae, animi quidem.
                        Vitae. ipsum dolor sit amet consectetur adipisicing elit. Id, voluptate veritatis in sapiente nihil nulla provident
                        laboriosam praesentium eveniet nobis aperiam, temporibus alias autem totam! Neque amet sequi aliquid vero!</p>
                    <p className='about__our-storydesp2'>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                    <h4>Okafor Stephen</h4>

                    <Button text='LEARN MORE' fontSize='15px' backgroundColor='#865307' color='#f1f1f1'/>
                </div>
            </div>
            <div className='service section'>
            <h2 className='service__small'>FEATURES</h2>
                <h2 className='service__title'>What We Offer</h2>
            <div className='offer__section'>
                <Offer
                    icon='fa fa-calendar'
                    title='Daily Fresh Menu'
                    description='Phasellus ac massa justo. Pellentesque porttitor, ex nec dignissim congue, ex enim fermentum nunc, quis sagittis velit.'
                />
                <Offer
                    icon='fa fa-pepper-hot'
                    title='Fresh Ingredients'
                    description='Phasellus ac massa justo. Pellentesque porttitor, ex nec dignissim congue, ex enim fermentum nunc, quis sagittis velit.'
                />
                <Offer
                    icon='fa fa-thumbs-up'
                    title='Tasty Meals'
                    description='Phasellus ac massa justo. Pellentesque porttitor, ex nec dignissim congue, ex enim fermentum nunc, quis sagittis velit.'
                />
                <Offer
                    icon='fa fa-ice-cream'
                    title='Creative Chefs'
                    description='Phasellus ac massa justo. Pellentesque porttitor, ex nec dignissim congue, ex enim fermentum nunc, quis sagittis velit.'
                />
                <Offer
                    icon='fa fa-hamburger'
                    title='Authentic Cuzzine'
                    description='Phasellus ac massa justo. Pellentesque porttitor, ex nec dignissim congue, ex enim fermentum nunc, quis sagittis velit.'
                />
                <Offer
                    icon='fa fa-bacon'
                    title='Home Roasted Coffee'
                    description='Phasellus ac massa justo. Pellentesque porttitor, ex nec dignissim congue, ex enim fermentum nunc, quis sagittis velit.'
                    />
             </div>
            </div>
        </section>
    </div>

     );
}
 
export default HomePage;