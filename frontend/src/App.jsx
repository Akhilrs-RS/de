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
import MobileLanding from './pages/MobileLanding';
import MobileAbout from './pages/MobileAbout';
import MobileServices from './pages/MobileServices';
import MobileClinicTour from './pages/MobileClinicTour';
import MobileOurStory from './pages/MobileOurStory';
import MobileContact from './pages/MobileContact';
import MobileAppointment from './pages/MobileAppointment';
import MobileGeneralCheckup from './pages/MobileGeneralCheckup';
import MobileSmileMakeover from './pages/MobileSmileMakeover';
import MobileInvisibleAligners from './pages/MobileInvisibleAligners';
import MobileCosmeticDentistry from './pages/MobileCosmeticDentistry';
import PrivacyPolicy from './pages/PrivacyPolicy';
import MobilePrivacyPolicy from './pages/MobilePrivacyPolicy';
import DeviceRedirector from './components/DeviceRedirector';
import { MediaProvider } from './context/MediaContext';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function MainLayout() {
  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith('/admin');
  const isMobile = pathname.startsWith('/mobile');

  return (
    <div className="font-sans text-gray-900 w-full min-h-screen flex flex-col">
      {!isAdmin && !isMobile && <Navbar />}
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
          <Route path="/mobile" element={<MobileLanding />} />
          <Route path="/mobile/about" element={<MobileAbout />} />
          <Route path="/mobile/services" element={<MobileServices />} />
          <Route path="/mobile/clinic-tour" element={<MobileClinicTour />} />
          <Route path="/mobile/our-story" element={<MobileOurStory />} />
          <Route path="/mobile/contact" element={<MobileContact />} />
          <Route path="/mobile/book-appointment" element={<MobileAppointment />} />
          <Route path="/mobile/appointment" element={<MobileAppointment />} />
          <Route path="/mobile/general-checkup" element={<MobileGeneralCheckup />} />
          <Route path="/mobile/smile-makeover" element={<MobileSmileMakeover />} />
          <Route path="/mobile/invisible-aligners" element={<MobileInvisibleAligners />} />
          <Route path="/mobile/cosmetic-dentistry" element={<MobileCosmeticDentistry />} />
          <Route path="/mobile/our-doctors" element={<MobileOurStory />} />
          <Route path="/mobile/smile-gallery" element={<MobileClinicTour />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/mobile/privacy-policy" element={<MobilePrivacyPolicy />} />
        </Routes>
      </main>
      {!isAdmin && !isMobile && <Footer />}
    </div>
  );
}

function App() {
  return (
    <MediaProvider>
      <Router>
        <ScrollToTop />
        <DeviceRedirector />
        <MainLayout />
      </Router>
    </MediaProvider>
  );
}

export default App;
