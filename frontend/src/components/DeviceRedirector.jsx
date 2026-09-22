import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent || ''
  );
  const isSmallScreen = window.innerWidth < 768;
  return isMobileUA || isSmallScreen;
};

// Route mapping table for exact route names
const desktopToMobileMap = {
  '/': '/mobile',
  '/about': '/mobile/about',
  '/services': '/mobile/services',
  '/clinic-tour': '/mobile/clinic-tour',
  '/our-story': '/mobile/our-story',
  '/contact': '/mobile/contact',
  '/book-appointment': '/mobile/book-appointment',
  '/appointment': '/mobile/appointment',
  '/general-checkup': '/mobile/general-checkup',
  '/smile-makeover': '/mobile/smile-makeover',
  '/invisible-aligners': '/mobile/invisible-aligners',
  '/cosmetic-dentistry': '/mobile/cosmetic-dentistry',
};

const mobileToDesktopMap = {
  '/mobile': '/',
  '/mobile/about': '/about',
  '/mobile/services': '/services',
  '/mobile/clinic-tour': '/clinic-tour',
  '/mobile/our-story': '/our-story',
  '/mobile/contact': '/contact',
  '/mobile/book-appointment': '/book-appointment',
  '/mobile/appointment': '/book-appointment',
  '/mobile/general-checkup': '/general-checkup',
  '/mobile/smile-makeover': '/smile-makeover',
  '/mobile/invisible-aligners': '/invisible-aligners',
  '/mobile/cosmetic-dentistry': '/cosmetic-dentistry',
  '/mobile/our-doctors': '/our-story',
  '/mobile/smile-gallery': '/clinic-tour',
};

export default function DeviceRedirector() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const lastRedirectRef = useRef('');

  const performRedirect = () => {
    // Exempt administration portal from view switching
    if (pathname.startsWith('/admin')) return;

    const isMobile = isMobileDevice();
    const isMobilePath = pathname.startsWith('/mobile');

    if (isMobile && !isMobilePath) {
      const target = desktopToMobileMap[pathname] || `/mobile${pathname}`;
      if (target !== pathname && lastRedirectRef.current !== target) {
        lastRedirectRef.current = target;
        navigate(target, { replace: true });
      }
    } else if (!isMobile && isMobilePath) {
      const target = mobileToDesktopMap[pathname] || pathname.replace(/^\/mobile\/?/, '/') || '/';
      if (target !== pathname && lastRedirectRef.current !== target) {
        lastRedirectRef.current = target;
        navigate(target, { replace: true });
      }
    }
  };

  useEffect(() => {
    performRedirect();
  }, [pathname]);

  useEffect(() => {
    let timer;
    const handleResize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        performRedirect();
      }, 200);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [pathname]);

  return null;
}
