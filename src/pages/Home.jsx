import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { pageTransition } from '../utils/animations';
import HeroSection from '../components/home/HeroSection';
import AboutPreview from '../components/home/AboutPreview';
import EngineeringServicesSection from '../components/home/EngineeringServicesSection';
import InteriorServicesSection from '../components/home/InteriorServicesSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import FeaturedProjects from '../components/home/FeaturedProjects';
import StatsSection from '../components/home/StatsSection';
import IndustriesSection from '../components/home/IndustriesSection';
import WorkProcess from '../components/home/WorkProcess';
import ClientLogos from '../components/home/ClientLogos';
import Testimonials from '../components/home/Testimonials';
import Certifications from '../components/home/Certifications';
import CTASection from '../components/home/CTASection';
import { SITE } from '../utils/constants';

export default function Home() {
  return (
    <motion.main {...pageTransition}>
      <Helmet>
        <title>{SITE.name} – Geotechnical Engineering & Interior Design</title>
        <meta name="description" content={SITE.description} />
        <meta property="og:title" content={`${SITE.name} – Engineering Excellence`} />
        <meta property="og:description" content={SITE.description} />
        <link rel="canonical" href="https://www.nyinfraservices.com/" />
      </Helmet>

      <HeroSection />
      <AboutPreview />
      <EngineeringServicesSection />
      <StatsSection />
      <InteriorServicesSection />
      <WhyChooseUs />
      <FeaturedProjects />
      <IndustriesSection />
      <WorkProcess />
      <ClientLogos />
      <Testimonials />
      <Certifications />
      <CTASection />
    </motion.main>
  );
}




