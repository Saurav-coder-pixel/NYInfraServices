import { motion } from 'framer-motion';
import { Shield, Users, Clock, Globe, Award, Zap, CheckCircle2 } from 'lucide-react';
import { fadeUp, fadeLeft, fadeRight, stagger, viewportOnce } from '../../utils/animations';
import SectionHeading from '../common/SectionHeading';

const REASONS = [
  {
    icon: Award,
    title: 'Proven Track Record',
    desc: `Over 150 successfully completed projects across India's most demanding terrain and environments.`,
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Users,
    title: 'Expert Team',
    desc: '50+ certified geotechnical engineers, designers, and project managers with deep domain expertise.',
    color: 'bg-accent/20 text-yellow-700',
  },
  {
    icon: Shield,
    title: 'Safety First',
    desc: 'ISO 45001 certified operations with zero-compromise safety protocols on every project site.',
    color: 'bg-success/10 text-success',
  },
  {
    icon: Globe,
    title: 'Pan-India Presence',
    desc: 'Active operations in 25+ states, from Himalayan slopes to coastal infrastructure projects.',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    desc: 'Disciplined project management ensures on-time, within-budget delivery with no compromise on quality.',
    color: 'bg-accent/20 text-yellow-700',
  },
  {
    icon: Zap,
    title: 'Dual Expertise',
    desc: 'Unique combination of heavy geotechnical engineering and premium interior design under one roof.',
    color: 'bg-success/10 text-success',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section relative overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-gradient-dark bg-pattern-dark" />

      <div className="relative container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Heading + image */}
          <div>
            <motion.span
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="section-badge"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="font-display font-extrabold text-4xl lg:text-5xl text-white leading-tight mb-5"
            >
              The NY Infra<br />
              <span className="text-accent">Difference</span>
            </motion.h2>
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="w-14 h-1 bg-accent mb-6"
            />
            <motion.p
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="text-white/70 text-base leading-relaxed mb-8"
            >
              We don't just deliver projects — we deliver confidence. Our engineering precision,
              design excellence, and commitment to our clients sets us apart in every project we undertake.
            </motion.p>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="relative overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700&q=80"
                alt="NY Infra Services Team at Work"
                className="w-full h-72 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/30" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass p-4 flex items-center gap-4">
                  <CheckCircle2 size={32} className="text-accent shrink-0" />
                  <div>
                    <p className="text-white font-bold text-sm">ISO 9001 · 14001 · 45001 Certified</p>
                    <p className="text-white/60 text-xs">International quality, environmental & safety standards</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Reasons Grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {REASONS.map((r) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.title}
                  variants={fadeUp}
                  className="glass p-6 hover:border-accent/40 transition-all duration-300 group"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-sm mb-4 ${r.color}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display font-bold text-base text-white mb-2 group-hover:text-accent transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">{r.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}




