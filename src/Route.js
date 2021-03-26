import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import ViewDetails from "./viewDetails";
import App from "./App";

function Apps() {
  return (
    <Router>
      <div>
        {/* <nav>
      <ul>
        <li><Link to={'/App'} className="nav-link"> User Details </Link></li>
        <li><Link to={'/viewDetails'} className="nav-link"> View Details</Link></li>
      </ul>
      </nav>
      <hr /> */}
        <Switch>
          <Route exact path="/">
            <Redirect to="/App" />
          </Route>
          <Route path="/App" component={App} />
          <Route path="/viewDetails" component={ViewDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default Apps;
