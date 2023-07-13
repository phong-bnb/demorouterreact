import './App.css';
import Home from './Component/Home.jsx'
import {Routes, Route, Link} from "react-router-dom"
import About from './Component/About';
import Contract from './Component/Contract';


function App() {
  return (
    <>
      <h1>
        ngu ngu 
      </h1>
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
              <Link to="/about">About</Link>
            </li>
          <li>
            <Link to="/contract">Contract</Link>
          </li>
      </ul>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contract />} />
      </Routes>
    </>
  );
}

export default App;
