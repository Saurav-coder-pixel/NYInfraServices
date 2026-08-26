import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Tag } from 'lucide-react';
import { fadeUp, stagger, viewportOnce } from '../../utils/animations';
import { projects, projectCategories } from '../../data/projects';
import SectionHeading from '../common/SectionHeading';

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const featured = projects.slice(0, 6);
  const filtered = activeCategory === 'all'
    ? featured
    : featured.filter((p) => p.category === activeCategory);

  return (
    <section className="section bg-neutral-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8 gap-6">
          <SectionHeading
            badge="Our Work"
            title="Featured Work"
            highlight="Work"
            subtitle="A selection of our technical works in geotechnical engineering, slope stabilization, foundation systems, and underground infrastructure."
          />
          <Link to="/projects" className="btn-outline shrink-0 self-start lg:self-auto">
            View All Projects <ArrowRight size={15} />
          </Link>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 text-sm font-semibold uppercase tracking-wider transition-all duration-200
                ${activeCategory === cat.id
                  ? 'bg-primary text-white'
                  : 'bg-white text-secondary border border-neutral-200 hover:border-primary hover:text-primary'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          key={activeCategory}
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project) => (
            <motion.article
              key={project.id}
              variants={fadeUp}
              className="card card-hover group overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className={`absolute top-4 left-4 tag ${project.status === 'Ongoing' ? 'bg-accent/90 text-primary' : 'bg-white/90 text-primary'}`}>
                  {project.status}
                </span>
                <span className="absolute top-4 right-4 tag bg-primary/90 text-white">
                  {project.subcategory}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-base text-neutral-900 mb-3 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag bg-neutral-100 text-neutral-900 text-xs">{tag}</span>
                  ))}
                </div>
                <p className="text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.scope}
                </p>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all duration-200"
                >
                  View Details <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}




