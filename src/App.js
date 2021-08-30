import './App.css';
import React, {useEffect, useState} from 'react';
import {
  withRouter,
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingHeader from './components/Header/LandingHeader';

import LandingPage from '../src/Page/LandingPage';
import AdminPage from '../src/Page/AdminPage';
import CreatePostPage from '../src/components/ToastEditor/ToastCreate'
import EditPostPage from '../src/Page/EditPostPage';
import Personal from '../src/Page/Personal'; 
import Profile from '../src/Page/Profile';
import Viewer from '../src/Page/ViewerPage';

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
  const id = ''
  return (
    <BrowserRouter>
        <LandingHeader/>
      <div>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/personal/:id" component={Personal}/> 
        <Route exact path="/admin" component={AdminPage}/>
        <Route exact path="/post" component={CreatePostPage}/>
        <Route exact path="/post/:postid" component={EditPostPage}/>
        <Route exact path="/profile/:id" component={Profile}/>
        <Route exact path="/viewer/:postid" component={Viewer}/>
        {/* <Route component={NotFound}/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
