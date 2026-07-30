// ─── Site Constants ──────────────────────────────────────────────────────────
export const SITE = {
  name: 'NY Infra Services',
  tagline: 'Engineering Excellence. Aesthetic Perfection.',
  description:
    'NY Infra Services is a premier geotechnical engineering and interior design company delivering world-class infrastructure solutions and transformative interior spaces across India.',
  phone: '+91-9899876659',
  phone2: '+91-9818521797',
  email: 'nyinfraservices@gmail.com',
  email2: 'nyinfraservices@gmail.com',
  whatsapp: '+91-9899876659',
  address: '401, Tower B, Unitech Cyber Park, Sector 39, Gurugram, Haryana – 122003',
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.5!2d77.0266!3d28.4595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI3JzM0LjIiTiA3N8KwMDEnMzUuOCJF!5e0!3m2!1sen!2sin!4v1620000000000',
  officeHours: {
    weekdays: 'Monday – Friday: 9:00 AM – 6:00 PM',
    saturday: 'Saturday: 9:00 AM – 2:00 PM',
    sunday: 'Sunday: Closed',
  },
  social: {
    linkedin: 'https://linkedin.com/company/ny-infra-services',
    twitter:  'https://twitter.com/nyinfraservices',
    facebook: 'https://facebook.com/nyinfraservices',
    instagram:'https://instagram.com/nyinfraservices',
    youtube:  'https://youtube.com/nyinfraservices',
  },
  founded: 2015,
  registered: 'India',
};

export const STATS = [
  { value: 150,  suffix: '+', label: 'Projects Completed',   icon: 'FolderCheck' },
  { value: 25,   suffix: '+', label: 'States Covered',       icon: 'MapPin' },
  { value: 50,   suffix: '+', label: 'Expert Engineers',     icon: 'HardHat' },
  { value: 10,   suffix: '+', label: 'Years of Excellence',  icon: 'Award' },
  { value: 98,   suffix: '%', label: 'Client Satisfaction',  icon: 'ThumbsUp' },
  { value: 500,  suffix: 'Cr+', label: 'Projects Value (₹)', icon: 'TrendingUp' },
];

export const NAV_LINKS = [
  { label: 'Home',           path: '/' },
  {
    label: 'About',          path: '/about',
  },
  {
    label: 'Services',       path: '/services',
    children: [
      { label: 'Slope Stabilization',    path: '/services/slope-stabilization' },
      { label: 'Rockfall Mitigation',    path: '/services/rockfall-mitigation' },
      { label: 'Shoring Systems',        path: '/services/shoring-systems' },
      { label: 'Slope Protection',       path: '/services/slope-protection' },
      { label: 'Reinforced Earth Walls', path: '/services/reinforced-earth-walls' },
      { label: 'Foundation Engineering', path: '/services/foundation-engineering' },
      { label: 'Micro Piling',           path: '/services/micro-piling' },
      { label: 'Piling',                 path: '/services/piling' },
      { label: 'Geotechnical Investigation', path: '/services/geotechnical-investigation' },
    ],
  },
  { label: 'Interior Design', path: '/interior-design' },
  { label: 'Projects',        path: '/projects' },
  { label: 'Industries',      path: '/industries' },
  { label: 'Gallery',         path: '/gallery' },
  { label: 'Careers',         path: '/careers' },
  { label: 'Contact',         path: '/contact' },
];

export const CERTIFICATIONS = [
  { name: 'ISO 9001:2015', desc: 'Quality Management System', icon: 'Award' },
  { name: 'ISO 14001:2015', desc: 'Environmental Management', icon: 'Leaf' },
  { name: 'ISO 45001:2018', desc: 'Occupational Health & Safety', icon: 'ShieldCheck' },
  { name: 'CE Marking', desc: 'European Conformity', icon: 'BadgeCheck' },
];

