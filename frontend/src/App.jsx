import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ClinicTour from './pages/ClinicTour';
import Contact from './pages/Contact';
import OurStory from './pages/OurStory';

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-900 w-full overflow-x-hidden min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/clinic-tour" element={<ClinicTour />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/our-story" element={<OurStory />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
