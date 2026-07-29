import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../utils/animations';
import { CLIENTS } from '../../utils/constants';
import SectionHeading from '../common/SectionHeading';

export default function ClientLogos() {
  // Duplicate for seamless marquee
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <section className="section-sm bg-white border-t border-neutral-100">
      <div className="container-custom">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-8"
        >
          <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-2">Trusted By</p>
          <h2 className="font-display font-bold text-2xl text-neutral-900">
            Our Esteemed Clients
          </h2>
          <div className="w-10 h-0.5 bg-accent mx-auto mt-4" />
        </motion.div>

        {/* Marquee */}
        <div className="overflow-hidden relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex animate-marquee gap-8 w-max">
            {doubled.map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="flex items-center justify-center min-w-[140px] h-16 px-6 border border-neutral-100
                           hover:border-accent/30 hover:shadow-card transition-all duration-200 shrink-0"
              >
                <span className="font-display font-bold text-sm text-secondary hover:text-primary transition-colors whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}




