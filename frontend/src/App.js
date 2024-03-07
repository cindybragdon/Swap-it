import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';
import Features from './pages/Features';
import Piges from "./pages/Piges";
import CreationPiges from "./components/CreationPiges";
import MyPige from "./pages/MyPige";


function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/faq' element={<FAQ />} />
            <Route path='/features' element={<Features />} />
            <Route path='/piges' element={<Piges />}/>
            <Route path='*' element={<NotFound />} />
            <Route path='/piges/creation-piges' element={<CreationPiges />} />
            <Route path='/piges/myPige' element={<MyPige />}/>

          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
  );
}
 export default App;
