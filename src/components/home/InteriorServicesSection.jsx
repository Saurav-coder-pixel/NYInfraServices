import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp, fadeLeft, stagger, viewportOnce } from '../../utils/animations';
import { interiorCategories } from '../../data/interiorServices';
import SectionHeading from '../common/SectionHeading';

export default function InteriorServicesSection() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
          <SectionHeading
            badge="Premium Interior Design"
            title="Spaces That Inspire"
            highlight="Inspire"
            subtitle="From luxury residences to high-performance corporate environments — we craft exceptional interiors."
          />
          <Link to="/interior-design" className="btn-outline shrink-0 self-start lg:self-auto">
            All Interior Services <ArrowRight size={15} />
          </Link>
        </div>

        {/* Category Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {interiorCategories.map((cat, i) => (
            <motion.article
              key={cat.id}
              variants={fadeUp}
              className="project-card group"
              style={{ aspectRatio: i === 0 ? '16/9' : '4/3' }}
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-display font-bold text-xl text-white mb-2">{cat.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {cat.description}
                  </p>
                  <Link
                    to="/interior-design"
                    className="inline-flex items-center gap-2 text-accent text-sm font-semibold hover:gap-3 transition-all"
                  >
                    Explore <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}




