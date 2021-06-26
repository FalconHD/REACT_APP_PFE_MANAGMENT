

import React,{useState} from 'react';
import {Link} from 'react-router-dom';

const HeaderEnDashh = () => {
  const[showModal,setShowModal]=useState(false)

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

    return (  
      <div class="app-header">
       <div class="app-header-left">
        <span class="app-icon"></span>
        <Link to="/"><p class="app-name">Mon Projet</p></Link>
        <div class="search-wrapper">
          <input class="search-input" type="text" placeholder="Rechercher"/>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-search" viewBox="0 0 24 24">
            <defs></defs>
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.35-4.35"></path>
          </svg>
        </div>
      </div>
       <div class="app-header-right">
        <button class="mode-switch" title="Switch Theme" onClick={() => themeToggler()}>
          <svg class="moon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="24" height="24" viewBox="0 0 24 24">
            <defs></defs>
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
          </svg>
        </button>




        <button class="add-btn" title="Add New Project" >
          <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" /></svg>
        </button>
    







        <button class="notification-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
        </button>
        <button class="profile-btn">
          <img src="https://image.flaticon.com/icons/png/512/2503/2503707.png" />
          <span>Directeur</span>
        </button>
      </div>
     
    </div>
    );
}

export default HeaderEnDashh;