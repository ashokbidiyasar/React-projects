
import './App.css'
import Header from './components/Header/Header';
import Login from './components/Login';
import MainBody from './components/MainBody/MainBody';
import { BrowserRouter as Router ,Route,Routes ,Navigate} from 'react-router-dom';
import Reposetries from './components/Repositeries/Reposetries';

function App() {
  

  return (
    <>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<MainBody />} />
            <Route path="/login" element={<Login />} />
            <Route path="/repositories" element={<Reposetries />} />
          </Routes>
      </Router>
    </>
  );
}

export default App
