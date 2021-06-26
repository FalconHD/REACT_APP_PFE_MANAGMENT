import PopupTask from "../encadrantDash/popupTask"
import { useState } from "react";
const InboxStudent = () => {
  const[button,setButton]=useState(false);  
  return ( 
<div>
   <div className="containerr">



 <div className="inbox-container">
  <div className="inbox">
   <div className="msg msg-department anim-y">
   TÂCHES
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 492 492">
     <path d="M484.13 124.99l-16.11-16.23a26.72 26.72 0 00-19.04-7.86c-7.2 0-13.96 2.79-19.03 7.86L246.1 292.6 62.06 108.55c-5.07-5.06-11.82-7.85-19.03-7.85s-13.97 2.79-19.04 7.85L7.87 124.68a26.94 26.94 0 000 38.06l219.14 219.93c5.06 5.06 11.81 8.63 19.08 8.63h.09c7.2 0 13.96-3.57 19.02-8.63l218.93-219.33A27.18 27.18 0 00492 144.1c0-7.2-2.8-14.06-7.87-19.12z"></path>
    </svg>
   </div>
   <div className="msg selected-bg anim-y">
    <input type="checkbox" name="msg" id="mail1" className="mail-choice" checked/>
    <label for="mail1"></label>
    <div className="msg-content">
     <div className="msg-title">	 Méthodologies de développement :
</div>
     <div className="msg-date">22 Feb, 2019</div>
    </div>
    <img src="https://assets.codepen.io/3364143/Screen+Shot+2020-08-01+at+12.24.16.png" alt="" className="members mail-members"/>
   </div>
   <div className=" msg selected-bg  msg anim-y">
    <input type="checkbox" name="msg" id="mail2" className="mail-choice"/>
    <label for="mail2"></label>
    <div className="msg-content">
     <div className="msg-title">	Besoins fonctionnels</div>
     <div className="msg-date">22 Feb, 2019</div>
    </div>
    <img src="https://images.unsplash.com/flagged/photo-1574282893982-ff1675ba4900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" alt="" className="members mail-members"/>
   </div>
   <div className="msg selected-bg anim-y">
    <input type="checkbox" name="msg" id="mail3" className="mail-choice" checked/>
    <label for="mail3"></label>
    <div className="msg-content">
     <div className="msg-title">	Présentation du cycle de vie de développement de l’application</div>
     <div className="msg-date">22 Feb, 2019</div>
    </div>
    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=998&q=80" alt="" className="members mail-members"/>
   </div>
   <div className="msg anim-y">
    <input type="checkbox" name="msg" id="mail4" className="mail-choice"/>
    <label for="mail4"></label>
    <div className="msg-content">
     <div className="msg-title">Donner le diagramme des cas d’utilisation de chaque acteur</div>
     <div className="msg-date">22 Feb, 2019</div>
    </div>
    <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" className="members mail-members"/>
   </div>
   <div className="msg anim-y">
    <input type="checkbox" name="msg" id="mail5" className="mail-choice"/>
    <label for="mail5"></label>
    <div className="msg-content">
     <div className="msg-title"> 	Architecture globale de l’application</div>
     <div className="msg-date">22 Feb, 2019</div>
    </div>
    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" alt="" className="members mail-members"/>
   </div>
   <div className="msg anim-y">
    <input type="checkbox" name="msg" id="mail6" className="mail-choice"/>
    <label for="mail6"></label>
    <div className="msg-content">
     <div className="msg-title">	Langage de développement</div>
     <div className="msg-date">22 Feb, 2019</div>
    </div>
    <img src="https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="" className="members mail-members"/>
   </div>
   <div className="msg anim-y">
    <input type="checkbox" name="msg" id="mail7" className="mail-choice"/>
    <label for="mail7"></label>
    <div className="msg-content">
     <div className="msg-title">	Interface enseignant</div>
     <div className="msg-date">22 Feb, 2019</div>
    </div>
    <img src="https://assets.codepen.io/3364143/Screen+Shot+2020-08-01+at+12.24.16.png" alt="" className="members mail-members"/>
   </div>
   <div className="msg anim-y">
    <input type="checkbox" name="msg" id="mail8" className="mail-choice"/>
    <label for="mail8"></label>
    <div className="msg-content">
     <div className="msg-title">	Diagramme de classes</div>
     <div className="msg-date">22 Feb, 2019</div>
    </div>
    <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" className="members mail-members"/>
   </div>
  </div>










  <div className="add-task" >
   <button className="add-button" onClick={()=>setButton(true)}>Add task</button>
 </div>
 <PopupTask wewe={button} setWewe={setButton}></PopupTask>




 </div>
 <div className="mail-detail">
  <div className="mail-detail-header">
   <div className="mail-detail-profile">
    <img src="https://image.shutterstock.com/image-photo/portrait-smiling-young-college-student-260nw-1192615495.jpg" alt="" className="members inbox-detail" />
    <div className="mail-detail-name"> C.Assemar</div>
   </div>
   <div className="mail-icons">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trash-2">
     <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" /></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user">
     <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
     <circle cx="12" cy="7" r="4" /></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-tag">
     <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82zM7 7h.01" /></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-square">
     <path d="M9 11l3 3L22 4" />
     <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-paperclip">
     <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" /></svg>
   </div>
  </div>
  <div className="mail-contents">
   <div className="mail-contents-subject">
    <input type="checkbox" name="msg" id="mail20" className="mail-choice" checked/>
    <label for="mail20"></label>
    <div className="mail-contents-title">Méthodes agiles :Scrum  </div>
   </div>
   <div className="mail">
    <div className="mail-time">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clock">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" /></svg>
     12 Mar, 2019
    </div>
    <div className="mail-inside">		
Scrum :est un cadre de travail pour le développement et la maintenance de produits complexes et changeants, tout en livrant de manière productive et créative des produits de la plus grande valeur possible .Cette définition se compose des rôles, des événements et des artéfacts de Scrum. Le principe de base de Scrum est le suivant :
-Premièrement, spécifier le maximum des fonctionnalités à réaliser pour former le Backlog du produit.
-En second lieu définir les priorités des fonctionnalités et choisir lesquelles seront réalisées dans chaque itération
-Par la suite focaliser l’équipe de façon itérative sur l’ensemble de fonctionnalités à réaliser, dans des itérations appelées Sprints
</div>
    <div className="mail-assign">
     <div className="assignee">
      <strong>Chaymae Assmar</strong> assigné à rapport.
      <span className="assign-date">25 juin, 2021</span>
     </div>
     <div className="assignee">
      <strong>Chaymae Assmar</strong> ajoutée au projet.
      <span className="assign-date">18 juin, 2021</span>
     </div>
     <div className="assignee">
      <strong>Chaymae Assmar </strong> créé la tâche.
      <span className="assign-date">18 juin, 2021</span>
     </div>
    </div>
    <div className="mail-checklist">
     <input type="checkbox" name="msg" id="mail30" className="mail-choice" checked/>
     <label for="mail30">Natalie a terminé cette tâche..</label>
     <div className="mail-checklist-date">19 juin, 2021</div>
    </div>
    <div className="mail-doc">
     <div className="mail-doc-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text">
       <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
       <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" /></svg>
      <div className="mail-doc-detail">
       <div className="mail-doc-name">Scrum.docx</div>
       <div className="mail-doc-date">
ajouté le 17 juin, 2021</div>
      </div>
     </div>
     <div className="mail-doc-icons">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trash-2">
       <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" /></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-download-cloud">
       <path d="M8 17l4 4 4-4M12 12v9" />
       <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" /></svg>
     </div>
    </div>
   </div>
  </div>
  <div className="mail-textarea">
   <input type="text" placeholder="Ecrire un message..."/>
   <div className="textarea-icons">
    <div className="attach">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-paperclip">
      <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" /></svg>
    </div>
    <div className="send">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-send">
      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
    </div>
   </div>
  </div>
 </div>
  


</div>



</div>

);
}
 
export default InboxStudent;