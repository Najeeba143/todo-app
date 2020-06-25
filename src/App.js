import React from 'react';
// import logo from './logo.svg';
import './App.css';
import "./components/style.css";
import { BrowserRouter as  Switch, Route, Router } from 'react-router-dom';
// import  { register} from "./components/index";
import Login from "./components/login";
import Register from "./components/register"
import LandingPage from "./components/landingPage"
import history from "./utils/history";

function Approuter() { 
  return (
    <Router history={history} >
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/register" component={Register} />
        <Route path="/login"  component={Login} />
      </Switch>
      </Router>
  )
  }

function App() {
  return (
    <div className="App">
        <Approuter />
    </div>
  );
}

export default App;