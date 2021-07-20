import React from 'react';
import './App.css';
import Home from './Home';
import blog from './blog';
import books from './books';
import courses from './courses';
import about from './about';
import notes from './Note';
import Contact_me from './Contact_me';
import notpage from './notpage';
import { Switch, Route } from "react-router-dom";
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
        <Route exact path='/blog' component={blog}></Route>
        <Route exact path='/books' component={books}></Route>
        <Route exact path='/about' component={about}></Route>
        <Route exact path='/notes' component={notes}></Route>
        <Route exact path='/contact_me' component={Contact_me}></Route>
        <Route path="" component={notpage} />
      </Switch>
    </>
  );
}

export default App;
