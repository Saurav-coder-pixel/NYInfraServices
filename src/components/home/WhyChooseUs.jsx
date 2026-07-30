import { motion } from 'framer-motion';
import { Shield, Users, Clock, Globe, Award, Zap, CheckCircle2 } from 'lucide-react';
import { fadeUp, fadeLeft, fadeRight, stagger, viewportOnce } from '../../utils/animations';
import SectionHeading from '../common/SectionHeading';

const REASONS = [
  {
    icon: Award,
    title: 'Proven Delivery Excellence',
    desc: 'A legacy of landmark infrastructure and design outcomes delivered across complex terrains, high-risk sites, and premium client environments.',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Users,
    title: 'Specialist Leadership',
    desc: 'A multidisciplinary team of engineers, designers, and project leaders combining deep technical know-how with execution discipline.',
    color: 'bg-accent/20 text-yellow-700',
  },
  {
    icon: Shield,
    title: 'Safety & Compliance',
    desc: 'Certified systems, stringent site protocols, and a zero-compromise approach to quality, safety, and environmental responsibility.',
    color: 'bg-success/10 text-success',
  },
  {
    icon: Globe,
    title: 'Pan-India Capability',
    desc: 'Operational reach across challenging geographies, from Himalayan slopes and border corridors to urban metro and aviation infrastructure.',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Clock,
    title: 'Reliable Execution',
    desc: 'Structured project controls, transparent communication, and rigorous planning ensure delivery on time and within scope.',
    color: 'bg-accent/20 text-yellow-700',
  },
  {
    icon: Zap,
    title: 'Integrated Engineering & Design',
    desc: 'A rare blend of geotechnical engineering expertise and premium interior design capability, tailored to modern project demands.',
    color: 'bg-success/10 text-success',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section relative overflow-hidden bg-slate-950 text-white">
      {/* Dark background */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-pattern-dark opacity-25 pointer-events-none" />

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
              Built on Trust,<br />
              <span className="text-accent">Driven by Precision</span>
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
              className="text-slate-200 text-base leading-relaxed mb-8 max-w-2xl"
            >
              NY Infra Services combines technical depth, refined execution, and client-first service to deliver resilient, elegant infrastructure and interiors. Our clients rely on us for projects that demand precision, accountability, and premium delivery.
            </motion.p>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="relative overflow-hidden rounded-[1.25rem] border border-white/10 shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700&q=80"
                alt="NY Infra Services Team at Work"
                className="w-full h-72 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-950/40" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5 flex flex-col gap-3 shadow-card">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/15 text-accent">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-white/60 mb-2">Trusted Standards</p>
                    <p className="text-white font-semibold text-base">ISO 9001 · 14001 · 45001 Certified</p>
                    <p className="text-white/70 text-xs mt-1">International quality, environmental responsibility, and safety compliance across every project.</p>
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
                  className="rounded-[1rem] border border-white/10 bg-slate-900/90 p-6 hover:border-accent/40 hover:bg-slate-900/95 transition-all duration-300 group shadow-card"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${r.color}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-accent transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{r.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}




