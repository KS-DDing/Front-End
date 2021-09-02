import { Redirect, Route } from "react-router-dom";
import isLogin from '../isLogin'

const PrivateRoute = ({ component: Component, ...rest }) => {

    return (
      // Show the component only when the user is logged in
      // Otherwise, redirect the user to /login page
      <Route
        {...rest}
        render={(props) => (isLogin() ? <Component {...props} /> : <>{alert("권한없음 로그인필요")} {<Redirect to="/"/>} {}</>)}
      />
    );
  };
  
  export default PrivateRoute;