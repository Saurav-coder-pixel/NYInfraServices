import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ArrowLeft, Layers, Mountain, Shield, Building2, Landmark, MoveDown, ScanLine, Layout } from 'lucide-react';
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
        <title>Our Services – {SITE.name}</title>
        <meta name="description" content="Comprehensive geotechnical engineering services and premium interior design." />
      </Helmet>
      <PageHero
        title="Our Services"
        subtitle="Geotechnical engineering and interior design solutions for India's most critical infrastructure projects."
        breadcrumbs={[{ label: 'Services' }]}
        image="https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?w=1920&q=80"
      />
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            badge="Our Expertise"
            title="Our Services"
            highlight="Services"
            subtitle="Comprehensive geotechnical engineering solutions and premium interior design for every project challenge."
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
            
            {/* Interior Design Card */}
            <motion.div variants={fadeUp} className="service-card group relative overflow-hidden">
              <div className="overflow-hidden mb-5" style={{aspectRatio:'16/9'}}>
                <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80" alt="Interior Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="icon-box mb-4"><Layout size={22} /></div>
              <h3 className="font-display font-bold text-lg text-neutral-900 mb-2 group-hover:text-primary transition-colors">Interior Design</h3>
              <p className="text-secondary text-sm leading-relaxed mb-4 line-clamp-3">Transforming spaces with bespoke interior design solutions. From luxury residential to modern commercial spaces, we deliver elegance and functionality.</p>
              <Link to="/interior-design" className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all">
                Learn More <ArrowRight size={14} />
              </Link>
            </motion.div>
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main content */}
            <div className="lg:col-span-2">
              <motion.div variants={stagger} initial="hidden" animate="visible">
                
                {/* Featured Image */}
                <motion.div variants={fadeUp} className="w-full h-[300px] sm:h-[450px] rounded-2xl overflow-hidden mb-10 shadow-lg relative group">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                <div className="flex items-center gap-4 mb-6">
                  <motion.div variants={fadeUp} className="w-14 h-14 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
                    <Icon size={28} />
                  </motion.div>
                  <motion.h2 variants={fadeUp} className="font-display font-extrabold text-3xl sm:text-4xl text-neutral-900 tracking-tight">
                    {service.title}
                  </motion.h2>
                </div>
                
                <motion.div variants={fadeUp} className="w-20 h-1.5 bg-accent mb-8 rounded-full" />
                
                <motion.p variants={fadeUp} className="text-secondary leading-relaxed mb-10 text-lg">
                  {service.description}
                </motion.p>

                <div className="bg-neutral-50 rounded-2xl p-8 mb-10 border border-neutral-100">
                  <motion.h3 variants={fadeUp} className="font-display font-bold text-2xl text-neutral-900 mb-6 flex items-center gap-3">
                    <CheckCircle2 className="text-primary" size={24} /> Key Features & Capabilities
                  </motion.h3>
                  <motion.ul variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                    {service.features.map((f) => (
                      <motion.li key={f} variants={fadeUp} className="flex items-start gap-3 text-neutral-700 font-medium">
                        <div className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 mt-0.5 border border-neutral-100 text-accent">
                          <CheckCircle2 size={14} />
                        </div>
                        {f}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                <motion.div variants={fadeUp} className="mb-10">
                  <h3 className="font-display font-bold text-2xl text-neutral-900 mb-6 flex items-center gap-3">
                    <Building2 className="text-primary" size={24} /> Target Applications
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {service.applications.map((a) => (
                      <span key={a} className="px-5 py-2.5 bg-white border border-neutral-200 text-neutral-700 font-semibold rounded-lg shadow-sm hover:border-primary hover:text-primary transition-colors">
                        {a}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="pt-4">
                  <Link to="/contact" className="btn-primary shadow-lg shadow-primary/30">
                    Discuss Your Project <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-white border border-neutral-100 shadow-card-hover rounded-2xl p-8 mb-8">
                  <h3 className="font-display font-bold text-lg text-neutral-900 mb-6 uppercase tracking-wider flex items-center gap-2">
                    <Layers className="text-accent" size={20} /> All Engineering Services
                  </h3>
                  <ul className="space-y-3">
                    {engineeringServices.map((s) => (
                      <li key={s.id}>
                        <Link to={`/services/${s.slug}`}
                          className={`flex items-center justify-between py-3 px-4 rounded-xl text-sm transition-all duration-300 font-medium ${
                            s.id === service.id 
                              ? 'bg-primary text-white shadow-md' 
                              : 'bg-neutral-50 text-secondary hover:bg-neutral-100 hover:text-primary'
                          }`}
                        >
                          {s.title}
                          {s.id === service.id && <ArrowRight size={14} />}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gradient-primary rounded-2xl p-8 text-white relative overflow-hidden shadow-xl shadow-primary/20">
                  <div className="absolute inset-0 bg-pattern-dark opacity-20 pointer-events-none" />
                  <div className="relative z-10">
                    <h3 className="font-display font-bold text-xl mb-4">Need Expert Advice?</h3>
                    <p className="text-white/80 text-sm mb-8 leading-relaxed">
                      Our geotechnical engineers are ready to evaluate your site and propose the optimal engineering solution.
                    </p>
                    <Link to="/contact" className="btn-accent w-full justify-center shadow-lg">
                      Contact Our Engineers
                    </Link>
                  </div>
                </div>
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




