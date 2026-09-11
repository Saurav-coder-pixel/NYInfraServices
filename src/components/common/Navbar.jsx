import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import { NAV_LINKS, SITE } from '../../utils/constants';

// ─── Top Info Bar ────────────────────────────────────────────────────────────
function TopBar() {
  return (
    <div className="bg-primary text-white py-2 hidden lg:block">
      <div className="container-custom flex items-center justify-between text-xs">
        <div className="flex items-center gap-6">
          <a href={`tel:${SITE.phone.replace(/[^+0-9]/g, '')}`} className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <Phone size={12} />
            <span>{SITE.phone}</span>
          </a>
          <a href={`mailto:${SITE.email}`} className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <Mail size={12} />
            <span>{SITE.email}</span>
          </a>
        </div>
        <div className="flex items-center gap-1.5 text-white/70">
          <MapPin size={12} />
          <span>Delhi, India</span>
        </div>
      </div>
    </div>
  );
}

// ─── Mega Dropdown ────────────────────────────────────────────────────────────
import { engineeringServices } from '../../data/services';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

function DropdownMenu({ items, isOpen, label }) {
  const [activeServiceSlug, setActiveServiceSlug] = useState('slope-stabilization');

  // Find the active service details from data
  const activeService = engineeringServices.find(s => s.slug === activeServiceSlug) || engineeringServices[0];

  if (label === 'Services') {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-[800px] bg-white shadow-premium border-t-2 border-accent z-50 rounded-b-lg overflow-hidden flex"
            onMouseLeave={() => setActiveServiceSlug('slope-stabilization')}
          >
            {/* Left side: Service List */}
            <div className="w-1/3 bg-neutral-50 p-6 border-r border-neutral-100">
              <h3 className="font-display font-bold text-xs text-neutral-500 mb-4 uppercase tracking-wider">All Engineering Services</h3>
              <div className="flex flex-col gap-1">
                {items.filter(item => item.label !== 'Interior Design').map((item) => {
                  const itemSlug = item.path.split('/').pop();
                  const isActive = activeServiceSlug === itemSlug;
                  
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onMouseEnter={() => setActiveServiceSlug(itemSlug)}
                      className={`block px-4 py-3 text-sm font-medium transition-all duration-200 rounded-md
                       ${isActive ? 'bg-primary text-white shadow-md' : 'text-neutral-700 hover:text-primary hover:bg-white hover:shadow-sm'}`}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </div>
              <div className="mt-4 pt-4 border-t border-neutral-200">
                <Link
                  to="/interior-design"
                  className="block px-4 py-3 text-sm font-bold text-neutral-900 bg-neutral-200/50 hover:bg-neutral-200 rounded-md transition-colors"
                >
                  Interior Design
                </Link>
              </div>
            </div>

            {/* Right side: Service Details */}
            <div className="w-2/3 p-6 bg-white relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="h-full flex flex-col"
                >
                  <div className="flex gap-6 mb-4">
                    <div className="w-1/2 h-40 rounded-lg overflow-hidden shrink-0">
                      <img 
                        src={activeService.image} 
                        alt={activeService.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="font-display font-bold text-xl text-neutral-900 mb-2">
                        {activeService.title}
                      </h4>
                      <p className="text-secondary text-sm leading-relaxed line-clamp-4">
                        {activeService.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <h5 className="font-display font-bold text-sm text-neutral-900 mb-3 flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-accent" /> Key Features
                    </h5>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                      {activeService.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-neutral-600">
                          <div className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/services/${activeService.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                    >
                      View Full Details <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  // Fallback for other dropdowns
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 mt-2 w-72 bg-white shadow-card-hover border-t-2 border-accent z-50 rounded-b-lg"
        >
          <div className="py-2">
            {items.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-5 py-2.5 text-sm font-medium transition-colors duration-150
                   ${isActive ? 'text-primary bg-primary/5' : 'text-neutral-900 hover:text-primary hover:bg-neutral-50'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [activeDD,    setActiveDD]    = useState(null);
  const [mobileExp,   setMobileExp]   = useState(null);
  const location = useLocation();
  const timerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDD(null);
  }, [location.pathname]);

  // body scroll lock
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleMouseEnter = (label) => {
    clearTimeout(timerRef.current);
    setActiveDD(label);
  };
  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => setActiveDD(null), 150);
  };

  return (
    <>
      <TopBar />
      <header
        className={`sticky top-0 z-50 transition-all duration-300
          ${scrolled
            ? 'bg-white shadow-premium border-b border-neutral-100'
            : 'bg-white/95 backdrop-blur-sm'}`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="NY Infra Services Pvt Ltd Home">
              <div className="flex items-center">
                <span className="font-display font-black text-2xl text-primary tracking-tight">NY</span>
                <div className="ml-1.5">
                  <div className="font-display font-bold text-sm text-primary leading-none">INFRA</div>
                  <div className="font-display font-medium text-xs text-secondary leading-none tracking-widest">SERVICES</div>
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(link.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={`nav-link flex items-center gap-1 px-3 py-2 rounded-none transition-colors
                        ${activeDD === link.label ? 'text-primary' : ''}`}
                      aria-expanded={activeDD === link.label}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${activeDD === link.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <DropdownMenu items={link.children} isOpen={activeDD === link.label} label={link.label} />
                  </div>
                ) : (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `nav-link px-3 py-2 rounded-none ${isActive ? 'nav-link-active' : ''}`
                    }
                  >
                    {link.label}
                  </NavLink>
                )
              )}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <Link to="/contact" className="btn-primary hidden lg:flex text-xs px-5 py-2.5">
                Get a Quote
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-primary focus-ring rounded"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-neutral-100 overflow-hidden"
            >
              <div className="container-custom py-4 space-y-1">
                {NAV_LINKS.map((link) =>
                  link.children ? (
                    <div key={link.label}>
                      <button
                        onClick={() => setMobileExp(mobileExp === link.label ? null : link.label)}
                        className="w-full flex items-center justify-between py-3 text-sm font-semibold text-neutral-900 border-b border-neutral-100"
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          className={`transition-transform ${mobileExp === link.label ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExp === link.label && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            className="overflow-hidden pl-4 py-1 space-y-1"
                          >
                            {link.children.map((child) => (
                              <NavLink
                                key={child.path}
                                to={child.path}
                                className="block py-2 text-sm text-secondary hover:text-primary transition-colors"
                              >
                                {child.label}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) =>
                        `block py-3 text-sm font-medium border-b border-neutral-100 transition-colors
                         ${isActive ? 'text-primary font-semibold' : 'text-neutral-900 hover:text-primary'}`
                      }
                    >
                      {link.label}
                    </NavLink>
                  )
                )}
                <div className="pt-4">
                  <Link to="/contact" className="btn-primary w-full justify-center text-xs">
                    Get a Quote
                  </Link>
                </div>
                <div className="pt-4 space-y-2 text-xs text-secondary">
                  <a href={`tel:${SITE.phone.replace(/[^+0-9]/g, '')}`} className="flex items-center gap-2 hover:text-primary">
                    <Phone size={14} /> {SITE.phone}
                  </a>
                  <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-primary">
                    <Mail size={14} /> {SITE.email}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}




