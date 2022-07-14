import React, { Component, useState, useEffect } from 'react';

const Profile = () => {
  return (
    <>
      <h2>My Favorites</h2>
      <FavSlider 
        qty = {10}
      />
    </>
  )
}

export default Profile;
