import { motion } from 'framer-motion';
import { Shield, Users, Clock, Globe, Award, Zap, CheckCircle2, ShieldCheck, Leaf } from 'lucide-react';
import { fadeUp, fadeLeft, fadeRight, stagger, viewportOnce } from '../../utils/animations';

const REASONS = [
  {
    icon: Award,
    title: 'Proven Delivery Excellence',
    desc: 'A legacy of successfully infrastructure and design execution delivered across complex terminals, highways, dams, and premium client environments.',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    accent: 'bg-blue-600',
  },
  {
    icon: Users,
    title: 'Specialist Leadership',
    desc: 'A multidisciplinary team of engineers, designers, and project leaders delivering deep technical expertise with execution discipline.',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    accent: 'bg-amber-500',
  },
  {
    icon: Shield,
    title: 'Safety & Compliance',
    desc: 'Certified systems, stringent risk protocols, and a zero-compromise approach to quality, safety, and environmental responsibility.',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    accent: 'bg-emerald-600',
  },
  {
    icon: Globe,
    title: 'Pan-India Capability',
    desc: 'Operational reach across states and regions with a strong local network, capable resources, and consistent execution standards.',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    accent: 'bg-blue-600',
  },
  {
    icon: Clock,
    title: 'Reliable Execution',
    desc: 'Structured project controls, transparent communication, and rigorous planning ensure delivery on time and within scope.',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    accent: 'bg-amber-500',
  },
  {
    icon: Zap,
    title: 'Integrated Engineering & Design',
    desc: 'A unified blend of geotechnical engineering expertise and premium interior design capability, tailored to modern project demands.',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    accent: 'bg-emerald-600',
  },
];

const CERT_BADGES = [
  { icon: CheckCircle2, label: 'Quality Assured' },
  { icon: ShieldCheck, label: 'Safety First' },
  { icon: Leaf, label: 'Sustainable Future' },
];

export default function WhyChooseUs() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-2">
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
              className="font-display font-extrabold text-3xl lg:text-4xl xl:text-[2.75rem] text-neutral-900 leading-tight mb-4"
            >
              Built on Trust,<br />
              <span className="text-accent italic">Driven by Precision</span>
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
              className="text-secondary text-base leading-relaxed mb-10"
            >
              NY Infra Services Pvt Ltd combines technical depth, refined execution, and
              client-first service to deliver reliable, elegant infrastructure and interiors.
              Our clients rely on us for projects that demand precision, accountability,
              and premium delivery.
            </motion.p>

            {/* ISO Certification Card */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="relative overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVhzMuY10tjUnZxoa_YjkeUZuex0shYrcKZ-5tFYFdcA&s=10"
                alt="NY Infra Services Pvt Ltd Engineering"
                className="w-full h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-slate-900/30" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                {/* Badge */}
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-accent/20 text-accent mb-3">
                  <CheckCircle2 size={20} />
                </div>
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-white/50 font-bold mb-1">
                  Trusted. Standards.
                </p>
                <h4 className="text-white font-display font-bold text-lg mb-1">
                  ISO 9001 : 14001 : 45001 Certified
                </h4>
                <p className="text-accent text-xs font-semibold tracking-wider mb-2">
                  CIN: U41000DC2026PTC474224
                </p>
                <p className="text-white/60 text-xs leading-relaxed mb-5">
                  Internationally recognized for environmental responsibility and
                  safety compliance across every project.
                </p>

                {/* Three badges */}
                <div className="grid grid-cols-3 gap-3">
                  {CERT_BADGES.map((b) => {
                    const BadgeIcon = b.icon;
                    return (
                      <div
                        key={b.label}
                        className="flex flex-col items-center gap-1.5 rounded-xl bg-white/10 backdrop-blur-sm py-3 px-2"
                      >
                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                          <BadgeIcon size={14} />
                        </div>
                        <span className="text-white/80 text-[0.6rem] font-semibold text-center leading-tight">
                          {b.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column — Reasons Grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {REASONS.map((r) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.title}
                  variants={fadeUp}
                  className="rounded-2xl border border-neutral-100 bg-white p-6 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group"
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${r.iconBg} ${r.iconColor}`}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display font-bold text-base text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                    {r.title}
                  </h3>
                  <div className={`w-8 h-0.5 ${r.accent} mb-3`} />
                  <p className="text-secondary text-sm leading-relaxed">{r.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
