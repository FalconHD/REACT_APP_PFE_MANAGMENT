const ModalLibrary = (props) => {
  return (props.trigger)?(
    <div id="modal-window" className ="shadow hideModal showModal">
        <div className="main-modal" >
          <div className="modal-left">
            <div className="modal-image-wrapper">
              <img src="https://blogimage.vantagecircle.com/vcblogimages/2020/08/teamwork-and-team-building.png"/>
            </div>
            <div className="modal-info-header">
              <div className="left-side">
                <h1 className="modalHeader-js"></h1>
                <p>Section</p>
              </div>
              <div className="right-side">
                projeté par:
                <span className="amount">AbdessamdPas</span>
              </div>
            </div>
            <div className="info-bar">
              <div className="info-wrapper">
                <div className="info-icon">
                  <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                </div>
                <span>MI</span>
              </div>
              
              <div className="info-wrapper">
                <div className="info-icon">
                  <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg>
                </div>
                <span>Web App</span>
              </div>
              <div className="info-wrapper">
                <div className="info-icon">
                  <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-shield"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <span>Hautement sécurisé</span>
              </div>
            </div>
            <div className="desc-wrapper">
              <div className="modal-info-header">
                <h1>Description</h1>
                <p>
                Chaque année, et pour chaque filière, les étudiants de la faculté des sciences et techniques d’Alhoceima réalisent des projets de fin d'année en groupe (binôme, trinôme…) Sous l'encadrement d'un professeur et commettant des étudiants de la filière MI on a suggéré de créer une application web qui va faciliter au chef de département le suivie du projet de chaque binôme avec son encadrant et pour gérer la relation entre l’étudiant et son encadrant toute au long de la période d’encadrement soit au niveau des rendez-vous soit au niveau des comptes rendus. Cette plateforme est destinée pour tous les étudiants de la faculté ayant un projet de fin d’année.                </p>
              </div>
              <div className="desc-actions">
                <button className="btn-book">Telecharger </button>
                <div className="add-favourite">
                  <input type="checkbox" id="favourite"/>
                  <label for="favourite">
                    <span className="favourite-icon">
                      <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>  
                      </span>
                    <span>Ajouter aux Favoris</span>
                  </label>
                </div>
              </div>
            </div>
            </div>
           <div className="modal-right">
             <div className="app-main-right-header">
              <span>Commentaires</span>
              <a href="#">Voir tout</a>
            </div>
             <div className="card-wrapper">
               <div className="card">
                 <div className="profile-info-wrapper">
                   <div className="profile-img-wrapper">
                     <img src="https://source.unsplash.com/featured/1200x900/?woman,cool" alt="Review"/>
                   </div>
                   <p>Imane Pas</p>
                 </div>
                 <p>Le meilleur projet pour l'année 2021</p>
               </div>
            </div>
            <div className="card-wrapper">
               <div className="card">
                 <div className="profile-info-wrapper">
                   <div className="profile-img-wrapper">
                     <img src="https://source.unsplash.com/featured/1200x900/?woman,cool" alt="Review"/>
                   </div>
                   <p>yousef  Pas</p>
                 </div>
                 <p>Le meilleur projet pour l'année 2021</p>
               </div>
            </div>
            <div className="card-wrapper">
               <div className="card">
                 <div className="profile-info-wrapper">
                   <div className="profile-img-wrapper">
                     <img src="https://source.unsplash.com/featured/1200x900/?woman,cool" alt="Review"/>
                   </div>
                   <p>othman Pas</p>
                 </div>
                 <p>Le meilleur projet pour l'année 2021</p>
               </div>
            </div>
      
           </div>
          <button className="btn btn-close"  onClick={()=>{props.setTrigger(false);}} >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          </div>    
      </div>
      ):"";
}
 
export default ModalLibrary;