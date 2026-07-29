import { motion } from 'framer-motion';
import { fadeRight, fadeUp, viewportOnce } from '../../utils/animations';

/**
 * Reusable SectionHeading component.
 * Props:
 *   badge   – small label above title (string)
 *   title   – main heading (string)
 *   highlight – word(s) to highlight in accent color (string)
 *   subtitle – paragraph below title (string)
 *   align   – 'left' | 'center' | 'right' (default: 'left')
 *   light   – true for white text (dark backgrounds)
 */
export default function SectionHeading({ badge, title, highlight, subtitle, align = 'left', light = false }) {
  const alignClass = {
    left:   'items-start text-left',
    center: 'items-center text-center',
    right:  'items-end text-right',
  }[align] || 'items-start text-left';

  const headingColor = light ? 'text-white' : 'text-neutral-900';
  const subtitleColor = light ? 'text-white/70' : 'text-secondary';

  // Highlight word in title
  const renderTitle = () => {
    if (!highlight) return title;
    const parts = title.split(highlight);
    if (parts.length === 1) return title;
    return (
      <>
        {parts[0]}
        <span className="text-accent">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <motion.div
      className={`flex flex-col ${alignClass} mb-10`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {badge && (
        <motion.span variants={fadeRight} className="section-badge">
          {badge}
        </motion.span>
      )}

      <motion.h2
        variants={fadeUp}
        className={`font-display font-extrabold text-3xl lg:text-4xl xl:text-5xl ${headingColor} leading-tight max-w-2xl`}
      >
        {renderTitle()}
      </motion.h2>

      <motion.div variants={fadeUp} className={`w-14 h-1 bg-accent mt-5 mb-5 ${align === 'center' ? 'mx-auto' : ''}`} />

      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={`${subtitleColor} text-base lg:text-lg leading-relaxed max-w-2xl`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}




