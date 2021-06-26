import React from 'react'
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import ConnectionStudent from '../studentDash/connectionStud';
import HeaderStud from '../studentDash/headerStud';
import MainDash from '../studentDash/mainStudentDash';
import SideBarStudent from '../studentDash/sideBarStudent';
import '../studentDash/studentDash.css';
import ToDoPage from '../studentDash/todoPage';
import LibraryStudent from '../pages/librarystudent';
import Video from '../pages/vidio'
import SettingStudent from '../studentDash/settingStudent'


const StudDash = () => {
    return ( 
        <Router>
        <div className="app-container">

            <HeaderStud/>
            <div className="container">

                <SideBarStudent/>
            <Switch>
                    <Route path="/studdash" exact>
                      <MainDash/>
                    </Route>
                    <Route path="/studdash/connectionStudent" exact>
                       <ConnectionStudent/>

                    </Route>
                    <Route path="/studdash/todo" exact> 

                    <ToDoPage/>

                    </Route>
                    <Route path="/studdash/libraryStudent">
                            <LibraryStudent/>
                             </Route>

                    <Route path="/studdash/video">  
              <Video/>
               </Route>
               <Route path="/studdash/settingStudent">  
              <SettingStudent/>
               </Route>
            </Switch>
            </div>
        </div>
    </Router>

     );
}
 
export default StudDash
;