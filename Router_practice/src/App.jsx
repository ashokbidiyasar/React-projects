import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home   from './components/Home';
import About_us from './components/About_us';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About_us />} />
          </Routes>
          <Footer />
        </Router>
      }
    </>
  );
}

export default App
