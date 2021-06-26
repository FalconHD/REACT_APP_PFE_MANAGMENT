
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react'

import CalenderConx from './calenderConx';
import Inbox from './inbox';
import HeaderConx from './headerConx';
const MainArea = (props) => {
     console.log(props.group);
     return (
          <Router>
               <div className="main-area">
                    <HeaderConx />
                    <Switch>
                         <div className="main-containerr">
                              <Route path="/encaddash/connection/" exact> <Inbox group={props.group} />  </Route>
                              <Route path="/encaddash/connection/calender" exact><CalenderConx group={props.group} /> </Route>
                         </div>
                    </Switch>
               </div>
          </Router>
     );
}

export default MainArea;