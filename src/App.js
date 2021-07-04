import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from "react";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Projects from "./components/projects/projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route path="/" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
