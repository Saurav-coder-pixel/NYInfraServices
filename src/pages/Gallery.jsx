import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { pageTransition, fadeUp, stagger, viewportOnce } from '../utils/animations';
import PageHero from '../components/common/PageHero';
import CTASection from '../components/home/CTASection';
import { SITE } from '../utils/constants';

const GALLERY_IMAGES = [
  { id: 1, src: '/cable-anchor-1.jpeg', cat: 'Infrastructure', title: 'Cable Anchor Installation' },
  { id: 2, src: '/cable-anchor-2.jpeg', cat: 'Infrastructure', title: 'Cable Anchor System' },
  { id: 3, src: '/micropile.jpeg', cat: 'Infrastructure', title: 'Micropile Foundation Work' },
  { id: 4, src: '/rs-wall.jpeg', cat: 'Infrastructure', title: 'Retaining Structure Wall' },
  { id: 5, src: '/sdra-drilling.jpeg', cat: 'Infrastructure', title: 'SDRA Drilling Operations' },
  { id: 6, src: '/site-photo-1.jpeg', cat: 'Infrastructure', title: 'Project Site View' },
  { id: 7, src: '/site-photo-2.jpeg', cat: 'Infrastructure', title: 'Site Progress Overview' },
  { id: 8, src: '/site-photo-3.jpeg', cat: 'Infrastructure', title: 'Site Construction Phase' },
  { id: 9, src: '/slope-sdra-installation.jpeg', cat: 'Infrastructure', title: 'Slope SDRA Installation' },
  { id: 10, src: '/structure-work.jpeg', cat: 'Infrastructure', title: 'Structural Work Progress' },
];

const CATS = ['All', 'Infrastructure'];

export default function Gallery() {
  const [activecat, setActiveCat] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activecat === 'All' ? GALLERY_IMAGES : GALLERY_IMAGES.filter((img) => img.cat === activecat);

  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Gallery – {SITE.name}</title>
        <meta name="description" content="Explore the NY Infra Services Pvt Ltd project gallery — infrastructure engineering and premium interior design projects across India." />
      </Helmet>

      <PageHero title="Project Gallery" subtitle="A visual showcase of our engineering and design excellence." breadcrumbs={[{ label: 'Gallery' }]} image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80" />

      <section className="section">
        <div className="container-custom">
          {/* Filter */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {CATS.map((cat) => (
              <button key={cat} onClick={() => setActiveCat(cat)}
                className={`px-6 py-2 text-sm font-semibold uppercase tracking-wider transition-all
                  ${activecat === cat ? 'bg-primary text-white' : 'bg-white text-secondary border border-neutral-200 hover:border-primary hover:text-primary'}`}
              >{cat}</button>
            ))}
          </div>

          {/* Masonry / Collage grid */}
          <motion.div key={activecat} variants={stagger} initial="hidden" animate="visible"
            className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
          >
            {filtered.map((img) => (
              <motion.div
                key={img.id}
                variants={fadeUp}
                onClick={() => setLightbox(img)}
                className="relative group overflow-hidden cursor-pointer rounded-xl break-inside-avoid"
              >
                <img src={img.src} alt={img.title} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-bold tracking-wide">{img.title}</p>
                  <p className="text-accent text-xs font-semibold mt-1 uppercase tracking-wider">{img.cat}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/92 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <button onClick={() => setLightbox(null)} className="absolute -top-12 right-0 text-white hover:text-accent transition-colors">
                <X size={28} />
              </button>
              <img src={lightbox.src} alt={lightbox.title} className="w-full max-h-[80vh] object-contain" />
              <div className="mt-4 text-center">
                <p className="text-white font-semibold">{lightbox.title}</p>
                <p className="text-white/60 text-sm">{lightbox.cat}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection />
    </motion.div>
  );
}




