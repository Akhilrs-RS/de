import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ClinicTour from './pages/ClinicTour';
import Contact from './pages/Contact';
import OurStory from './pages/OurStory';
import GeneralCheckup from './pages/GeneralCheckup';
import SmileMakeover from './pages/SmileMakeover';
import InvisibleAligners from './pages/InvisibleAligners';
import CosmeticDentistry from './pages/CosmeticDentistry';
import BookAppointment from './pages/BookAppointment';
import Admin from './pages/Admin';
import { MediaProvider } from './context/MediaContext';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainLayout() {
  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith('/admin');

  return (
    <div className="font-sans text-gray-900 w-full overflow-x-hidden min-h-screen flex flex-col">
      {!isAdmin && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clinic-tour" element={<ClinicTour />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/general-checkup" element={<GeneralCheckup />} />
          <Route path="/smile-makeover" element={<SmileMakeover />} />
          <Route path="/invisible-aligners" element={<InvisibleAligners />} />
          <Route path="/cosmetic-dentistry" element={<CosmeticDentistry />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      {!isAdmin && <Footer />}
    </div>
  );
}

function App() {
  return (
    <MediaProvider>
      <Router>
        <ScrollToTop />
        <MainLayout />
      </Router>
    </MediaProvider>
  );
}

export default App;
