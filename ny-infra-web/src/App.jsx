import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import BackToTop from './components/common/BackToTop';

// Lazy-loaded pages
const Home          = lazy(() => import('./pages/Home'));
const About         = lazy(() => import('./pages/About'));
const Services      = lazy(() => import('./pages/Services'));
const InteriorDesign= lazy(() => import('./pages/InteriorDesign'));
const Projects      = lazy(() => import('./pages/Projects'));
const Industries    = lazy(() => import('./pages/Industries'));
const Gallery       = lazy(() => import('./pages/Gallery'));
const Careers       = lazy(() => import('./pages/Careers'));
const Contact       = lazy(() => import('./pages/Contact'));
const NotFound      = lazy(() => import('./pages/NotFound'));

// Loading fallback
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        <p className="text-secondary text-sm font-medium">Loading...</p>
      </div>
    </div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <AnimatePresence mode="wait" initial={false}>
        <Suspense fallback={<PageLoader />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/"                  element={<Home />} />
            <Route path="/about"             element={<About />} />
            <Route path="/services"          element={<Services />} />
            <Route path="/services/:slug"    element={<Services />} />
            <Route path="/interior-design"   element={<InteriorDesign />} />
            <Route path="/projects"          element={<Projects />} />
            <Route path="/projects/:id"      element={<Projects />} />
            <Route path="/industries"        element={<Industries />} />
            <Route path="/gallery"           element={<Gallery />} />
            <Route path="/careers"           element={<Careers />} />
            <Route path="/contact"           element={<Contact />} />
            <Route path="*"                  element={<NotFound />} />
          </Routes>
        </Suspense>
      </AnimatePresence>

      <Footer />
      <BackToTop />
    </>
  );
}




