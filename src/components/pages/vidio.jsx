import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React from 'react'
import Cvideo from './videoRoom/cvidio'
import Cchat from './videoRoom/cchat';
import '../pages/videoRoom/css.css';
function Video() {
    return (
     
        <Router>
          <div className="c-main">   

           <Cvideo/> 
           <Cchat/>
          </div>

        </Router>
    
        
    )
}

export default Video;
