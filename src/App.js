import React from 'react';
import { Route, Switch } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/resume" component={Resume} />
      </Switch>
    </div>
  );
}

export default App;
