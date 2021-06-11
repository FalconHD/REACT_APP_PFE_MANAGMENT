
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React from 'react'

import CalenderConx from './calenderConx';
import Inbox from './inbox';
import HeaderConx from './headerConx';
const MainArea = () => {
    return ( 
     <Router>
             <div className="main-area">

     <HeaderConx/>
  
  
  
     

<Switch>

   <div className="main-containerr">
<Route path="/encaddash/connection" exact> <Inbox/>  </Route>
   
<Route path="/encaddash/connection/calender" exact><CalenderConx/> </Route>
 </div></Switch>

</div>
</Router>

    
    
     );
}
 
export default MainArea;