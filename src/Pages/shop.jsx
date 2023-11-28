import React from 'react'
import Heroo from '../Components/Hero/Heroo';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/NewCollections/NewCollections';



const shop = () => {
  return (
    <div>
      <Heroo/>
      <Popular/>
      <Offers/>
      <NewCollections />
    </div>
  )
}

export default shop;
