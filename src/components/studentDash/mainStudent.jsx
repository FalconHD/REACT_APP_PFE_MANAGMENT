
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React from 'react'

import CalenderConx from '../encadrantDash/calenderConx';
import InboxStudent from './inboxStudent';
import CalenderStudent from './calenderStudent';
import HeaderConxStudet from './headerConxStudent';
const MainStudent = () => {
    return (
        <Router>
        <div className="main-area">

<HeaderConxStudet/>
<Switch>

<div className="main-containerr">
<Route path="/studdash/connectionStudent" exact> <InboxStudent/>  </Route>

<Route path="/studdash/connectionStudent/calenderStudent" exact><CalenderStudent/> </Route>
</div></Switch>

</div>
</Router>


      );
}
 
export default MainStudent;