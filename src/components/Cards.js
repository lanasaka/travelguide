import React from 'react';
import './Cards.css';
import CardsItem from './CardsItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>DESTINATION DIARIES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardsItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardsItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardsItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardsItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardsItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;