export const CLIENTS = [
  { name: 'NHAI',     logo: null },
  { name: 'DMRC',     logo: null },
  { name: 'AAI',      logo: null },
  { name: 'BRO',      logo: null },
  { name: 'SJVN',     logo: null },
  { name: 'L&T',      logo: null },
  { name: 'AECOM',    logo: null },
  { name: 'STRABAG',  logo: null },
  { name: 'Konkan Railway', logo: null },
  { name: 'PWD',      logo: null },
  { name: 'RVNL',     logo: null },
  { name: 'IRCON',    logo: null },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Site Investigation',
    desc: 'Comprehensive geotechnical investigation, soil testing, and site assessment to understand ground conditions.',
    icon: 'ScanLine',
  },
  {
    step: '02',
    title: 'Engineering Design',
    desc: 'Expert engineers develop detailed technical designs, drawings, and specifications tailored to project requirements.',
    icon: 'PenTool',
  },
  {
    step: '03',
    title: 'Approval & Planning',
    desc: 'Regulatory approvals, procurement planning, and resource mobilization for seamless project execution.',
    icon: 'ClipboardCheck',
  },
  {
    step: '04',
    title: 'Execution',
    desc: 'Skilled teams execute with precision using state-of-the-art equipment, ensuring quality and safety at every step.',
    icon: 'HardHat',
  },
  {
    step: '05',
    title: 'Quality Assurance',
    desc: 'Rigorous quality checks, testing, and monitoring throughout construction to meet international standards.',
    icon: 'BadgeCheck',
  },
  {
    step: '06',
    title: 'Handover & Support',
    desc: 'Project commissioning, client handover, documentation, and post-project support services.',
    icon: 'Handshake',
  },
];

export const CAREERS = [
  {
    id: 1,
    title: 'Senior Geotechnical Engineer',
    department: 'Engineering',
    location: 'Gurugram, Haryana',
    type: 'Full Time',
    experience: '7-12 years',
    description: 'Lead geotechnical investigation and design for major infrastructure projects across India.',
    requirements: ['M.Tech in Geotechnical Engineering', '7+ years in slope stability & foundation engineering', 'Experience with PLAXIS, SLOPE/W', 'Project management skills'],
  },
  {
    id: 2,
    title: 'Interior Design Lead',
    department: 'Interior Design',
    location: 'Gurugram, Haryana',
    type: 'Full Time',
    experience: '5-8 years',
    description: 'Lead design of luxury residential and commercial interiors with a focus on premium finishes.',
    requirements: ['B.Arch / Diploma in Interior Design', '5+ years luxury interior design', 'Proficiency in AutoCAD, SketchUp, 3ds Max', 'Strong client management skills'],
  },
  {
    id: 3,
    title: 'Site Engineer – Piling',
    department: 'Engineering',
    location: 'Pan India (Project-based)',
    type: 'Full Time',
    experience: '3-6 years',
    description: 'Supervise piling and deep foundation construction across infrastructure projects.',
    requirements: ['B.Tech Civil Engineering', '3+ years piling site experience', 'Knowledge of IS codes', 'Willingness to travel'],
  },
  {
    id: 4,
    title: 'Business Development Manager',
    department: 'Sales & Marketing',
    location: 'Delhi / Mumbai',
    type: 'Full Time',
    experience: '5-10 years',
    description: 'Drive new business in infrastructure and interior segments, managing client relationships and tenders.',
    requirements: ['MBA preferred', '5+ years B2B sales in engineering/construction', 'Existing network with NHAI/PWD/developers', 'Excellent communication skills'],
  },
  {
    id: 5,
    title: '3D Visualization Artist',
    department: 'Interior Design',
    location: 'Gurugram, Haryana',
    type: 'Full Time',
    experience: '2-4 years',
    description: 'Create photorealistic 3D renders and walkthroughs for interior design projects.',
    requirements: ['Proficiency in 3ds Max, V-Ray, Lumion', '2+ years architectural visualization', 'Portfolio of high-quality renders', 'Eye for detail and aesthetics'],
  },
];




