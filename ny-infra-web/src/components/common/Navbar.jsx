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
          <a href={`tel:${SITE.phone}`} className="flex items-center gap-1.5 hover:text-accent transition-colors">
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
          <span>Gurugram, Haryana, India</span>
        </div>
      </div>
    </div>
  );
}

// ─── Mega Dropdown ────────────────────────────────────────────────────────────
function DropdownMenu({ items, isOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 mt-2 w-72 bg-white shadow-card-hover border-t-2 border-accent z-50"
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
            <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="NY Infra Services Home">
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
                    <DropdownMenu items={link.children} isOpen={activeDD === link.label} />
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
                  <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 hover:text-primary">
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




