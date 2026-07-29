import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ChevronDown, ChevronUp, Send } from 'lucide-react';
import { pageTransition, fadeUp, stagger, viewportOnce } from '../utils/animations';
import PageHero from '../components/common/PageHero';
import CTASection from '../components/home/CTASection';
import { CAREERS, SITE } from '../utils/constants';

function JobCard({ job }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div variants={fadeUp} className="card border border-neutral-100 hover:border-accent transition-colors duration-300">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <h3 className="font-display font-bold text-lg text-neutral-900 mb-1">{job.title}</h3>
            <div className="flex flex-wrap gap-3 text-xs text-secondary mt-2">
              <span className="flex items-center gap-1.5 tag">{job.department}</span>
              <span className="flex items-center gap-1.5"><MapPin size={12} /> {job.location}</span>
              <span className="flex items-center gap-1.5"><Clock size={12} /> {job.type}</span>
              <span className="flex items-center gap-1.5"><Briefcase size={12} /> {job.experience}</span>
            </div>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 text-primary text-sm font-semibold shrink-0 hover:text-yellow-700 transition-colors"
          >
            {open ? 'Less Info' : 'Learn More'}
            {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-6 pt-6 border-t border-neutral-100">
            <p className="text-secondary text-sm leading-relaxed mb-4">{job.description}</p>
            <h4 className="font-display font-bold text-sm text-neutral-900 mb-3">Requirements:</h4>
            <ul className="space-y-2 mb-6">
              {job.requirements.map((req) => (
                <li key={req} className="flex items-start gap-2 text-sm text-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
            <a
              href={`mailto:careers@nyinfraservices.com?subject=Application for ${job.title}`}
              className="btn-primary text-xs"
            >
              Apply Now <Send size={14} />
            </a>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function Careers() {
  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Careers at NY Infra Services</title>
        <meta name="description" content="Join the NY Infra Services team. Exciting career opportunities in geotechnical engineering, interior design, project management, and business development." />
      </Helmet>

      <PageHero
        title="Careers at NY Infra"
        subtitle="Build your career with India's most dynamic engineering and design firm."
        breadcrumbs={[{ label: 'Careers' }]}
        image="https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=1920&q=80"
      />

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce}>
              <motion.span variants={fadeUp} className="section-badge">Life at NY Infra</motion.span>
              <motion.h2 variants={fadeUp} className="font-display font-extrabold text-3xl lg:text-4xl text-neutral-900 leading-tight mb-4">
                Where Engineering Minds<br /><span className="text-primary">and Creative Spirits</span> Thrive
              </motion.h2>
              <motion.div variants={fadeUp} className="line-accent" />
              <motion.p variants={fadeUp} className="text-secondary leading-relaxed mb-4">
                At NY Infra Services, we believe that great work comes from great people. We invest
                in our team's growth, create challenging opportunities, and build a culture of
                excellence, collaboration, and innovation.
              </motion.p>
              <motion.div variants={stagger} className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { title: 'Competitive Compensation', icon: 'Rupee' },
                  { title: 'Professional Development', icon: 'Growth' },
                  { title: 'Pan-India Exposure', icon: 'Map' },
                  { title: 'Work-Life Balance', icon: 'Balance' },
                  { title: 'Health Insurance', icon: 'Health' },
                  { title: 'Learning Opportunities', icon: 'Learn' },
                ].map((b) => (
                  <motion.div key={b.title} variants={fadeUp} className="flex items-center gap-3 p-3 bg-neutral-50 border border-neutral-100">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-sm font-semibold text-neutral-900">{b.title}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.img
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              src="https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&q=80"
              alt="Team collaboration at NY Infra Services"
              className="w-full h-96 object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <h2 className="font-display font-extrabold text-2xl text-neutral-900 mb-2">Open Positions</h2>
            <div className="w-12 h-0.5 bg-accent mb-8" />
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce} className="space-y-4">
              {CAREERS.map((job) => <JobCard key={job.id} job={job} />)}
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-10 bg-neutral-50 border border-neutral-200 p-8 text-center"
          >
            <h3 className="font-display font-bold text-xl text-neutral-900 mb-2">Don't See Your Role?</h3>
            <p className="text-secondary text-sm mb-5">Send us your resume and we will keep you in mind for future opportunities.</p>
            <a href="mailto:careers@nyinfraservices.com?subject=General Application" className="btn-primary">
              Send Your Resume <Send size={15} />
            </a>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </motion.div>
  );
}
