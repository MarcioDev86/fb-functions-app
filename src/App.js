import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import Error from "./pages/Error";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pageone" component={PageOne} />
          <Route exact path="/pagetwo" component={PageTwo} />
          <Route exact path="/pagethree" component={PageThree} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
