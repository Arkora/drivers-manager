import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Admin from "./pages/Admin";
import Driver from "./pages/Driver";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />      
        <Route path='/driver' element={<Driver />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router> 
  )
}

export default App;
