import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { SITE } from '../../utils/constants';
import { fadeUp, stagger, viewportOnce } from '../../utils/animations';

export default function CTASection() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80)' }}
      />
      <div className="absolute inset-0 bg-gradient-primary opacity-92" />
      <div className="absolute inset-0 bg-pattern-dark opacity-30" />

      {/* Decorative accent lines */}
      <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-b from-transparent via-accent to-transparent" />

      <div className="relative container-custom">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          <div className="max-w-2xl">
            <motion.p variants={fadeUp} className="text-accent text-xs font-bold uppercase tracking-widest mb-3">
              Start Your Project Today
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display font-black text-4xl lg:text-5xl text-white leading-tight mb-5">
              Engineering Solutions for<br />India's Tomorrow
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/70 text-lg leading-relaxed">
              Whether you need geotechnical expertise for a critical infrastructure project or a
              premium interior transformation — NY Infra Services is your trusted partner.
            </motion.p>
          </div>

          <motion.div variants={fadeUp} className="flex flex-col gap-4 shrink-0">
            <Link to="/contact" className="btn-accent text-base px-8 py-4">
              Get a Free Quote <ArrowRight size={18} />
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white text-base px-8 py-4"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp Us
            </a>
            <div className="flex items-center gap-3 text-white/60 text-sm justify-center">
              <Phone size={14} />
              <a href={`tel:${SITE.phone}`} className="hover:text-white">{SITE.phone}</a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}




