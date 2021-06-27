import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Form from "./components/Form";
import Auth from "./components/Auth";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Form />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
