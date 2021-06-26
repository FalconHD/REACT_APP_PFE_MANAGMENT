import React from 'react';
import ModalLibrary from '../encadrantDash/modallibrary';
import { useState } from 'react';

const AppMainLeftStu = (props) => {
  const [openModalL, setOpenModalL] = useState(false)

  
    return ( 
     
      <div class="app-main-left cards-area" >
      <div class="card-wrapper main-card" >
        <button class="card cardItemjs"  onClick={()=>{setOpenModalL(true);}}>
          <div class="card-image-wrapper">
          <img src="https://blogimage.vantagecircle.com/vcblogimages/2020/08/teamwork-and-team-building.png" alt="Hotel"/>
        </div>
          <div class="card-info">
            <div class="card-text big cardText-js">Gestion des PFE</div>
            <div class="card-text small">Web App</div>
            <div class="card-text small">
              projeté par: 
              <span class="card-price"> Abdessamad Aalouwan</span>
            </div>
          </div>
          
         
    
          </button>

          
     
    </div> 
    <div class="card-wrapper main-card" >
        <button class="card cardItemjs"  onClick={()=>{setOpenModalL(true);}}>
          <div class="card-image-wrapper">
          <img src="	https://www.academiepro.com/uploads/projets/2015_08_22_sabrin.jpg" alt="Hotel"/>
        </div>
          <div class="card-info">
            <div class="card-text big cardText-js">Application de gestion des enseignants
</div>
            <div class="card-text small">Web App</div>
            <div class="card-text small">
              projeté par: 
              <span class="card-price"> Imane Pas</span>
            </div>
          </div>
          
         
    
          </button>

          
     
    </div> 
    <div class="card-wrapper main-card" >
        <button class="card cardItemjs"  onClick={()=>{setOpenModalL(true);}}>
          <div class="card-image-wrapper">
          <img src="https://www.academiepro.com/uploads/projets/2015_07_14_mobile.png" alt="Hotel"/>
        </div>
          <div class="card-info">
            <div class="card-text big cardText-js"> Application de Gestion Flux Financiers</div>
            <div class="card-text small">Web App</div>
            <div class="card-text small">
              projeté par: 
              <span class="card-price">saad ouzrai</span>
            </div>
          </div>
          
         
    
          </button>

          
     
    </div> 
    <div class="card-wrapper main-card" >
        <button class="card cardItemjs"  onClick={()=>{setOpenModalL(true);}}>
          <div class="card-image-wrapper">
          <img src="https://www.academiepro.com/uploads/projets/2014_12_29_Untitled-1.png" alt="Hotel"/>
        </div>
          <div class="card-info">
            <div class="card-text big cardText-js"> Client VoIP/SIP RATP</div>
            <div class="card-text small">une application mobile </div>
            <div class="card-text small">
              projeté par: 
              <span class="card-price"> Amine lqirch</span>
            </div>
          </div>
          
         
    
          </button>

          
     
    </div> 
    <div class="card-wrapper main-card" >
        <button class="card cardItemjs"  onClick={()=>{setOpenModalL(true);}}>
          <div class="card-image-wrapper">
          <img src="https://www.academiepro.com/uploads/projets/2014_12_30_4.png" alt="Hotel"/>
        </div>
          <div class="card-info">
            <div class="card-text big cardText-js">Boutique en ligne php PFE</div>
            <div class="card-text small">Web App</div>
            <div class="card-text small">
              projeté par: 
              <span class="card-price"> AbdessamdPas</span>
            </div>
          </div>
          
         
    
          </button>

          
     
    </div> 
    <div class="card-wrapper main-card" >
        <button class="card cardItemjs"  onClick={()=>{setOpenModalL(true);}}>
          <div class="card-image-wrapper">
          <img src="https://www.academiepro.com/uploads/projets/2015_07_14_comer.jpg" alt="Hotel"/>
        </div>
          <div class="card-info">
            <div class="card-text big cardText-js">Création d’un site web dynamique d'hotel</div>
            <div class="card-text small">Web App</div>
            <div class="card-text small">
              projeté par: 
              <span class="card-price"> AbdessamdPas</span>
            </div>
          </div>
          
         
    
          </button>

          
     
    </div> 
    {/* <ModalLibrary
    openModalL={openModalL}
    setOpenModalL={setOpenModalL}
    >

    </ModalLibrary> */}
   
    

<ModalLibrary trigger={openModalL} setTrigger={setOpenModalL}>

</ModalLibrary>


  
       
    
    
    </div>

     );
}
 
export default AppMainLeftStu;