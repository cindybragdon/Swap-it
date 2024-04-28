import {Navigate, Outlet, useLocation} from "react-router-dom";


function PrivateRoute() {
    const location = useLocation();
    const user = location.state;
    return (
        sessionStorage.getItem('user') ? <Outlet/> : <Navigate to="/"/>
    );
}

export default PrivateRoute;