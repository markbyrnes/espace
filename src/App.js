import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar/Navbar"
import Electronics from "./pages/Electronics"
import Spaceships from "./pages/Spaceships"
import Spacesuits from "./pages/Spacesuits"
import Warpdrives from "./pages/Warpdrives"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import styles from "./App.css"

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/electronics' element={<Electronics />} />
        <Route path='/spaceships' element={<Spaceships />} />
        <Route path='/spacesuits' element={<Spacesuits />} />
        <Route path='/warpdrives' element={<Warpdrives />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}