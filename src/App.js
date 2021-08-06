import './App.css';
import React, {useEffect, useState} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingHeader from './components/Header/LandingHeader';

import LandingPage from '../src/Page/LandingPage';
import AdminPage from '../src/Page/AdminPage';
import PostPage from '../src/Page/PostPage';
import Personal from '../src/Page/Personal'; 
import Profile from '../src/Page/Profile';

function App(){

  // const [isLogin, setIsLogin] = useState(false);

  // useEffect(() => {
  //   console.log('session : ' + sessionStorage.getItem("email"))
  //   if(sessionStorage.getItem("email") === null) {
  //     console.log('isLogin ?? :: ', isLogin);
  //   } else {
  //     setIsLogin(true)
  //     console.log('isLogin ?? :: ', isLogin)
  //   }
  // })

  return (
    <BrowserRouter>
        <LandingHeader/>
      <div>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/personal" component={Personal}/> 
        <Route exact path="/admin" component={AdminPage}/>
        <Route exact path="/post" component={PostPage}/>
        <Route exact path="/profile" component={Profile}/>
        {/* <Route component={NotFound}/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
