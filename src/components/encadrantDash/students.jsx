
import React from 'react'
const Students = () => {
    return ( <div class="products-row">
    <button class="cell-more-button">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
    </button>
      <div class="product-cell image">
        <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHN0dWRlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="product"/>
        <span>Abdessamad Pas</span>
      </div>
    <div class="product-cell category"><span class="cell-label">cne:</span>KL1272</div>
    <div class="product-cell status-cell">
      <span class="cell-label">Status:</span>
      <span class="status active">Active</span>
    </div>
    <div class="product-cell sales"><span class="cell-label">Project:</span>Gestion de PFE</div>
    <div class="product-cell stock"><span class="cell-label">phone:</span>06976542364</div>
    <div class="product-cell price"><span class="cell-label">emsil:</span>lkasdf@gmail.com</div>
  </div> );
}
 
export default Students;