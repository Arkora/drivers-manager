import React from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Admin from "./pages/Admin";
import Form from "./pages/Form";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import DashboardPage from "./pages/DashboardPage";
import Profile from "./pages/Profile"
import Inbox from "./pages/Inbox";
import Settings from "./pages/Settings";
import Reports from "./pages/Reports";
import Car from "./pages/Car";
import {ProtectedRoutes,ProtectedRoutesAdmin} from "./misc/ProtectedRoutes";
import NotFoundPage from "./pages/NotFoundPage";


const App = () => {
 
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />      
        <Route path='/signup' element={<Signup />} />
        <Route path="/reports" element={<Reports />} /> 
        <Route element={<ProtectedRoutes />}>          
          <Route path='/form' element={<Form />} />
          <Route path='/dashboard' element={<DashboardPage/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/settings" element={<Settings />} />          
          <Route path="/car" element={<Car/>} />
          
        </Route>
        <Route element={<ProtectedRoutesAdmin />}>
          <Route path='/admin' element={<Admin />} /> 
          
          <Route path='/dashboard' element={<DashboardPage/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />      
        </Route>
        <Route path="*" element={<NotFoundPage />} />  
      </Routes>
    </Router> 
  )
}

export default App;
