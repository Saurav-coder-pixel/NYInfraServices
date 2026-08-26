import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { pageTransition, fadeUp, stagger, viewportOnce } from '../utils/animations';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import CTASection from '../components/home/CTASection';
import { interiorServices } from '../data/interiorServices';
import { SITE } from '../utils/constants';

export default function InteriorDesign() {
  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Interior Design Services – {SITE.name}</title>
        <meta name="description" content="Thoughtful interior design for bedrooms, drawing rooms, dining spaces, kitchens, and exteriors." />
      </Helmet>

      <PageHero
        title="Interior Design Services"
        subtitle="Transforming spaces into extraordinary experiences through design, craftsmanship, and innovation."
        breadcrumbs={[{ label: 'Interior Design' }]}
        image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"
      />

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.5fr] gap-10 lg:gap-20 items-end mb-14">
            <SectionHeading badge="What We Create" title="Rooms With A Point Of View" highlight="Point Of View" subtitle="Refined spaces shaped around how you live, gather, cook, and connect." />
            <div className="lg:pb-10 lg:max-w-md">
              <p className="text-secondary leading-relaxed mb-6">From the first sketch to the final finish, every detail is selected to make your space feel unmistakably yours.</p>
              <Link to="/contact" className="btn-primary">Discuss Your Space <ArrowUpRight size={16} /></Link>
            </div>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
          >
            {interiorServices.map((service, index) => (
              <motion.article
                key={service.id}
                variants={fadeUp}
                className="group relative aspect-[4/5] overflow-hidden bg-primary"
              >
                <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7">
                  <span className="text-accent text-xs font-bold tracking-widest">0{index + 1}</span>
                  <h3 className="font-display font-bold text-2xl text-white mt-2">{service.title}</h3>
                  <Link to="/contact" aria-label={`Discuss your ${service.title} project`} className="inline-flex items-center gap-2 text-white/75 text-sm mt-4 group-hover:text-accent transition-colors">
                    Start a conversation <ArrowUpRight size={15} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </motion.div>
  );
}




