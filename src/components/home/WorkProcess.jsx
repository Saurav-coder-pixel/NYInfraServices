import { motion } from 'framer-motion';
import { ScanLine, PenTool, ClipboardCheck, HardHat, BadgeCheck, Handshake } from 'lucide-react';
import { fadeUp, stagger, viewportOnce } from '../../utils/animations';
import { PROCESS_STEPS } from '../../utils/constants';
import SectionHeading from '../common/SectionHeading';

const ICON_MAP = { ScanLine, PenTool, ClipboardCheck, HardHat, BadgeCheck, Handshake };

export default function WorkProcess() {
  return (
    <section className="section bg-neutral-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-40" />

      <div className="relative container-custom">
        <SectionHeading
          badge="How We Work"
          title="Our Work Process"
          highlight="Work Process"
          subtitle="A disciplined, transparent approach from site investigation to project handover."
          align="center"
        />

        {/* Steps */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative"
        >
          {/* Connecting line desktop */}
          <div className="hidden lg:block absolute top-16 left-[8.33%] right-[8.33%] h-0.5 bg-neutral-200" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = ICON_MAP[step.icon] || HardHat;
              return (
                <motion.div
                  key={step.step}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center"
                >
                  {/* Step circle */}
                  <div className="relative mb-6 z-10">
                    <div className="w-14 h-14 rounded-full bg-white border-2 border-primary/20 flex items-center justify-center shadow-card group-hover:border-accent transition-colors">
                      <Icon size={22} className="text-primary" />
                    </div>
                    {/* Step number badge */}
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-primary text-xs font-extrabold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-sm text-neutral-900 mb-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-secondary text-xs leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}




