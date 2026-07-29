import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { fadeRight, fadeLeft, fadeUp, stagger, viewportOnce } from '../../utils/animations';

const STRENGTHS = [
  'Over 150 successfully completed projects across India',
  'ISO 9001, 14001 & 45001 certified operations',
  'Expert team of geotechnical and design professionals',
  'Pan-India presence with projects in 25+ states',
  'Dual expertise: Engineering + Interior Design',
];

export default function AboutPreview() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images Grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative grid grid-cols-2 gap-4"
          >
            <motion.div variants={fadeLeft} className="col-span-2">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="NY Infra Services Engineering Team"
                className="w-full h-56 object-cover"
                loading="lazy"
              />
            </motion.div>
            <motion.div variants={fadeLeft}>
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80"
                alt="Geotechnical Investigation"
                className="w-full h-44 object-cover"
                loading="lazy"
              />
            </motion.div>
            <motion.div variants={fadeLeft}>
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80"
                alt="Interior Design Project"
                className="w-full h-44 object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              variants={fadeUp}
              className="absolute -bottom-6 -right-6 bg-accent p-6 text-primary text-center shadow-accent"
            >
              <div className="font-display font-black text-4xl">10+</div>
              <div className="text-xs font-bold uppercase tracking-wider mt-1">Years of Excellence</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.span variants={fadeUp} className="section-badge">About NY Infra Services</motion.span>

            <motion.h2 variants={fadeUp} className="font-display font-extrabold text-3xl lg:text-4xl text-neutral-900 leading-tight mb-4">
              Two Pillars of Excellence:<br />
              <span className="text-primary">Engineering</span> &{' '}
              <span className="text-yellow-700">Design</span>
            </motion.h2>

            <motion.div variants={fadeUp} className="line-accent" />

            <motion.p variants={fadeUp} className="text-secondary text-base leading-relaxed mb-4">
              NY Infra Services is a premier engineering and design firm headquartered in Gurugram,
              India. We specialize in geotechnical engineering solutions for India's most critical
              infrastructure — railways, highways, airports, metro, and hydropower — while also
              delivering premium interior design for residential, commercial, and hospitality clients.
            </motion.p>
            <motion.p variants={fadeUp} className="text-secondary text-base leading-relaxed mb-6">
              With a team of 50+ expert engineers and designers, we combine technical rigor,
              innovative thinking, and unwavering commitment to quality to deliver projects that stand
              the test of time.
            </motion.p>

            <motion.ul variants={stagger} className="space-y-3 mb-8">
              {STRENGTHS.map((s) => (
                <motion.li
                  key={s}
                  variants={fadeUp}
                  className="flex items-start gap-3 text-sm text-neutral-900"
                >
                  <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                  {s}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp}>
              <Link to="/about" className="btn-primary">
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}




