import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { pageTransition, fadeUp, stagger, viewportOnce } from '../utils/animations';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import CTASection from '../components/home/CTASection';
import { industries } from '../data/industries';
import { projects } from '../data/projects';
import { SITE } from '../utils/constants';
import { Link } from 'react-router-dom';
import { ArrowRight, FolderCheck } from 'lucide-react';

export default function Industries() {
  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Industries Served – {SITE.name}</title>
        <meta name="description" content="NY Infra Services delivers geotechnical engineering solutions for railways, highways, airports, metro, hydropower, and border infrastructure projects across India." />
      </Helmet>

      <PageHero
        title="Industries We Serve"
        subtitle="Specialized geotechnical expertise across India's most critical infrastructure sectors."
        breadcrumbs={[{ label: 'Industries' }]}
        image="https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1920&q=80"
      />

      <section className="section">
        <div className="container-custom">
          <SectionHeading
            badge="Sectors"
            title="Our Industry Expertise"
            highlight="Industry Expertise"
            subtitle="Six specialized sectors where our geotechnical engineering creates critical impact."
            align="center"
          />
          <div className="space-y-16 mt-4">
            {industries.map((ind, i) => {
              const relatedProjects = projects.filter((p) => p.subcategory === ind.title);
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={ind.id}
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <motion.div variants={isEven ? fadeUp : fadeUp} className={!isEven ? 'lg:order-2' : ''}>
                    <img src={ind.image} alt={ind.title} className="w-full h-72 object-cover" loading="lazy" />
                  </motion.div>
                  <motion.div variants={fadeUp} className={!isEven ? 'lg:order-1' : ''}>
                    <span className="section-badge">{ind.title}</span>
                    <h2 className="font-display font-extrabold text-2xl lg:text-3xl text-neutral-900 mb-3">{ind.title}</h2>
                    <div className="line-accent" />
                    <p className="text-secondary leading-relaxed mb-5">{ind.description}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {ind.highlights.map((h) => (
                        <span key={h} className="tag-accent">{h}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 mb-5">
                      <FolderCheck size={18} className="text-accent" />
                      <span className="font-semibold text-sm text-primary">{ind.projects} Completed Projects</span>
                    </div>
                    {relatedProjects.length > 0 && (
                      <Link to={`/projects?cat=infrastructure`} className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all">
                        View Related Projects <ArrowRight size={14} />
                      </Link>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </motion.div>
  );
}




