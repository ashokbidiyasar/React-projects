import { useState,useEffect } from 'react';
import './App.css'
import { Theme_context, ThemeProvider } from './Context/Theme_context'
import All_comp from './components/All_comp';
import User_login from './components/User_login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
 
  const  [theme, settheme] = useState('light');
  const [name, setname] = useState('');

  useEffect(() => {
    document.querySelector('html').classList.remove(theme === 'light' ,'dark');
    document.querySelector('html').classList.add(theme);
  }, [theme])
  

  const toggle = () => {
    settheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <Router>
        <ThemeProvider value={{ toggle, theme }}>
          <Routes>
            <Route path="/" element={<User_login name={name} setname={setname} />} />
            <Route path="/card" element={<All_comp name={name} setname={setname} />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App
