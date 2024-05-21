// import logo from './logo.svg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Headi from './components/Headi';
import Home from './components/Home';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Service from './components/Service';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Headi/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
       </Routes>
      <Footer/>

      
      
    </div>
  );
}

export default App;
