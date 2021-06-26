import React from'react'
const HeaderLibStu = () => {
    return ( 
      <section className="app-actionss">
      <div className="app-actions-linee">
        <div className="search-wrappeer">
      
          <input type="text" className="search-inputtt" placeholder="taper votre projet"/>
          <button className="search-btn">Rechercher un projet</button>
        </div>
     
        <div className="app-actions-line filter-line">
        <div className="filter-action-buttons">
          <button className="filter-btn">
          <div className="filter-icon">
            <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          </div>
          <span className="filter-text">Lun,Nov 10-Mar,Nov 22</span>
        </button>
        <button className="filter-btn">
          <div className="filter-icon">
            <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-book"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          </div>
          <span className="filter-text">Filiere</span>
        </button>
      
   
        <button className="filter-btn more">
          <div className="filter-icon">
            <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-sliders" viewBox="0 0 24 24">
              <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>
            </svg>
          </div>
          <span className="filter-text">Suite</span>
        </button>
        
     
        </div>
      </div>  </div>
  
    </section>
     );
}
 
export default HeaderLibStu;