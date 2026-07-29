import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ArrowLeft, Layers, Mountain, Shield, Building2, Landmark, MoveDown, ScanLine } from 'lucide-react';
import { pageTransition, fadeUp, fadeLeft, stagger, viewportOnce } from '../utils/animations';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import CTASection from '../components/home/CTASection';
import { engineeringServices } from '../data/services';
import { SITE } from '../utils/constants';

const ICON_MAP = { Mountain, Shield, Columns: Layers, Layers, Building2, Landmark, ArrowDownToLine: MoveDown, MoveDown, ScanLine };

function AllServices() {
  return (
    <>
      <Helmet>
        <title>Engineering Services – {SITE.name}</title>
        <meta name="description" content="Comprehensive geotechnical engineering services: slope stabilization, rockfall mitigation, shoring, piling, MSE walls, and geotechnical investigation." />
      </Helmet>
      <PageHero
        title="Engineering Services"
        subtitle="Geotechnical and civil engineering solutions for India's most critical infrastructure projects."
        breadcrumbs={[{ label: 'Services' }]}
        image="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1920&q=80"
      />
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            badge="Geotechnical Excellence"
            title="Our Engineering Services"
            highlight="Engineering Services"
            subtitle="From slope stabilization to deep foundation engineering — comprehensive solutions for every ground challenge."
            align="center"
          />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {engineeringServices.map((service) => {
              const Icon = ICON_MAP[service.icon] || Layers;
              return (
                <motion.div key={service.id} variants={fadeUp} className="service-card group relative overflow-hidden">
                  {/* Top image */}
                  <div className="overflow-hidden mb-5" style={{aspectRatio:'16/9'}}>
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="icon-box mb-4"><Icon size={22} /></div>
                  <h3 className="font-display font-bold text-lg text-neutral-900 mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed mb-4 line-clamp-3">{service.description}</p>
                  <Link to={`/services/${service.slug}`} className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

function ServiceDetail({ service }) {
  const Icon = ICON_MAP[service.icon] || Layers;
  return (
    <>
      <Helmet>
        <title>{service.title} – {SITE.name}</title>
        <meta name="description" content={service.description} />
      </Helmet>
      <PageHero
        title={service.title}
        subtitle={service.tagline}
        breadcrumbs={[{ label: 'Services', path: '/services' }, { label: service.title }]}
        image={service.image}
      />
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                <motion.div variants={fadeUp} className="icon-box-accent w-14 h-14 mb-6">
                  <Icon size={26} />
                </motion.div>
                <motion.h2 variants={fadeUp} className="font-display font-extrabold text-3xl text-neutral-900 mb-4">{service.title}</motion.h2>
                <motion.div variants={fadeUp} className="line-accent" />
                <motion.p variants={fadeUp} className="text-secondary leading-relaxed mb-8 text-lg">{service.description}</motion.p>

                <motion.h3 variants={fadeUp} className="font-display font-bold text-xl text-neutral-900 mb-4">Key Features</motion.h3>
                <motion.ul variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((f) => (
                    <motion.li key={f} variants={fadeUp} className="flex items-start gap-3 text-sm text-neutral-900">
                      <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" /> {f}
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.h3 variants={fadeUp} className="font-display font-bold text-xl text-neutral-900 mb-4">Applications</motion.h3>
                <motion.div variants={stagger} className="flex flex-wrap gap-2 mb-8">
                  {service.applications.map((a) => (
                    <motion.span key={a} variants={fadeUp} className="tag-accent">{a}</motion.span>
                  ))}
                </motion.div>

                <motion.div variants={fadeUp}>
                  <Link to="/contact" className="btn-primary">Discuss Your Project <ArrowRight size={15} /></Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-neutral-50 p-6 mb-6">
                <h3 className="font-display font-bold text-base text-neutral-900 mb-4 uppercase tracking-wider">All Engineering Services</h3>
                <ul className="space-y-2">
                  {engineeringServices.map((s) => (
                    <li key={s.id}>
                      <Link to={`/services/${s.slug}`}
                        className={`block py-2 px-3 text-sm transition-colors ${s.id === service.id ? 'bg-primary text-white font-semibold' : 'text-secondary hover:text-primary hover:bg-primary/5'}`}
                      >{s.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary text-white p-6">
                <h3 className="font-display font-bold text-base mb-3">Need Expert Advice?</h3>
                <p className="text-white/70 text-sm mb-4">Our geotechnical engineers are ready to consult on your project.</p>
                <Link to="/contact" className="btn-accent w-full justify-center text-xs">
                  Contact Our Engineers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

export default function Services() {
  const { slug } = useParams();
  if (slug) {
    const service = engineeringServices.find((s) => s.slug === slug);
    if (!service) return <AllServices />;
    return <motion.div {...pageTransition}><ServiceDetail service={service} /></motion.div>;
  }
  return <motion.div {...pageTransition}><AllServices /></motion.div>;
}




