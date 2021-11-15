import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { LoginScreen } from '../components/login/LoginScreen';

import { DashboardRoutes } from './DashboardRoutes';



export const AppRouter = () => {
    return (
        <BrowserRouter>
            
            <Routes>
                
                <Route path="/login" element={<LoginScreen />} />

                <Route path="/*" element={ <DashboardRoutes />  } />

            </Routes>
        </BrowserRouter>
    )
}
