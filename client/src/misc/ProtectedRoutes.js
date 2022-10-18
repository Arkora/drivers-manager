import { useLocation,Navigate, Outlet } from "react-router-dom"
import { getUser } from "../localStorage";

const useAuth = () => {
  const user = getUser()
  if(Object.keys(user).length > 0) return true 
  return false
};

const useAuthAdmin = () =>{
  const user = getUser()
  if(Object.keys(user).length > 0 && user.role === 'admin') return true 
  return false
}


export const ProtectedRoutes = () => {  
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to='/' />;
};

export const ProtectedRoutesAdmin = () => {
  const location = useLocation();
  const isAuthAdmin = useAuthAdmin();
  return isAuthAdmin ? <Outlet /> : <Navigate to='/' state={{ from: location }} replace />;
};

