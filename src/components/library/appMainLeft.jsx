import React from 'react';
const AppMainLeft = () => {
    return ( 
      <div class="app-main-left cards-area" >
      <div class="card-wrapper main-card">
        <a class="card cardItemjs"  onclick="openModal()">
          <div class="card-image-wrapper">
          <img src="https://blogimage.vantagecircle.com/vcblogimages/2020/08/teamwork-and-team-building.png" alt="Hotel"/>
        </div>
          <div class="card-info">
            <div class="card-text big cardText-js">Gestion des PFE</div>
            <div class="card-text small">Web App</div>
            <div class="card-text small">
              projeté par: 
              <span class="card-price"> AbdessamdPas</span>
            </div>
          </div>
          </a>
      </div>
   
    </div>

     );
}
 
export default AppMainLeft;