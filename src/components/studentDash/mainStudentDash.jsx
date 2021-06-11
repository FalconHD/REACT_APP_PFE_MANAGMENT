import React from 'react';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';

import PageContent from './pagecontent';
import RightBar from './rightBar';

const MainDash = () => {
    return ( 
      <Router>
      
      <div className="task-managerrr">

      <PageContent/>
      <RightBar/>
      </div>

      </Router>

     );
}
 
export default MainDash;