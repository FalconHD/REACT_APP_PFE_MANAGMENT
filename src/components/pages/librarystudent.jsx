import React from'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AppMainLeftStu from '../librarystudent/appMainLeft';
import AppMainRightStu from '../librarystudent/appMainRight';
import HeaderLibStu from '../librarystudent/headerStudent';
import '../library/library.css';
const LibraryStudent = () => {
    return ( 
        <Router>
        <div className="app-container">
      
             <HeaderLibStu />
     
        <section className="app-mainn">
         <AppMainLeftStu/>
       <AppMainRightStu/>
       
        </section>

       </div>



     </Router>
         
                 
       
    
    
    

     );
}
 
export default LibraryStudent;
