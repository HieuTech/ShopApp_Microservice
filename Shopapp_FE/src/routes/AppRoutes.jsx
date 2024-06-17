import { BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Login from "../components/Login"
import Authenticate from "../components/Authenticate"
import Home from "../components/Home"
export default function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/authenticate" element={<Authenticate/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </Router>
  )
}
