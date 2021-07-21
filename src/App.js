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

// Loading animation
import { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [progress, setProgress] = useState(0)
  return (
    <>
      <LoadingBar color="#F1C40F" fixed={false} height='6px' progressDuration={100} progress={progress} onLoaderFinished={() => setProgress(0)} />
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} onClick={() => setProgress(100)}></Route>
        <Route exact path='/courses' component={courses} onClick={() => setProgress(100)}></Route>
        <Route exact path='/blog' component={blog} onClick={() => setProgress(100)}></Route>
        <Route exact path='/books' component={books} onClick={() => setProgress(100)}></Route>
        <Route exact path='/about' component={about} onClick={() => setProgress(100)}></Route>
        <Route exact path='/notes' component={notes} onClick={() => setProgress(100)}></Route>
        <Route exact path='/contact_me' component={Contact_me} onClick={() => setProgress(100)}></Route>
        <Route path="" component={notpage} />
      </Switch>
    </>
  );
}

export default App;
