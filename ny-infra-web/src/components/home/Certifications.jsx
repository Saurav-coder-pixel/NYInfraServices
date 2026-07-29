import { motion } from 'framer-motion';
import { Award, Leaf, ShieldCheck, BadgeCheck } from 'lucide-react';
import { fadeUp, stagger, viewportOnce } from '../../utils/animations';
import { CERTIFICATIONS } from '../../utils/constants';
import SectionHeading from '../common/SectionHeading';

const ICON_MAP = { Award, Leaf, ShieldCheck, BadgeCheck };

export default function Certifications() {
  return (
    <section className="section-sm bg-white border-t border-neutral-100">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left */}
          <div className="lg:w-1/3">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="section-badge"
            >
              Quality Assurance
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="font-display font-extrabold text-3xl text-neutral-900 leading-tight mb-4"
            >
              Internationally{' '}
              <span className="text-primary">Certified</span> Standards
            </motion.h2>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="line-accent"
            />
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="text-secondary text-sm leading-relaxed"
            >
              Our operations adhere to the highest international standards across quality management,
              environmental responsibility, and occupational health & safety.
            </motion.p>
          </div>

          {/* Right: Cert cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:w-2/3 grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {CERTIFICATIONS.map((cert) => {
              const Icon = ICON_MAP[cert.icon] || Award;
              return (
                <motion.div
                  key={cert.name}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center p-6 border border-neutral-200
                             hover:border-accent hover:shadow-card transition-all duration-300 group"
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-primary/5 mb-4
                                  group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon size={24} className="text-primary group-hover:text-white" />
                  </div>
                  <p className="font-display font-extrabold text-sm text-primary mb-1">{cert.name}</p>
                  <p className="text-secondary text-xs leading-relaxed">{cert.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}




