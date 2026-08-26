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

const FOUNDER = {
  name: 'Neeraj Singh Suryavanshi',
  role: 'Founder',
  image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
  desc: '15+ years of rigorous geotechnical and infrastructure engineering expertise, leading critical projects in high-altitude, glaciated terrains and complex environments across India.',
};

export default function About() {
  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>About Us – {SITE.name}</title>
        <meta name="description" content="Learn about NY Infra Services — our history, leadership team, values, and commitment to engineering excellence and design innovation." />
      </Helmet>

      <PageHero
        title="About NY Infra Services Pvt Limited"
        subtitle="Pioneering geotechnical engineering and premium interior design across India."
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
                <strong className="text-primary">NY INFRA SERVICES PVT LTD</strong> is a premier, technically-driven geotechnical and infrastructure engineering firm. Built on a solid foundation of over 15 years of rigorous industry expertise, we specialize in delivering high-end, sustainable engineering solutions for the most complex terrains and structural challenges.
              </motion.p>
              <motion.p variants={fadeUp} className="text-secondary leading-relaxed mb-6">
                Our core leadership carries a distinguished track record of executing critically important infrastructure projects in some of the world's most hostile and glaciated terrains (including prestigious border infrastructure in Ladakh). We bring this same level of military-grade precision, zero-tolerance safety, and engineering excellence to every project we undertake.
              </motion.p>
              
              <motion.div variants={fadeUp} className="bg-primary/5 p-6 border-l-4 border-primary mb-6">
                <h3 className="font-display font-bold text-lg text-neutral-900 mb-2">Our Mission</h3>
                <p className="text-secondary leading-relaxed mb-4">
                  To secure infrastructure, mitigate geological risks, and provide permanent stability to challenging terrains through innovation, integrity, and elite engineering.
                </p>
                <blockquote className="text-primary font-medium italic border-l-2 border-accent pl-4">
                  “Great infrastructure is not built by machines alone; it is built by vision, dedication, and the people behind it.”
                </blockquote>
                <p className="text-sm font-bold text-neutral-900 mt-2 ml-4">Neeraj, Founder – NY Infra Services PVT LTD</p>
              </motion.div>
              
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

      {/* Leadership */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <SectionHeading
            badge="Leadership"
            title="Founder & Leadership"
            highlight="Leadership"
            subtitle="Driven by vision, technical mastery, and dedication to engineering excellence."
            align="center"
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex justify-center mt-6"
          >
            <motion.div
              variants={fadeUp}
              className="card group text-center overflow-hidden max-w-md w-full border border-neutral-200 hover:border-accent shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src={FOUNDER.image}
                  alt={FOUNDER.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-neutral-900">{FOUNDER.name}</h3>
                <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-2 mt-1">{FOUNDER.role}</p>
                <div className="w-10 h-0.5 bg-accent mx-auto mb-3" />
                <p className="text-secondary text-sm leading-relaxed">{FOUNDER.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </motion.div>
  );
}




