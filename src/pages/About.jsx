import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, Target, Eye, Heart } from 'lucide-react';
import { pageTransition, fadeUp, fadeLeft, fadeRight, stagger, viewportOnce } from '../utils/animations';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import CTASection from '../components/home/CTASection';
import { SITE, STATS, CERTIFICATIONS } from '../utils/constants';

const VALUES = [
  { icon: Award,  title: 'Excellence',   desc: 'We set the highest standards in engineering precision and design quality — every project, every time.' },
  { icon: Heart,  title: 'Integrity',    desc: 'Transparent communication, honest advice, and ethical practices form the foundation of every client relationship.' },
  { icon: Target, title: 'Precision',    desc: 'Engineering demands exactness. We apply meticulous attention to detail from design to on-site execution.' },
  { icon: Users,  title: 'Collaboration',desc: 'We partner deeply with clients, understanding their goals to deliver solutions that exceed expectations.' },
  { icon: Eye,    title: 'Innovation',   desc: 'We adopt cutting-edge techniques and technologies to solve complex geotechnical and design challenges.' },
  { icon: CheckCircle2, title: 'Safety', desc: 'Zero-compromise safety culture across all operations — protecting our teams, clients, and the environment.' },
];

const TEAM = [
  { name: 'Narendra Y.', role: 'Founder & CEO', image: 'https://i.pravatar.cc/300?img=33', desc: '20+ years in geotechnical engineering across India and international markets.' },
  { name: 'Vikram Anand', role: 'Chief Engineer', image: 'https://i.pravatar.cc/300?img=34', desc: 'M.Tech Geotechnical Engineering, IIT Delhi. Expert in slope stability and deep foundations.' },
  { name: 'Priya Menon', role: 'Head of Interior Design', image: 'https://i.pravatar.cc/300?img=35', desc: '12 years luxury interior design experience across residential and hospitality sectors.' },
  { name: 'Rajan Sharma', role: 'Director – Projects', image: 'https://i.pravatar.cc/300?img=36', desc: 'Expert project director with experience across BRO, NHAI, and DMRC mega-projects.' },
];

export default function About() {
  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>About Us – {SITE.name}</title>
        <meta name="description" content="Learn about NY Infra Services — our history, leadership team, values, and commitment to engineering excellence and design innovation." />
      </Helmet>

      <PageHero
        title="About NY Infra Services"
        subtitle="Pioneering geotechnical engineering and premium interior design across India since 2015."
        breadcrumbs={[{ label: 'About Us' }]}
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
      />

      {/* Company Story */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce}>
              <motion.span variants={fadeUp} className="section-badge">Our Story</motion.span>
              <motion.h2 variants={fadeUp} className="font-display font-extrabold text-3xl lg:text-4xl text-neutral-900 leading-tight mb-4">
                Built on a Foundation of <span className="text-primary">Trust & Expertise</span>
              </motion.h2>
              <motion.div variants={fadeUp} className="line-accent" />
              <motion.p variants={fadeUp} className="text-secondary leading-relaxed mb-4">
                Founded in 2015 by Narendra Y., NY Infra Services began as a specialized geotechnical engineering consultancy with a vision to bring international standards to India's infrastructure sector.
              </motion.p>
              <motion.p variants={fadeUp} className="text-secondary leading-relaxed mb-4">
                Over the decade, we have grown into a multi-disciplinary firm with two core verticals: <strong className="text-primary">Geotechnical & Infrastructure Engineering</strong> and <strong className="text-yellow-700">Premium Interior Design</strong> — each delivering Fortune-500 quality outcomes.
              </motion.p>
              <motion.p variants={fadeUp} className="text-secondary leading-relaxed mb-6">
                From securing slopes along the Konkan Railway to designing luxury villas in Gurugram and boutique hotels in Jaipur — our portfolio spans the full breadth of India's growth story.
              </motion.p>
              <motion.ul variants={stagger} className="space-y-3">
                {['Headquarters in Gurugram, Haryana', 'Operations across 25+ states', '50+ engineers & designers on staff', '₹500 Crore+ total project value'].map((item) => (
                  <motion.li key={item} variants={fadeUp} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 size={16} className="text-accent shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce} className="space-y-4">
              <motion.img variants={fadeLeft} src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" alt="Engineering Excellence" className="w-full h-64 object-cover" loading="lazy" />
              <div className="grid grid-cols-2 gap-4">
                <motion.img variants={fadeLeft} src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80" alt="Interior Design" className="w-full h-40 object-cover" loading="lazy" />
                <motion.img variants={fadeLeft} src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&q=80" alt="Infrastructure" className="w-full h-40 object-cover" loading="lazy" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-sm bg-neutral-50 border-y border-neutral-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {STATS.map((stat) => (
              <div key={stat.label} className="p-4">
                <div className="font-display font-black text-4xl text-primary">{stat.value}{stat.suffix}</div>
                <div className="text-secondary text-xs uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading badge="Our Values" title="What Drives Us" highlight="Drives Us" subtitle="The principles that guide every decision, design, and engineering solution we deliver." align="center" />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <motion.div key={v.title} variants={fadeUp} className="service-card group text-center">
                  <div className="flex items-center justify-center w-14 h-14 bg-primary/10 text-primary mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-neutral-900 mb-2 group-hover:text-primary transition-colors">{v.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <SectionHeading badge="Leadership" title="Our Expert Team" highlight="Expert Team" subtitle="The experienced professionals who bring vision, technical mastery, and passion to every project." align="center" />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member) => (
              <motion.div key={member.name} variants={fadeUp} className="card group text-center overflow-hidden">
                <div className="overflow-hidden" style={{aspectRatio:'1/1'}}>
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-base text-neutral-900">{member.name}</h3>
                  <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-2">{member.role}</p>
                  <div className="w-8 h-0.5 bg-accent mx-auto mb-2" />
                  <p className="text-secondary text-xs leading-relaxed">{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </motion.div>
  );
}




