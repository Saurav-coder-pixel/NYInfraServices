import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Train, Route, Plane, Waves, Flag } from 'lucide-react';
import { fadeUp, stagger, viewportOnce } from '../../utils/animations';
import { industries } from '../../data/industries';
import SectionHeading from '../common/SectionHeading';

const ICON_MAP = { Train, Route, Plane, Subway: Train, Waves, Flag };

export default function IndustriesSection() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <SectionHeading
          badge="Industries Served"
          title="Built for Every Sector"
          highlight="Every Sector"
          subtitle="Delivering geotechnical expertise across the full spectrum of India's critical infrastructure sectors."
          align="center"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4"
        >
          {industries.map((ind) => {
            const Icon = ICON_MAP[ind.icon] || Train;
            return (
              <motion.article
                key={ind.id}
                variants={fadeUp}
                className="group relative overflow-hidden cursor-pointer"
                style={{ aspectRatio: '4/3' }}
              >
                <img
                  src={ind.image}
                  alt={ind.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent" />

                <div className="absolute inset-0 p-7 flex flex-col justify-between">
                  {/* Top: Project count */}
                  <span className="tag bg-accent/90 text-primary self-end">{ind.projects} Projects</span>

                  {/* Bottom: Info */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 flex items-center justify-center bg-accent/20 rounded-sm">
                        <Icon size={20} className="text-accent" />
                      </div>
                      <h3 className="font-display font-bold text-xl text-white">{ind.title}</h3>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {ind.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.highlights.slice(0, 3).map((h) => (
                        <span key={h} className="text-xs bg-white/15 text-white px-2 py-0.5 rounded-sm">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mt-10"
        >
          <Link to="/industries" className="btn-primary">
            Explore All Industries <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}




