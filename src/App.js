import './App.css';
import "tailwindcss/tailwind.css"
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import LandingHeader from './components/Header/LandingHeader';

import LandingPage from '../src/Page/LandingPage';
import AdminPage from '../src/Page/AdminPage';
import CreatePostPage from '../src/components/ToastEditor/ToastCreate'
import EditPostPage from '../src/Page/EditPostPage';
import Personal from '../src/Page/Personal';
import Profile from '../src/Page/Profile';
import Viewer from '../src/Page/ViewerPage';
import NotFound from './Page/NotFound';
import IsLogin from './auth/isLogin';
import PrivateRoute from './auth/Route/PrivateRoute';
import PublicRoute from './auth/Route/PublicRoute';
import isLogin from './auth/isLogin';

function App() {

  // const isLogin = IsLogin.IsLogin()
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
  // const [isLogin,setIsLogin] = useState(false)

  // const [user, setUser] = useState(null);
  const authenticated = isLogin()
  // setUser(isLogin());


  console.log('app')
  console.log("auth :")
  console.log(authenticated)
  console.log("isLogin :")
  console.log(IsLogin())
  console.log("sessionStorage.user : ")
  console.log(JSON.parse(sessionStorage.getItem("user")))

  return (
    <BrowserRouter>
      <LandingHeader auth={authenticated} />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <PrivateRoute exact path={"/personal/:id"} component={Personal} />
        {/* <Route exact path="/admin" component={AdminPage} /> */}
        <PrivateRoute exact path={"/admin"} component={AdminPage} />
        <PrivateRoute exact path="/post" component={CreatePostPage} />
        <PrivateRoute exact path="/post/:postid" component={EditPostPage} />
        <PrivateRoute exact path="/profile/:id" component={Profile} />
        <PublicRoute exact restricted path="/viewer/:postid" component={Viewer} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
