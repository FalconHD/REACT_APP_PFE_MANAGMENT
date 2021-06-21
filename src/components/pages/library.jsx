import React from'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AppMainLeft from '../library/appMainLeft';
import AppMainRight from '../library/appMainRight';
import HeaderLib from '../library/header';
import '../library/library.css';
const Library = () => {
    return ( 
        <Router>
        <div className="app-container">
      
             <HeaderLib />
     
        <section className="app-mainn">
         <AppMainLeft/>
       <AppMainRight/>
       
        </section>

       </div>



     </Router>
         
                 
       
    
    
    

     );
}
 
export default Library;
