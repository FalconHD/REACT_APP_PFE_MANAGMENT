import React from 'react';
const AppMainRight = () => {
    return ( 
      <div class="app-main-right cards-area">
      <div class="app-main-right-header">
        <span>Latest Deals</span>
        <a href="#">See More</a>
      </div>
      <div class="card-wrapper main-card">
        <a class="card cardItemjs"  onclick="openModal()">
          <div class="card-image-wrapper">
          <img src="https://blogimage.vantagecircle.com/vcblogimages/2020/08/teamwork-and-team-building.png"/>
        </div>
          <div class="card-info">
            <div class="card-text big cardText-js">Gestion de PFE</div>
            <div class="card-text small">Web App</div>
            <div class="card-text small">
            projeté par:
              <span  class="card-price"> AbdessamdPas</span>
            </div>
          </div>
        </a>
      </div>
    
    </div>
     );
}
 
export default AppMainRight;