import React, { Component, useState, useEffect } from 'react';
import FavSlider from './FavSlider.jsx';
import ListFavs from './ListFavs.jsx';

const Profile = () => {
  console.log('rendering Profile to page')
  
  return (
    <>
      <h2>My Favorites</h2>
      <ListFavs
        qty = {10}
      />
    </>
  )
}

export default Profile;
