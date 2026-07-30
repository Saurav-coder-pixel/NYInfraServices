import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Users, DollarSign, Clock, CheckCircle2 } from 'lucide-react';
import { pageTransition, fadeUp, fadeLeft, stagger, viewportOnce } from '../utils/animations';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import CTASection from '../components/home/CTASection';
import { projects, projectCategories } from '../data/projects';
import { SITE } from '../utils/constants';

function ProjectCard({ project }) {
  return (
    <motion.article variants={fadeUp} className="card card-hover group overflow-hidden border border-neutral-200 hover:border-accent transition-colors duration-300 shadow-sm hover:shadow-md">
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className={`absolute top-4 left-4 tag ${project.status === 'Ongoing' ? 'bg-accent/90 text-primary' : 'bg-white/90 text-primary'}`}>{project.status}</span>
        <span className="absolute top-4 right-4 tag bg-primary/90 text-white">{project.subcategory}</span>
      </div>
      <div className="p-6">
        <h3 className="font-display font-bold text-lg text-neutral-900 mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-secondary text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>
        <div className="mb-4">
          <p className="text-xs uppercase tracking-wider text-secondary mb-2">Technology Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.technology.slice(0, 3).map((tech) => (
              <span key={tech} className="tag bg-neutral-100 text-neutral-900 text-xs">{tech}</span>
            ))}
          </div>
        </div>
        <div className="mb-5 text-sm text-secondary">
          <ul className="space-y-2">
            {project.features.slice(0, 3).map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-3 text-xs text-secondary">
          <span className="flex items-center gap-1"><MapPin size={11} /> {project.location}</span>
          <span className="flex items-center gap-1"><Calendar size={11} /> {project.year}</span>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectsList() {
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <Helmet>
        <title>Projects – {SITE.name}</title>
        <meta name="description" content="Explore NY Infra Services' portfolio of infrastructure and interior design projects — railways, highways, airports, metro, luxury residences, and commercial spaces." />
      </Helmet>
      <PageHero title="Our Projects" subtitle="A portfolio of engineering excellence and design mastery across India." breadcrumbs={[{ label: 'Projects' }]} image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80" />
      <section className="section">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 mb-10">
            {projectCategories.map((cat) => (
              <button key={cat.id} onClick={() => setActive(cat.id)}
                className={`px-5 py-2 text-sm font-semibold uppercase tracking-wider transition-all duration-200
                  ${active === cat.id ? 'bg-primary text-white' : 'bg-white text-secondary border border-neutral-200 hover:border-primary hover:text-primary'}`}
              >{cat.label}</button>
            ))}
          </div>
          <motion.div key={active} variants={stagger} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => <ProjectCard key={project.id} project={project} />)}
          </motion.div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

function ProjectDetailPage({ project }) {
  return (
    <>
      <Helmet>
        <title>{project.title} – {SITE.name}</title>
        <meta name="description" content={project.scope} />
      </Helmet>
      <PageHero title={project.title} subtitle={project.scope} breadcrumbs={[{ label: 'Projects', path: '/projects' }, { label: project.subcategory }]} image={project.image} />

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main */}
            <div className="lg:col-span-2">
              {/* Gallery */}
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {project.gallery.map((img, i) => (
                    <img key={i} src={img} alt={`${project.title} - ${i + 1}`} className={`w-full object-cover ${i === 0 ? 'sm:col-span-2 h-72' : 'h-52'}`} loading="lazy" />
                  ))}
                </motion.div>

                {[
                  { label: 'Project Scope', content: project.scope },
                  { label: 'Challenges', content: project.challenge },
                  { label: 'Our Solution', content: project.solution },
                  { label: 'Outcome & Impact', content: project.outcome },
                ].map(({ label, content }) => (
                  <motion.div key={label} variants={fadeUp} className="mb-8">
                    <h3 className="font-display font-bold text-xl text-neutral-900 mb-3">{label}</h3>
                    <div className="w-10 h-0.5 bg-accent mb-4" />
                    <p className="text-secondary leading-relaxed">{content}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div>
              <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce} className="bg-neutral-50 p-6 mb-6">
                <h3 className="font-display font-bold text-base uppercase tracking-wider text-neutral-900 mb-5">Project Details</h3>
                {[
                  { icon: Users, label: 'Client', value: project.client },
                  { icon: MapPin, label: 'Location', value: project.location },
                  { icon: Calendar, label: 'Year', value: project.year },
                  { icon: Clock, label: 'Duration', value: project.duration },
                  { icon: DollarSign, label: 'Project Value', value: project.value },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3 py-3 border-b border-neutral-200 last:border-0">
                    <Icon size={16} className="text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-secondary uppercase tracking-wider">{label}</p>
                      <p className="font-semibold text-sm text-neutral-900 mt-0.5">{value}</p>
                    </div>
                  </div>
                ))}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => <span key={tag} className="tag text-xs">{tag}</span>)}
                </div>
              </motion.div>

              <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce} className="bg-primary text-white p-6">
                <h3 className="font-display font-bold text-base mb-3">Start a Similar Project</h3>
                <p className="text-white/70 text-sm mb-4">Let our team develop the right solution for your requirements.</p>
                <Link to="/contact" className="btn-accent w-full justify-center text-xs">Get a Quote</Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

export default function Projects() {
  const { id } = useParams();
  if (id) {
    const project = projects.find((p) => p.id === id);
    if (!project) return <motion.div {...pageTransition}><ProjectsList /></motion.div>;
    return <motion.div {...pageTransition}><ProjectDetailPage project={project} /></motion.div>;
  }
  return <motion.div {...pageTransition}><ProjectsList /></motion.div>;
}




