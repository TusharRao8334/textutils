import React, { useState } from 'react'
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');  // whether dark mode is enabled or not
  const switchtheme = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#011c30";
      document.body.style.color = 'white';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = '#011c30';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Text-utils" mode={mode} switchtheme={switchtheme} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm heading="Manipulate Your Text Here" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
