import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { fadeUp, viewportOnce } from '../../utils/animations';
import { testimonials } from '../../data/industries';
import SectionHeading from '../common/SectionHeading';

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'text-accent fill-accent' : 'text-neutral-200'}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section bg-neutral-50">
      <div className="container-custom">
        <SectionHeading
          badge="Client Testimonials"
          title="What Our Clients Say"
          highlight="Clients Say"
          subtitle="Trusted by government agencies, developers, and homeowners across India."
          align="center"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640:  { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonial-swiper pb-12"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="card p-7 h-full flex flex-col border-t-2 border-transparent hover:border-accent transition-colors duration-300">
                  {/* Quote icon */}
                  <Quote size={32} className="text-primary/10 mb-4" />

                  {/* Stars */}
                  <StarRating rating={t.rating} />

                  {/* Content */}
                  <p className="text-secondary text-sm leading-relaxed mt-4 mb-6 flex-1 italic">
                    "{t.content}"
                  </p>

                  {/* Project tag */}
                  <span className="tag mb-4 self-start">{t.project}</span>

                  {/* Author */}
                  <div className="flex items-center gap-3 border-t border-neutral-100 pt-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-display font-bold text-sm text-neutral-900">{t.name}</p>
                      <p className="text-xs text-secondary">{t.designation}</p>
                      <p className="text-xs text-primary font-semibold">{t.company}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}




