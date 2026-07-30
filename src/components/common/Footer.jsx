import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, ChevronRight, Globe } from 'lucide-react';
import { SITE, NAV_LINKS } from '../../utils/constants';

const engineeringServices = [
  'Slope Stabilization', 'Rockfall Mitigation', 'Shoring Systems',
  'Slope Protection', 'Reinforced Earth Walls', 'Foundation Engineering',
  'Micro Piling', 'Piling', 'Geotechnical Investigation',
];

const interiorServices = [
  'Residential Interiors', 'Commercial Interiors', 'Office Interiors',
  'Hospitality Interiors', 'Modular Kitchen', 'Wardrobes',
  'False Ceiling', 'Turnkey Solutions', '3D Visualization',
];

const socialLinks = [
  { label: 'LinkedIn',  href: SITE.social.linkedin,  char: 'in' },
  { label: 'Twitter',   href: SITE.social.twitter,   char: 'tw' },
  { label: 'Facebook',  href: SITE.social.facebook,  char: 'fb' },
  { label: 'Instagram', href: SITE.social.instagram, char: 'ig' },
  { label: 'YouTube',   href: SITE.social.youtube,   char: 'yt' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white relative overflow-hidden" role="contentinfo">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern-dark opacity-50 pointer-events-none" />

      {/* CTA Strip */}
      <div className="relative bg-gradient-primary py-14">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-1">Ready to Build?</p>
            <h2 className="font-display font-extrabold text-3xl text-white">Start Your Project with NY Infra Services</h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link to="/contact" className="btn-accent">
              Get a Free Quote <ArrowRight size={16} />
            </Link>
            <a href={`tel:${SITE.phone.replace(/[^+0-9]/g, '')}`} className="btn-outline-white">
              <Phone size={16} /> Call Us Now
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative py-16">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <span className="font-display font-black text-3xl text-white">NY</span>
              <span className="font-display font-medium text-lg text-white/70 ml-2">INFRA SERVICES</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Premier geotechnical engineering and interior design company delivering world-class
              infrastructure solutions and transformative spaces across India since {SITE.founded}.
            </p>

            {/* Contact */}
            <div className="space-y-3 text-sm">
              <a href={`tel:${SITE.phone.replace(/[^+0-9]/g, '')}`} className="flex items-start gap-3 text-white/60 hover:text-accent transition-colors group">
                <Phone size={14} className="shrink-0 mt-0.5 group-hover:text-accent" />
                <span>{SITE.phone}</span>
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-start gap-3 text-white/60 hover:text-accent transition-colors group">
                <Mail size={14} className="shrink-0 mt-0.5" />
                <span>{SITE.email}</span>
              </a>
              <div className="flex items-start gap-3 text-white/60">
                <MapPin size={14} className="shrink-0 mt-0.5" />
                <span>{SITE.address}</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ char, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center bg-white/10 text-white/70
                             hover:bg-accent hover:text-primary transition-all duration-200 text-xs font-bold"
                >
                  {char}
                </a>
              ))}
            </div>
          </div>

          {/* Engineering Services */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-widest text-accent mb-5">
              Engineering Services
            </h3>
            <ul className="space-y-2.5">
              {engineeringServices.map((s) => (
                <li key={s}>
                  <Link
                    to={`/services/${s.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center gap-2 text-sm text-white/60 hover:text-accent transition-colors group"
                  >
                    <ChevronRight size={12} className="shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Interior Design */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-widest text-accent mb-5">
              Interior Design
            </h3>
            <ul className="space-y-2.5">
              {interiorServices.map((s) => (
                <li key={s}>
                  <Link
                    to="/interior-design"
                    className="flex items-center gap-2 text-sm text-white/60 hover:text-accent transition-colors group"
                  >
                    <ChevronRight size={12} className="shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links + Office Hours */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-widest text-accent mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5 mb-8">
              {['Home', 'About', 'Projects', 'Industries', 'Gallery', 'Careers', 'Contact'].map((l) => (
                <li key={l}>
                  <Link
                    to={`/${l.toLowerCase() === 'home' ? '' : l.toLowerCase()}`}
                    className="flex items-center gap-2 text-sm text-white/60 hover:text-accent transition-colors group"
                  >
                    <ChevronRight size={12} className="shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-display font-bold text-sm uppercase tracking-widest text-accent mb-4">
              Office Hours
            </h3>
            <div className="space-y-1.5 text-sm text-white/60">
              <p>{SITE.officeHours.weekdays}</p>
              <p>{SITE.officeHours.saturday}</p>
              <p className="text-red-400/80">{SITE.officeHours.sunday}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link to="/terms"   className="hover:text-white/70 transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-white/70 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}




