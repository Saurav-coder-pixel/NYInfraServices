import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Play, Shield, Award, TrendingUp } from 'lucide-react';
import { fadeUp, stagger } from '../../utils/animations';

const HERO_SLIDES = [
  {
    headline: 'Engineering\nthe Future',
    sub: `India's premier geotechnical engineering firm delivering slope stabilization, rockfall mitigation, and ground solutions for critical infrastructure.`,
    tag: 'Geotechnical Engineering',
    cta: { label: 'Explore Services', path: '/services' },
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=85',
  },
  {
    headline: 'Securing Every\nSlope & Ground',
    sub: `From Himalayan highways to metro foundations — NY Infra Services protects India's most critical infrastructure with precision geo-engineering.`,
    tag: 'Infrastructure Excellence',
    cta: { label: 'View Projects', path: '/projects' },
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85',
  },
  {
    headline: 'Spaces That\nInspire',
    sub: 'Transforming residential homes, corporate offices, and hospitality spaces into exceptional environments through premium interior design.',
    tag: 'Premium Interior Design',
    cta: { label: 'Interior Design', path: '/interior-design' },
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=85',
  },
];

const BADGES = [
  { icon: Shield, label: 'ISO Certified' },
  { icon: Award, label: '150+ Projects' },
  { icon: TrendingUp, label: '10+ Years' },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoRef = useRef(null);

  const goTo = (idx) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(idx);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  useEffect(() => {
    autoRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(autoRef.current);
  }, []);

  const slide = HERO_SLIDES[current];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" aria-label="Hero Banner">
      {/* Background Images */}
      {HERO_SLIDES.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
          aria-hidden="true"
        >
          <img
            src={s.image}
            alt=""
            className="w-full h-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      {/* Overlay layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/70 to-primary/30" />
      <div className="absolute inset-0 bg-pattern-dark opacity-30" />

      {/* Accent bar left */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-accent via-accent/50 to-transparent" />

      {/* Main Content */}
      <div className="relative container-custom pt-28 pb-24 flex flex-col lg:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 max-w-2xl">
          {/* Tag */}
          <motion.div
            key={`tag-${current}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-5"
          >
            <span className="w-8 h-px bg-accent" />
            <span className="text-accent text-xs font-bold uppercase tracking-widest">{slide.tag}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            key={`h1-${current}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black text-5xl lg:text-6xl xl:text-7xl text-white leading-tight whitespace-pre-line mb-6"
          >
            {slide.headline}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            key={`sub-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-white/75 text-lg leading-relaxed max-w-lg mb-8"
          >
            {slide.sub}
          </motion.p>

          {/* CTAs */}
          <motion.div
            key={`cta-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to={slide.cta.path} className="btn-accent">
              {slide.cta.label} <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn-outline-white">
              Get a Free Quote
            </Link>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            {BADGES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-white/60 text-xs font-medium">
                <Icon size={14} className="text-accent" />
                {label}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats Card — desktop only */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex flex-col gap-4 shrink-0"
        >
          {[
            { value: '150+', label: 'Projects Completed' },
            { value: '10+',  label: 'Years Experience' },
            { value: '98%',  label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="glass px-7 py-5 text-center min-w-[160px]">
              <div className="font-display font-black text-4xl text-accent">{stat.value}</div>
              <div className="text-white/60 text-xs mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1 rounded-full transition-all duration-500
              ${i === current ? 'w-10 bg-accent' : 'w-4 bg-white/30 hover:bg-white/60'}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-8 flex flex-col items-center gap-2 text-white/40 text-xs hidden lg:flex">
        <span className="tracking-widest uppercase" style={{writingMode:'vertical-rl'}}>Scroll</span>
        <ChevronDown size={14} className="animate-bounce" />
      </div>

      {/* Diagonal bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{clipPath:'polygon(0 100%,100% 0,100% 100%)'}} />
    </section>
  );
}




