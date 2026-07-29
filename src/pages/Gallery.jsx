import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { pageTransition, fadeUp, stagger, viewportOnce } from '../utils/animations';
import PageHero from '../components/common/PageHero';
import CTASection from '../components/home/CTASection';
import { SITE } from '../utils/constants';

const GALLERY_IMAGES = [
  { id: 1, src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',  cat: 'Infrastructure', title: 'Highway Construction' },
  { id: 2, src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',  cat: 'Infrastructure', title: 'Slope Stabilization' },
  { id: 3, src: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80', cat: 'Infrastructure', title: 'Railway Engineering' },
  { id: 4, src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',  cat: 'Infrastructure', title: 'Shoring Works' },
  { id: 5, src: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?w=800&q=80', cat: 'Infrastructure', title: 'Foundation Piling' },
  { id: 6, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',  cat: 'Infrastructure', title: 'Mountain Road' },
  { id: 7, src: 'https://images.unsplash.com/photo-1468436139062-f60a71c5c892?w=800&q=80',  cat: 'Infrastructure', title: 'MSE Wall' },
  { id: 8, src: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80',  cat: 'Infrastructure', title: 'Slope Protection' },
  { id: 9, src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',  cat: 'Interior', title: 'Luxury Living Room' },
  { id: 10, src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80', cat: 'Interior', title: 'Master Bedroom' },
  { id: 11, src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80', cat: 'Interior', title: 'Living Space' },
  { id: 12, src: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&q=80', cat: 'Interior', title: 'Modern Office' },
  { id: 13, src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe2fa?w=800&q=80', cat: 'Interior', title: 'Hotel Lobby' },
  { id: 14, src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80', cat: 'Interior', title: 'Retail Store' },
  { id: 15, src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80', cat: 'Interior', title: 'Modular Kitchen' },
  { id: 16, src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', cat: 'Interior', title: 'False Ceiling Design' },
];

const CATS = ['All', 'Infrastructure', 'Interior'];

export default function Gallery() {
  const [activecat, setActiveCat] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activecat === 'All' ? GALLERY_IMAGES : GALLERY_IMAGES.filter((img) => img.cat === activecat);

  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Gallery – {SITE.name}</title>
        <meta name="description" content="Explore the NY Infra Services project gallery — infrastructure engineering and premium interior design projects across India." />
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

          {/* Masonry-like grid */}
          <motion.div key={activecat} variants={stagger} initial="hidden" animate="visible"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
          >
            {filtered.map((img) => (
              <motion.div
                key={img.id}
                variants={fadeUp}
                onClick={() => setLightbox(img)}
                className="relative group overflow-hidden cursor-pointer"
                style={{ aspectRatio: img.id % 5 === 0 ? '1/1.2' : img.id % 3 === 0 ? '1/1' : '4/3' }}
              >
                <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs font-semibold">{img.title}</p>
                  <p className="text-white/60 text-xs">{img.cat}</p>
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




