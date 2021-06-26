import React from 'react';

function Cvideo() {
    return (
         
        <div className='c-video'>
        <header>
          <button className='c-video-back'><i className="fas fa-chevron-left"></i></button>
          <h1>Présentation de notre salle de chat</h1>
          <span><i aria-hidden="true" className="fas fa-user-friends"></i>Groupe</span>
          
        </header>
        <div className="wewe0">
        <div className='c-video-information'>
          <div className='c-video-invited'>
            <div className='c-video-invited__attendees'>Invité à appeler: <span>6</span></div>
            <div className='c-video-invited__absentees'>Personnes absentes : <span>2</span></div>
          </div>
          <button>Ajouter un utilisateur à l'appel</button>
          
        </div>
        
        <div className='c-webcam'>
          <div className='c-webcam-container'>
            <div className='c-webcam-organisor'>
              <img src='https://i.pravatar.cc/50?img=5'/>
              <div>
                <span>Mi etudiant</span>
                <p>Imane</p>
              </div>
            </div>
            
            <div className='c-webcam-inchat'>
               <img src='https://i.pravatar.cc/80?img=3'/>
               <img src='https://i.pravatar.cc/80?img=5'/>
               <img src='https://i.pravatar.cc/80?img=10'/>
               <img src='https://i.pravatar.cc/80?img=4'/>
            </div>
            
            <div className='c-webcam__video-controls'>
              <ul>
                <li><button className='c-control'><i className="fas fa-expand-arrows-alt"></i></button>
                </li>
                <li><button className='c-control'><i className="fas fa-microphone-alt-slash"></i></button></li>
                <li><button className=' c-control--end-call c-join'><i className="fas fa-phone"></i></button></li>
                <li><button className='c-control'><i className="fas fa-video"></i></button></li>
                <li><button className='c-control'><i className="fas fa-cog"></i></button></li>
              </ul>
            </div>
            
          <div className='c-webcam__video'><video autoplay="true" id="c-stream">
      
      </video></div>
          </div>
        </div></div>
     
      </div>
    );
}

export default Cvideo;