import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, HardHat } from 'lucide-react';
import { pageTransition } from '../utils/animations';
import { SITE } from '../utils/constants';

export default function NotFound() {
  return (
    <motion.div {...pageTransition} className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 px-4 text-center">
      <Helmet>
        <title>Page Not Found – {SITE.name}</title>
      </Helmet>

      {/* Visual */}
      <div className="relative mb-10">
        <div className="font-display font-black text-[12rem] text-primary/10 leading-none select-none">404</div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-primary text-white p-6 shadow-premium">
            <HardHat size={48} className="text-accent" />
          </div>
        </div>
      </div>

      <h1 className="font-display font-extrabold text-3xl lg:text-4xl text-neutral-900 mb-4">Page Not Found</h1>
      <div className="w-12 h-0.5 bg-accent mx-auto mb-5" />
      <p className="text-secondary text-lg max-w-md mb-8">
        The page you're looking for seems to have gone off-site. Let's get you back to solid ground.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/" className="btn-primary">
          <Home size={16} /> Back to Home
        </Link>
        <Link to="/contact" className="btn-outline">
          <ArrowLeft size={16} /> Contact Us
        </Link>
      </div>

      <p className="text-secondary text-sm mt-8">
        Or try one of these:{' '}
        {[['Services', '/services'], ['Projects', '/projects'], ['Contact', '/contact']].map(([label, path], i) => (
          <span key={path}>
            <Link to={path} className="text-primary hover:underline">{label}</Link>
            {i < 2 ? ' · ' : ''}
          </span>
        ))}
      </p>
    </motion.div>
  );
}




