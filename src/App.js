
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/About/About';
import Navbar from './pages/shared/Navbar/Navbar';
import Footer from './pages/shared/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
