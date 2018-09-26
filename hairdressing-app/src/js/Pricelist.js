import React, { Component } from 'react';

const Pricelist = () => {
  return (
      <div>
          <h2 id="prislista-head">PRISLIST</h2>
          <div class="container">
            <h3>Fransar & Bryn</h3>
              <table class="table table-bordered">
                  <tbody>
                      <tr>
                        <td>Bryn Färgning</td>
                        <td>15 min 190,00 kr</td>
                      </tr>
                      <tr>
                        <td>Bryn färgning + plockning</td>
                        <td>30 min 320,00 kr</td>
                      </tr>
                      <tr>
                        <td>Bryn Färgning</td>
                        <td>15 min 190,00 kr</td>
                      </tr>
                      <tr>
                        <td>Bryn plockning</td>
                        <td>15 min 180,00 kr</td>
                      </tr>
                      <tr>
                        <td>Fransfärgning</td>
                        <td>20 min 180,00 kr</td>
                      </tr>
                      <tr>
                        <td>Fransfärgning + Bryn färgning + plockning</td>
                        <td>45 min 490,00 kr</td>
                      </tr>
                  </tbody>
                </table>
                <h3>Färgning</h3>
              <table class="table table-bordered">
                  <tbody>
                      <tr>
                        <td>Botten Färgning</td>
                        <td>60 min 590,00 kr</td>
                      </tr>
                      <tr>
                        <td>Färgning Kort hår</td>
                        <td>60 min 650,00 kr</td>
                      </tr>
                      <tr>
                        <td>Färgning Långt hår</td>
                        <td>90 min 790,00 kr</td>
                      </tr>
                      <tr>
                        <td>Slingor Kort hår</td>
                        <td>90 min 790,00 kr</td>
                      </tr>
                      <tr>
                        <td>Slingor Lånt hår</td>
                        <td>120 min 990,00 kr</td>
                      </tr>
                  </tbody>
                </table>
                <h3>Klippning</h3>
                <table class="table table-bordered">
                  <tbody>
                      <tr>
                        <td>Botten Färgning</td>
                        <td>60 min 590,00 kr</td>
                      </tr>
                      <tr>
                        <td>Färgning Kort hår</td>
                        <td>60 min 650,00 kr</td>
                      </tr>
                      <tr>
                        <td>Färgning Långt hår</td>
                        <td>90 min 790,00 kr</td>
                      </tr>
                      <tr>
                        <td>Slingor Kort hår</td>
                        <td>90 min 790,00 kr</td>
                      </tr>
                      <tr>
                        <td>Slingor Lånt hår</td>
                        <td>120 min 990,00 kr</td>
                      </tr>
                  </tbody>
                </table>
            <h3>Klipning and färgning</h3>
            <table class="table table-bordered">
                <tbody>
                  <tr>
                    <td>Permanent + Klippning Kort hår</td>
                    <td>120 min 990,00 kr</td>
                  </tr>
                  <tr>
                    <td>Permanent + Klippning Långt hår</td>
                    <td>135 min 1.250,00 kr</td>
                  </tr>
                </tbody>
              </table>
              <h3>Permanent & Klipning</h3>
            <table class="table table-bordered">
                <tbody>
                  <tr>
                    <td>Permanent + Klippning Kort hår</td>
                    <td>120 min 990,00 kr</td>
                  </tr>
                  <tr>
                    <td>Permanent + Klippning Långt hår</td>
                    <td>135 min 1.250,00 kr</td>
                  </tr>
                </tbody>
              </table>
              <h3>Uppsättning & Tvätt & Fön</h3>
            <table class="table table-bordered">
                <tbody>
                  <tr>
                    <td>Tvätt + Fön - Kort hår</td>
                    <td>30 min 290,00 kr</td>
                  </tr>
                  <tr>
                    <td>Tvätt + Fön - Lånt hår</td>
                    <td>30 min 350,00 kr</td>
                  </tr>
                </tbody>
              </table>
          </div>
       </div> 
   )
  }

  export default Pricelist;