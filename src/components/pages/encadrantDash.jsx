import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderEnDash from '../encadrantDash/header'
import '../encadrantDash/encadDash.css';
import ProjectSection from '../encadrantDash/projectSection';
import MessageSection from '../encadrantDash/messageSection';
import MainContent from '../encadrantDash/main-content';
import ListStudents from '../encadrantDash/student-list';
import Connection from '../encadrantDash/connection';
import SettingEncad from '../encadrantDash/settingEncad';
import Appsidebare from '../encadrantDash/app-sidebar';
import Video from './vidio';
import Library from './library';


const EncadDash = () => {
    return (
        <Router>

            <div className="app-container">

                <HeaderEnDash />


                <div className="container">



                    <Appsidebare />



                    <Switch>

                        <Route path="/encaddash" exact >
                            <MainContent />
                        </Route>

                        <Route path="/encaddash/studentList" exact>
                            <ListStudents />
                        </Route>
                        <Route path="/encaddash/connection/" >
                            <Connection />
                        </Route>

                        <Route path="/encaddash/library">
                            <Library /> </Route>

                            <Route path="/encaddash/video">  
              <Video/>
               </Route>
                        <Route path="/encaddash/settingEncad">
                            <SettingEncad /> </Route>

                    </Switch>

                </div></div>



        </Router>

    );
}

export default EncadDash;