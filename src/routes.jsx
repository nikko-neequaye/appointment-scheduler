import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Scheduler from "./views/schedulerContainer";


const Routes = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/scheduler" component={Scheduler}/>
      </Switch>
    </div>
    </Router>
    );

    export default Routes;
