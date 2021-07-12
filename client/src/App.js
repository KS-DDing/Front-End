// import './App.css';
import React, {Component} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from '../src/view/Page/LandingPage';
import AdminPage from '../src/view/Page/AdminPage';
import PostPage from '../src/view/Page/PostPage';
import Personal from '../src/view/Page/Personal';



function App(){
  return (
    <BrowserRouter> 
      <div>
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/admin" component={AdminPage}/>
      <Route exact path="/post" component={PostPage}/>
      <Route exact path="/personal" component={Personal}/>
      </div>
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
  );
}

export default App;
