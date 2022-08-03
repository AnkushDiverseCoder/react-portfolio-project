import './App.css';
import Header from "./components/header/Header" 
import Nav from "./components/nav/Nav" 
import About from "./components/about/About" 
import Testimonial from './components/testimonial/Testimonial';
import Service from './components/services/Service';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
   <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Service/>
    <Portfolio/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    
   </>
  );
}

export default App;
