import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ChevronDown, ChevronUp, Send, AlertCircle, CheckCircle2, UploadCloud } from 'lucide-react';
import { pageTransition, fadeUp, stagger, viewportOnce } from '../utils/animations';
import PageHero from '../components/common/PageHero';
import CTASection from '../components/home/CTASection';
import { CAREERS, SITE } from '../utils/constants';

function JobCard({ job }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div variants={fadeUp} className="card border border-neutral-100 hover:border-accent transition-colors duration-300">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <h3 className="font-display font-bold text-lg text-neutral-900 mb-1">{job.title}</h3>
            <div className="flex flex-wrap gap-3 text-xs text-secondary mt-2">
              <span className="flex items-center gap-1.5 tag">{job.department}</span>
              <span className="flex items-center gap-1.5"><MapPin size={12} /> {job.location}</span>
              <span className="flex items-center gap-1.5"><Clock size={12} /> {job.type}</span>
              <span className="flex items-center gap-1.5"><Briefcase size={12} /> {job.experience}</span>
            </div>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 text-primary text-sm font-semibold shrink-0 hover:text-yellow-700 transition-colors"
          >
            {open ? 'Less Info' : 'Learn More'}
            {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-6 pt-6 border-t border-neutral-100">
            <p className="text-secondary text-sm leading-relaxed mb-4">{job.description}</p>
            <h4 className="font-display font-bold text-sm text-neutral-900 mb-3">Requirements:</h4>
            <ul className="space-y-2 mb-6">
              {job.requirements.map((req) => (
                <li key={req} className="flex items-start gap-2 text-sm text-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${SITE.email}?subject=Application for ${job.title}`}
              className="btn-primary text-xs"
            >
              Apply Now <Send size={14} />
            </a>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function Careers() {
  const [resumeForm, setResumeForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    message: '',
    website: '',
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeStatus, setResumeStatus] = useState('idle');
  const [resumeErrors, setResumeErrors] = useState({});
  const [resumeError, setResumeError] = useState('');

  const validateResumeForm = () => {
    const errors = {};
    if (!resumeForm.fullName.trim()) errors.fullName = 'Full name is required';
    if (!resumeForm.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errors.email = 'A valid email is required';
    if (!resumeForm.phone.trim()) errors.phone = 'Phone number is required';
    if (!resumeForm.role.trim()) errors.role = 'Role is required';
    if (!resumeFile) errors.resume = 'Resume upload is required';

    if (resumeFile) {
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ];
      const maxSize = 10 * 1024 * 1024;
      if (!allowedTypes.includes(resumeFile.type)) {
        errors.resume = 'Only PDF, DOC, and DOCX files are supported';
      } else if (resumeFile.size > maxSize) {
        errors.resume = 'Resume size must be 10 MB or less';
      }
    }

    return errors;
  };

  const handleResumeChange = (e) => {
    setResumeForm({ ...resumeForm, [e.target.name]: e.target.value });
  };

  const handleResumeFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setResumeFile(file);
    if (resumeErrors.resume) {
      setResumeErrors((prev) => ({ ...prev, resume: '' }));
    }
  };

  const fileToBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = () => reject(new Error('Unable to read the selected file.'));
    reader.readAsDataURL(file);
  });

  const handleResumeSubmit = async (e) => {
    e.preventDefault();

    const errors = validateResumeForm();
    if (resumeForm.website.trim()) {
      setResumeErrors({ website: 'Spam protection blocked the submission.' });
      setResumeStatus('error');
      setResumeError('Spam protection blocked the submission.');
      return;
    }

    if (Object.keys(errors).length > 0) {
      setResumeErrors(errors);
      setResumeStatus('error');
      setResumeError('Please correct the highlighted fields before submitting.');
      return;
    }

    setResumeErrors({});
    setResumeStatus('submitting');
    setResumeError('');

    try {
      const apiKey = import.meta.env.VITE_RESEND_API_KEY;
      const fromEmail = import.meta.env.VITE_RESEND_FROM_EMAIL || 'onboarding@resend.dev';
      const toEmail = import.meta.env.VITE_RESEND_TO_EMAIL || 'sura767848@gmail.com';

      if (!apiKey) {
        throw new Error('Email delivery is not configured for this deployment yet. Add the Resend environment variables to send resumes.');
      }

      const base64Content = await fileToBase64(resumeFile);
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          subject: `Resume Submission - ${resumeForm.role.trim()}`,
          html: `
            <p><strong>Name:</strong> ${resumeForm.fullName.trim()}</p>
            <p><strong>Email:</strong> ${resumeForm.email.trim()}</p>
            <p><strong>Phone:</strong> ${resumeForm.phone.trim()}</p>
            <p><strong>Role Applied For:</strong> ${resumeForm.role.trim()}</p>
            <p><strong>Cover Letter / Message:</strong><br />${(resumeForm.message || 'No cover letter provided.').trim()}</p>
          `,
          attachments: [{
            filename: resumeFile.name,
            content: base64Content,
          }],
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Unable to send the resume at this time.');
      }

      setResumeStatus('success');
      setResumeForm({ fullName: '', email: '', phone: '', role: '', message: '', website: '' });
      setResumeFile(null);
    } catch (error) {
      setResumeStatus('error');
      setResumeError(error.message || 'We could not submit your resume. Please try again later.');
    }
  };

  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Careers at NY Infra Services</title>
        <meta name="description" content="Join the NY Infra Services team. Exciting career opportunities in geotechnical engineering, interior design, project management, and business development." />
      </Helmet>

      <PageHero
        title="Careers at NY Infra"
        subtitle="Build your career with India's most dynamic engineering and design firm."
        breadcrumbs={[{ label: 'Careers' }]}
        image="https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=1920&q=80"
      />

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce}>
              <motion.span variants={fadeUp} className="section-badge">Life at NY Infra</motion.span>
              <motion.h2 variants={fadeUp} className="font-display font-extrabold text-3xl lg:text-4xl text-neutral-900 leading-tight mb-4">
                Where Engineering Minds<br /><span className="text-primary">and Creative Spirits</span> Thrive
              </motion.h2>
              <motion.div variants={fadeUp} className="line-accent" />
              <motion.p variants={fadeUp} className="text-secondary leading-relaxed mb-4">
                At NY Infra Services, we believe that great work comes from great people. We invest
                in our team's growth, create challenging opportunities, and build a culture of
                excellence, collaboration, and innovation.
              </motion.p>
              <motion.div variants={stagger} className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { title: 'Competitive Compensation', icon: 'Rupee' },
                  { title: 'Professional Development', icon: 'Growth' },
                  { title: 'Pan-India Exposure', icon: 'Map' },
                  { title: 'Work-Life Balance', icon: 'Balance' },
                  { title: 'Health Insurance', icon: 'Health' },
                  { title: 'Learning Opportunities', icon: 'Learn' },
                ].map((b) => (
                  <motion.div key={b.title} variants={fadeUp} className="flex items-center gap-3 p-3 bg-neutral-50 border border-neutral-100">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-sm font-semibold text-neutral-900">{b.title}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.img
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              src="https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&q=80"
              alt="Team collaboration at NY Infra Services"
              className="w-full h-96 object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <h2 className="font-display font-extrabold text-2xl text-neutral-900 mb-2">Open Positions</h2>
            <div className="w-12 h-0.5 bg-accent mb-8" />
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce} className="space-y-4">
              {CAREERS.map((job) => <JobCard key={job.id} job={job} />)}
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-10 bg-neutral-50 border border-neutral-200 p-8"
          >
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <span className="section-badge">Resume Submission</span>
                <h3 className="font-display font-bold text-2xl text-neutral-900 mt-3 mb-2">Submit Your Resume</h3>
                <p className="text-secondary text-sm">Share your details and upload your CV. We will review your application and get back to you soon.</p>
              </div>

              {resumeStatus === 'success' ? (
                <div className="rounded border border-green-200 bg-green-50 p-6 text-center">
                  <CheckCircle2 size={40} className="mx-auto text-green-600 mb-3" />
                  <h4 className="font-display font-bold text-xl text-neutral-900 mb-2">Resume Sent Successfully</h4>
                  <p className="text-secondary text-sm">Thank you for applying. Your resume and details have been sent to {SITE.email}.</p>
                </div>
              ) : (
                <form onSubmit={handleResumeSubmit} noValidate className="space-y-5">
                  {resumeError && (
                    <div className="flex items-start gap-2 rounded border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                      <AlertCircle size={16} className="mt-0.5 shrink-0" />
                      <span>{resumeError}</span>
                    </div>
                  )}

                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="resume-website">Leave this empty</label>
                    <input id="resume-website" name="website" value={resumeForm.website} onChange={handleResumeChange} autoComplete="off" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="resume-full-name" className="form-label">Full Name *</label>
                      <input id="resume-full-name" name="fullName" type="text" value={resumeForm.fullName} onChange={handleResumeChange} className={`form-input ${resumeErrors.fullName ? 'border-red-500' : ''}`} placeholder="Your full name" />
                      {resumeErrors.fullName && <p className="text-red-500 text-xs mt-1">{resumeErrors.fullName}</p>}
                    </div>
                    <div>
                      <label htmlFor="resume-email" className="form-label">Email Address *</label>
                      <input id="resume-email" name="email" type="email" value={resumeForm.email} onChange={handleResumeChange} className={`form-input ${resumeErrors.email ? 'border-red-500' : ''}`} placeholder="your@email.com" />
                      {resumeErrors.email && <p className="text-red-500 text-xs mt-1">{resumeErrors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="resume-phone" className="form-label">Phone Number *</label>
                      <input id="resume-phone" name="phone" type="tel" value={resumeForm.phone} onChange={handleResumeChange} className={`form-input ${resumeErrors.phone ? 'border-red-500' : ''}`} placeholder="+91 XXXXX XXXXX" />
                      {resumeErrors.phone && <p className="text-red-500 text-xs mt-1">{resumeErrors.phone}</p>}
                    </div>
                    <div>
                      <label htmlFor="resume-role" className="form-label">Role Applying For *</label>
                      <input id="resume-role" name="role" type="text" value={resumeForm.role} onChange={handleResumeChange} className={`form-input ${resumeErrors.role ? 'border-red-500' : ''}`} placeholder="e.g. Senior Geotechnical Engineer" />
                      {resumeErrors.role && <p className="text-red-500 text-xs mt-1">{resumeErrors.role}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="resume-upload" className="form-label">Resume Upload *</label>
                    <label className={`flex cursor-pointer items-center justify-center rounded border border-dashed px-4 py-6 text-center transition ${resumeErrors.resume ? 'border-red-500 bg-red-50 text-red-700' : 'border-neutral-300 bg-white text-secondary hover:border-primary hover:text-primary'}`}>
                      <input id="resume-upload" type="file" accept=".pdf,.doc,.docx" onChange={handleResumeFileChange} className="hidden" />
                      <div className="flex flex-col items-center gap-2">
                        <UploadCloud size={20} />
                        <span>{resumeFile ? resumeFile.name : 'Choose PDF, DOC, or DOCX file'}</span>
                        <span className="text-xs">Maximum size: 10 MB</span>
                      </div>
                    </label>
                    {resumeErrors.resume && <p className="text-red-500 text-xs mt-1">{resumeErrors.resume}</p>}
                  </div>

                  <div>
                    <label htmlFor="resume-message" className="form-label">Cover Letter / Message</label>
                    <textarea id="resume-message" name="message" rows={5} value={resumeForm.message} onChange={handleResumeChange} className="form-textarea" placeholder="Tell us about yourself and why you'd like to join our team..." />
                  </div>

                  <button type="submit" disabled={resumeStatus === 'submitting'} className="btn-primary w-full justify-center">
                    {resumeStatus === 'submitting' ? (
                      <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending Resume...</span>
                    ) : (
                      <span className="flex items-center gap-2"><Send size={16} />Send Resume</span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </motion.div>
  );
}
