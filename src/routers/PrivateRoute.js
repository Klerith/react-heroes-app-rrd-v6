import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';


export const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext);
    const { pathname, search } = useLocation();
    
    localStorage.setItem('lastPath', pathname + search );
    
    return user.logged
        ? children
        : <Navigate to="/login" />
}
