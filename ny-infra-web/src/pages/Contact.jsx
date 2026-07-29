import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { pageTransition, fadeUp, stagger, viewportOnce } from '../utils/animations';
import PageHero from '../components/common/PageHero';
import { SITE } from '../utils/constants';

const ENQUIRY_TYPES = [
  'Geotechnical Engineering',
  'Slope Stabilization',
  'Rockfall Mitigation',
  'Shoring & Piling',
  'Interior Design',
  'Project Enquiry',
  'Partnership',
  'Careers',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', enquiry: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!form.phone.trim())   e.phone = 'Phone is required';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setStatus('submitting');
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('success');
  };

  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Contact Us – {SITE.name}</title>
        <meta name="description" content="Get in touch with NY Infra Services for geotechnical engineering, interior design consultations, project enquiries, or career opportunities." />
      </Helmet>

      <PageHero title="Contact Us" subtitle="Reach out to our team for project consultations, enquiries, or partnership opportunities." breadcrumbs={[{ label: 'Contact' }]} image="https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=1920&q=80" />

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce} className="lg:col-span-1">
              <motion.h2 variants={fadeUp} className="font-display font-extrabold text-2xl text-neutral-900 mb-4">Get In Touch</motion.h2>
              <motion.div variants={fadeUp} className="line-accent" />
              <motion.p variants={fadeUp} className="text-secondary text-sm leading-relaxed mb-8">
                Our team of experts is ready to discuss your project requirements and provide tailored solutions.
              </motion.p>

              {[
                { icon: Phone, label: 'Phone', values: [SITE.phone, SITE.phone2], href: `tel:${SITE.phone}` },
                { icon: Mail,  label: 'Email', values: [SITE.email, SITE.email2], href: `mailto:${SITE.email}` },
                { icon: MapPin, label: 'Address', values: [SITE.address] },
              ].map(({ icon: Icon, label, values, href }) => (
                <motion.div key={label} variants={fadeUp} className="flex gap-4 mb-6 p-5 border border-neutral-100 hover:border-accent transition-colors">
                  <div className="icon-box shrink-0 w-11 h-11"><Icon size={18} /></div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-secondary mb-1">{label}</p>
                    {values.map((v) =>
                      href ? <a key={v} href={href} className="block text-sm text-neutral-900 hover:text-primary transition-colors">{v}</a>
                           : <p key={v} className="text-sm text-neutral-900">{v}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              <motion.div variants={fadeUp} className="p-5 border border-neutral-100">
                <div className="flex gap-4">
                  <div className="icon-box shrink-0 w-11 h-11"><Clock size={18} /></div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-secondary mb-2">Office Hours</p>
                    <p className="text-sm text-neutral-900">{SITE.officeHours.weekdays}</p>
                    <p className="text-sm text-neutral-900">{SITE.officeHours.saturday}</p>
                    <p className="text-sm text-red-500">{SITE.officeHours.sunday}</p>
                  </div>
                </div>
              </motion.div>

              {/* WhatsApp */}
              <motion.a
                variants={fadeUp}
                href={`https://wa.me/${SITE.whatsapp}?text=Hello, I would like to enquire about NY Infra Services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 mt-6 p-4 bg-green-600 text-white hover:bg-green-700 transition-colors"
              >
                <MessageCircle size={20} />
                <span className="font-semibold text-sm">Chat on WhatsApp</span>
              </motion.a>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce} className="lg:col-span-2">
              <motion.div variants={fadeUp} className="bg-neutral-50 p-8 border border-neutral-100">
                <h2 className="font-display font-extrabold text-2xl text-neutral-900 mb-6">Send Us a Message</h2>

                {status === 'success' ? (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12">
                    <CheckCircle2 size={48} className="text-success mx-auto mb-4" />
                    <h3 className="font-display font-bold text-xl text-neutral-900 mb-2">Message Sent!</h3>
                    <p className="text-secondary">Thank you for reaching out. Our team will contact you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      {[
                        { name: 'name',    label: 'Full Name *',    type: 'text',  placeholder: 'Your full name' },
                        { name: 'email',   label: 'Email Address *', type: 'email', placeholder: 'your@email.com' },
                        { name: 'phone',   label: 'Phone Number *', type: 'tel',   placeholder: '+91 XXXXX XXXXX' },
                        { name: 'company', label: 'Company / Organization', type: 'text', placeholder: 'Company name' },
                      ].map(({ name, label, type, placeholder }) => (
                        <div key={name}>
                          <label htmlFor={`contact-${name}`} className="form-label">{label}</label>
                          <input
                            id={`contact-${name}`}
                            name={name}
                            type={type}
                            placeholder={placeholder}
                            value={form[name]}
                            onChange={handleChange}
                            className={`form-input ${errors[name] ? 'border-red-500' : ''}`}
                          />
                          {errors[name] && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors[name]}</p>}
                        </div>
                      ))}
                    </div>

                    <div className="mb-5">
                      <label htmlFor="contact-enquiry" className="form-label">Enquiry Type</label>
                      <select id="contact-enquiry" name="enquiry" value={form.enquiry} onChange={handleChange} className="form-input">
                        <option value="">Select enquiry type</option>
                        {ENQUIRY_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="contact-message" className="form-label">Message *</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        placeholder="Tell us about your project or enquiry..."
                        value={form.message}
                        onChange={handleChange}
                        className={`form-textarea ${errors.message ? 'border-red-500' : ''}`}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.message}</p>}
                    </div>

                    <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full justify-center">
                      {status === 'submitting' ? (
                        <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</span>
                      ) : (
                        <span className="flex items-center gap-2"><Send size={16} />Send Message</span>
                      )}
                    </button>

                    <p className="text-secondary text-xs mt-4 text-center">
                      By submitting this form, you agree to be contacted by NY Infra Services regarding your enquiry.
                    </p>
                  </form>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="border-t border-neutral-100">
        <div className="container-custom py-12">
          <h2 className="font-display font-bold text-xl text-neutral-900 mb-6">Our Location</h2>
          <div className="w-full h-80 bg-neutral-100 overflow-hidden">
            <iframe
              title="NY Infra Services Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.5!2d77.0266!3d28.4595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI3JzM0LjIiTiA3N8KwMDEnMzUuOCJF!5e0!3m2!1sen!2sin!4v1620000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
}




