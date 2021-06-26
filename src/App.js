
import './App.css';

import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/home';
import SigninPage from './components/pages/singin';
import EncadDash from './components/pages/encadrantDash';
import MainArea from './components/encadrantDash/mainArea';
import Library from './components/pages/library';
import StudDash from './components/pages/studDash';
import { lightTheme, darkTheme, GlobalStyles } from "../src/themes";
import Dashdirecteur from './components/pages/dashDirectur';
import Connection from './components/encadrantDash/connection';


function App() {

  const [theme, setTheme] = useState("light");


  return (
    <div className="App" theme={theme === "light" ? lightTheme : darkTheme}>
      <Router>
        <Route path="/" component={Home} exact />
        <Switch>
          <Route path="/singin" component={SigninPage} exact />
          <Route path="/encaddash" component={EncadDash} exact />
          <Route path="/library" component={Library} exact />
          <Route path="/studdash" component={StudDash} exact />
          <Route path="/dashdirecteur" component={Dashdirecteur} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
