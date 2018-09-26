import React, { Component } from 'react';

 const Galeri = () => {
    return (
        <div>
             <h1>Galeri</h1>
             <p>Här kan du se alla bilder...</p> 
             <img src={require('../images/picture3.jpg')} />
          </div>
    )
  }

  export default Galeri;