 import React, { Component } from 'react';
 import { Button,  ImageBackground,  StyleSheet } from 'react-bootstrap';
 //import BackgroundImage from 'react-background-image-loader';

 const Home = () => {
    return (
        <div>
             <h1>Home...</h1>
             <img src={require('../images/image1.jpg')} />
             <p>Välkommen in för en avkopplande stund och unna dig lite egentid!</p>
                <p>På <strong>Nimas Salong</strong>. Kan vi hjalpa dig med allt som rör ditt hår vara erfarna frisörer lyssnar gärna på dina önskemål och utgår efter ditt behov. </p>
                <button type="button" class="btn btn-primary">Home</button>
                    <footer id="footer-ninas-salong">
                    <p id="p-footer-NinasSalong">Copyright &copy; Haydee Arbieto 0722 18 99 18</p>
                </footer> 
          </div>
    )
  }

  export default Home;