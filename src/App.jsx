import React, { useEffect, useState, Suspense, lazy } from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './Components/Footer';
import Contact from './Pages/Contact';

// Lazy load pages
const Home = lazy(() => import('./Pages/Home'));
const AboutUs = lazy(() => import('./Pages/AboutUs'));
const Blog = lazy(() => import('./Pages/Blog'));
const SingleBlog = lazy(() => import('./Pages/SingleBlog'));
const ServiceDetail = lazy(() => import('./Pages/ServiceDetail'));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component does not render anything
};

const App = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 4000); // Consider replacing with actual loading logic

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loader ? (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#343230]"></div>
        </div>
      ) : (
        <BrowserRouter>
          <Navbar />
          <ScrollToTop /> {/* ScrollToTop component to handle scroll reset */}
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog/:id" element={<SingleBlog />} />
              <Route path="/services/:serviceId" element={<ServiceDetail />} />
            </Routes>
          </Suspense>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
