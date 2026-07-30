import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FolderCheck,
  MapPin,
  HardHat,
  Award,
  ThumbsUp,
  TrendingUp,
} from 'lucide-react';
import { stagger, fadeUp, viewportOnce } from '../../utils/animations';

const STAT_ITEMS = [
  { value: 20, suffix: '+', label: 'Projects Completed',  Icon: FolderCheck },
  { value: 5,  suffix: '+', label: 'States Covered',      Icon: MapPin },
  { value: 10,  suffix: '+', label: 'Expert Engineers',    Icon: HardHat },
  { value: 5,  suffix: '+', label: 'Years of Excellence', Icon: Award },
  { value: 98,  suffix: '%', label: 'Client Satisfaction', Icon: ThumbsUp },
  { value: 50, suffix: 'Cr+', label: 'Projects Value',   Icon: TrendingUp },
];

/** Simple animated counter — replaces react-countup to avoid ESM interop issues */
function Counter({ end, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let raf;
    const animate = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      // ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);

  return <>{count}{suffix}</>;
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-primary" />
      <div className="absolute inset-0 bg-pattern-dark opacity-40" />

      {/* Decorative corner lines */}
      <div className="absolute top-0 left-0 w-48 h-48 border-t-2 border-l-2 border-accent/20" />
      <div className="absolute bottom-0 right-0 w-48 h-48 border-b-2 border-r-2 border-accent/20" />

      <div className="relative container-custom" ref={ref}>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center"
        >
          {STAT_ITEMS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="flex flex-col items-center"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-white/10 rounded-sm mb-4">
                <stat.Icon size={24} className="text-accent" />
              </div>
              <div className="font-display font-black text-5xl text-white leading-none">
                {isInView ? (
                  <Counter end={stat.value} suffix={stat.suffix} />
                ) : (
                  <span>0</span>
                )}
              </div>
              <div className="text-white/60 text-xs uppercase tracking-widest mt-2 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
