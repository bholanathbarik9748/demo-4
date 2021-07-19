import React from 'react';
import './App.css';
import Home from './Home'
import courses from './courses';
import { Switch, Route, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

// components
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/courses' component={courses}></Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
