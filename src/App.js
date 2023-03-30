import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Electronics from './pages/electronics';
import Spaceships from './pages/spaceships';
import Suits from './pages/suits';
import Warpdrives from './pages/warpdrives';
import Home from './pages';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/electronics' component={Electronics} />
        <Route path='/spaceships' component={Spaceships} />
        <Route path='/suits' component={Suits } />
        <Route path='/warpdrives' component={Warpdrives} />
      </Routes>
    </Router>
  );
}

export default App;