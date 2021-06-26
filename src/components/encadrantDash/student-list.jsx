import React from 'react';
import Students from './students'
const ListStudents = () => {
    return ( 
        <div class="main-area">
        <div class="headerr">
         
         <div class="app-content-header">
                   <h1 class="app-content-headerText">Étudiants</h1>
                  
                 </div>
        </div>
        <div class="main-container">
         
    
          
           <div class="app-containerr">
   
               <div class="app-contente">
               
               
                 <div class="products-area-wrapper tableView">
                   <div class="products-header">
                     <div class="product-cell image">
                     Nom et prénom


                        <button class="sort-button">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users">
                           <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                           <circle cx="9" cy="7" r="4"></circle>
                           <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                           <path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </button>
                     </div>
                     <div class="product-cell category">CNE<button class="sort-button">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-hash">
                           <line x1="4" y1="9" x2="20" y2="9"></line>
                           <line x1="4" y1="15" x2="20" y2="15"></line>
                           <line x1="10" y1="3" x2="8" y2="21"></line>
                           <line x1="16" y1="3" x2="14" y2="21"></line></svg>                    </button></div>
                     <div class="product-cell status-cell">Statut<button class="sort-button">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="w-5 h-5" fill="currentColor"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path></svg>
                       </button></div>
                     <div class="product-cell sales">Projet <button class="sort-button">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">
                           <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                           </svg>                    </button></div>
                     <div class="product-cell stock">Téléphoner<button class="sort-button">
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
                       </button></div>
                     <div class="product-cell price">E-mail<button class="sort-button">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-inbox" viewBox="0 0 24 24">
                           <path d="M22 12h-6l-2 3h-4l-2-3H2"></path>
                           <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                         </svg>                    </button></div>
                   </div>
                 <Students/>
                 <Students/>
                 <Students/>
                 <Students/>
                 <Students/>
                 <Students/>
                 <Students/>
                 <Students/>
                 <Students/>
                 <Students/>
                 <Students/>




                 
                 
                  </div>
               </div>
             </div>
       
          
         </div>
        </div>
       
     );
}
 
export default ListStudents;