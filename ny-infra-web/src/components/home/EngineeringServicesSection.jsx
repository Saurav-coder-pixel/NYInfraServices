import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Mountain,
  Shield,
  Layers,
  Building2,
  Landmark,
  MoveDown,
  ScanLine,
  Wrench,
  Anchor,
  PenTool,
} from 'lucide-react';
import { fadeUp, stagger, viewportOnce } from '../../utils/animations';
import SectionHeading from '../common/SectionHeading';
import { engineeringServices } from '../../data/services';

const ICON_MAP = {
  Mountain,
  Shield,
  Columns: Layers,
  Layers,
  Building2,
  Landmark,
  ArrowDownToLine: MoveDown,
  MoveDown,
  ScanLine,
  Wrench,
  Anchor,
  PenTool,
};

function ServiceIcon({ name, size = 22, className = '' }) {
  const Icon = ICON_MAP[name] || Layers;
  try {
    return <Icon size={size} className={className} />;
  } catch {
    return <Layers size={size} className={className} />;
  }
}

export default function EngineeringServicesSection() {
  const displayed = engineeringServices.slice(0, 6);

  return (
    <section className="section bg-neutral-50 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 pointer-events-none" />

      <div className="container-custom relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
          <SectionHeading
            badge="Geotechnical &amp; Civil Engineering"
            title="Engineering Services"
            highlight="Engineering"
            subtitle="Comprehensive geotechnical solutions for India's most demanding infrastructure projects."
          />
          <Link to="/services" className="btn-outline shrink-0 self-start lg:self-auto">
            All Services <ArrowRight size={15} />
          </Link>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayed.map((service) => (
            <motion.article
              key={service.id}
              variants={fadeUp}
              className="card card-hover p-8 cursor-pointer border-b-4 border-transparent hover:border-accent group"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-primary/10 text-primary rounded-sm transition-all duration-300 group-hover:bg-primary group-hover:text-white mb-5">
                <ServiceIcon name={service.icon} size={24} />
              </div>

              <h3 className="font-display font-bold text-lg text-neutral-900 mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed mb-5 line-clamp-3">
                {service.description}
              </p>

              <Link
                to={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all duration-200"
                aria-label={`Learn more about ${service.title}`}
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 bg-primary text-white p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="font-display font-bold text-xl">Have a geotechnical challenge?</p>
            <p className="text-white/70 text-sm mt-1">Our engineers are ready to develop the right solution for your project.</p>
          </div>
          <Link to="/contact" className="btn-accent shrink-0">
            Consult Our Engineers <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
