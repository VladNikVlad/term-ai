import Navbar from './componens/Navbar.jsx';
import Hero from './componens/Hero.jsx';
import Features from './componens/Feature.jsx';
import Pricing from './componens/Pricing.jsx';
import Testimonials from './componens/Testimonials.jsx';
import Footer from './componens/Footer.jsx';  
import { useEffect, useState } from 'react';

function App() {
  const [scrolled, setScrolled] = useState(false);

useEffect(()=> {
  function handlerScroll() {
    setScrolled(window.scrollY > 50);
  }

  window.addEventListener("scroll", handlerScroll);

  return () => window.removeEventListener("scroll", handlerScroll);

}, [])

  return (
    <>
      <div className="min-h-screen bg-slate-950 overflow-hidden text-white">
        <Navbar scrolled={'scrolled'}/>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
};

export default App
