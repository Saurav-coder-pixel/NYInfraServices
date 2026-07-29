import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { fadeUp, stagger, viewportOnce } from '../../utils/animations';

/**
 * Reusable inner-page hero banner.
 * Props:
 *   title      – page title (string)
 *   subtitle   – optional subtitle (string)
 *   breadcrumbs – array of { label, path }
 *   image       – background image URL (string)
 *   overlay    – overlay opacity class (default: 'bg-primary/75')
 */
export default function PageHero({ title, subtitle, breadcrumbs = [], image, overlay = 'bg-primary/75' }) {
  return (
    <section
      className="relative min-h-[38vh] flex items-end pb-14 pt-20"
      style={{ background: image ? `url(${image}) center/cover no-repeat` : undefined }}
    >
      {/* Fallback gradient when no image */}
      {!image && (
        <div className="absolute inset-0 bg-gradient-dark bg-pattern-dark" />
      )}

      {/* Overlay */}
      {image && <div className={`absolute inset-0 ${overlay}`} />}

      {/* Diagonal bottom edge */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12 bg-white"
        style={{ clipPath: 'polygon(0 100%,100% 0,100% 100%)' }}
      />

      {/* Content */}
      <div className="relative container-custom w-full">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Breadcrumb */}
          {breadcrumbs.length > 0 && (
            <motion.nav variants={fadeUp} aria-label="Breadcrumb" className="breadcrumb mb-4">
              <Link to="/" className="hover:text-accent">Home</Link>
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-2">
                  <ChevronRight size={12} className="text-white/40" />
                  {crumb.path ? (
                    <Link to={crumb.path} className="hover:text-accent">{crumb.label}</Link>
                  ) : (
                    <span className="text-white/90">{crumb.label}</span>
                  )}
                </span>
              ))}
            </motion.nav>
          )}

          <motion.h1 variants={fadeUp} className="font-display font-black text-4xl lg:text-5xl xl:text-6xl text-white leading-tight">
            {title}
          </motion.h1>

          <motion.div variants={fadeUp} className="w-16 h-1 bg-accent mt-5" />

          {subtitle && (
            <motion.p variants={fadeUp} className="text-white/75 text-lg mt-5 max-w-xl leading-relaxed">
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}




