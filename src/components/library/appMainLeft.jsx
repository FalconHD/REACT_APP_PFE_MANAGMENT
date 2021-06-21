import React from 'react';
import ModalLibrary from '../encadrantDash/modallibrary';
import { useState } from 'react';

const AppMainLeft = (props) => {
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
 
export default AppMainLeft;