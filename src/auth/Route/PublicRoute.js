import { Redirect, Route } from "react-router-dom";
import isLogin from '../isLogin'

const PublicRoute = ({ componnt: Component, restricted, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => (isLogin() && restricted ? <Redirect to="/" /> : <Component {...props} />)}
        />
    );
};

export default PublicRoute;