import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js';
import About from './components/About.js';
import NavBar from './Navbar';
import {Route, Link, Routes} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <NavBar></NavBar>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/About" element={<About />}/>
      </Routes>
    </div>

  );
}


export default App;
