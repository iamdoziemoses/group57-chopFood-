import About from './components/About Page/About';
import Products from './components/Products Page/Products';
import Contact from './components/Contact Page/Contact';
import NavBar from './components/NavBar';
import HomePage from './components/Home Page/HomePage';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
