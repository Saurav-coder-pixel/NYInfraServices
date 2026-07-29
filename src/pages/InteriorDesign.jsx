import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { pageTransition, fadeUp, stagger, viewportOnce } from '../utils/animations';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import CTASection from '../components/home/CTASection';
import { interiorCategories, interiorServices } from '../data/interiorServices';
import { SITE } from '../utils/constants';

const PROCESS = [
  { step: '01', title: 'Concept & Vision', desc: 'We begin with a detailed discovery session to understand your lifestyle, preferences, and functional needs.' },
  { step: '02', title: '3D Design & Planning', desc: 'Our designers create photorealistic 3D renders and detailed floor plans for your complete review and approval.' },
  { step: '03', title: 'Material & Finish Selection', desc: 'We guide you through curated selections of premium materials, finishes, hardware, and furnishings.' },
  { step: '04', title: 'Execution & Delivery', desc: 'Our skilled craftsmen execute the design with precision, delivered on schedule and within budget.' },
];

export default function InteriorDesign() {
  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Interior Design Services – {SITE.name}</title>
        <meta name="description" content="Premium interior design for homes, offices, hotels, and retail spaces. Modular kitchens, wardrobes, false ceilings, lighting design, and turnkey solutions." />
      </Helmet>

      <PageHero
        title="Interior Design Services"
        subtitle="Transforming spaces into extraordinary experiences through design, craftsmanship, and innovation."
        breadcrumbs={[{ label: 'Interior Design' }]}
        image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"
      />

      {/* Categories */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            badge="Our Interior Design Verticals"
            title="Spaces We Design"
            highlight="Design"
            subtitle="Six specialized interior design verticals delivering tailored solutions for every space type."
          />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {interiorCategories.map((cat) => (
              <motion.div key={cat.id} variants={fadeUp} className="group relative overflow-hidden cursor-pointer" style={{aspectRatio:'4/3'}}>
                <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute inset-0 p-7 flex flex-col justify-end">
                  <h3 className="font-display font-bold text-2xl text-white mb-2">{cat.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">{cat.description}</p>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-accent text-sm font-semibold hover:gap-3 transition-all opacity-0 group-hover:opacity-100">
                    Get a Quote <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <SectionHeading badge="What We Offer" title="Our Interior Services" highlight="Interior Services" subtitle="Comprehensive interior solutions from concept to completion." align="center" />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {interiorServices.map((s) => (
              <motion.div key={s.id} variants={fadeUp} className="card group text-center p-6 hover:border-accent border border-transparent transition-all duration-300 cursor-pointer">
                <div className="overflow-hidden mb-4" style={{aspectRatio:'1/1', maxHeight:100}}>
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <p className="font-display font-semibold text-sm text-neutral-900 group-hover:text-primary transition-colors">{s.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Design Process */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading badge="Our Process" title="How We Bring Your Vision to Life" highlight="Vision" subtitle="A seamless 4-step design process built around your needs." />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((p, i) => (
              <motion.div key={p.step} variants={fadeUp} className="relative pl-8 border-l-2 border-accent">
                <span className="font-display font-black text-5xl text-primary/10 absolute -left-2 top-0 leading-none">{p.step}</span>
                <div className="timeline-dot" />
                <h3 className="font-display font-bold text-lg text-neutral-900 mb-2 mt-1">{p.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why choose interior design section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce}>
              <motion.span variants={fadeUp} className="section-badge">Why Choose Our Design</motion.span>
              <motion.h2 variants={fadeUp} className="font-display font-extrabold text-3xl lg:text-4xl text-neutral-900 leading-tight mb-4">
                Premium Design.<br /><span className="text-primary">Exceptional Value.</span>
              </motion.h2>
              <motion.div variants={fadeUp} className="line-accent" />
              <motion.ul variants={stagger} className="space-y-4">
                {['In-house team of experienced designers and craftsmen','Photorealistic 3D visualization before execution begins','Premium materials sourced from across India and internationally','Turnkey delivery — design, supply, installation, and handover','Post-project support and maintenance services','Competitive pricing with transparent quotations'].map((item) => (
                  <motion.li key={item} variants={fadeUp} className="flex items-start gap-3 text-sm text-neutral-900">
                    <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" /> {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80" alt="Living Room" className="w-full h-64 object-cover col-span-2" loading="lazy" />
              <img src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&q=80" alt="Bedroom" className="w-full h-40 object-cover" loading="lazy" />
              <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80" alt="Kitchen" className="w-full h-40 object-cover" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </motion.div>
  );
}




