import React from 'react'
import CardItem from './CardItem';
import './Cards.css';
import waterfallImage from '../assets/waterfall.jpeg';
import bonfireImage from '../assets/bonfire.jpeg';
import catImage from '../assets/cat.jpeg';

function Cards() {
  return (
    <div className='cards'>
       <h1>Check these epic destinations!</h1>
       <div className='cards__container'>
         <div className='cards__wrapper'>
            <ul className='cards__items'>
                 <CardItem 
                 src={waterfallImage}
                 text='Explore the hidden waterfall deep inside the Aberdare Ranges in Kenya'
                 label='Adventure'
                 path='/services'/>
                 <CardItem 
                 src={bonfireImage}
                 text="Uwinding with friends in nature's lap"
                 label='Sunset hangouts'
                 path='/services'/>               
             </ul> 
                   <ul  className='cards__items'>     
                 <CardItem 
                 src={waterfallImage}
                 text='Explore the hidden waterfall deep inside the Aberdare Ranges in Kenya'
                 label='Adventure'
                 path='/services'/>
                 <CardItem 
                 src={bonfireImage}
                 text="Uwinding with friends in nature's lap"
                 label='Sunset hangouts'
                 path='/products'/>
                  <CardItem 
                 src={catImage}
                 text="Uwinding with friends in nature's lap"
                 label='Sunset hangouts'
                 path='/sign-up'/>
                </ul> 
           
         </div>
       </div>
    </div>
  )
}

export default Cards;
