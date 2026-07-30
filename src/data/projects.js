// ─── Projects Data ──────────────────────────────────────────────────────────
export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'anchoring-stabilization', label: 'High-Load Anchoring' },
  { id: 'aviation-infrastructure', label: 'Aviation Infrastructure' },
  { id: 'rockfall-mitigation', label: 'Rockfall Mitigation' },
  { id: 'border-infrastructure', label: 'Border Infrastructure' },
  { id: 'metro-transit', label: 'Metro Transit' },
];

export const projects = [
  {
    id: 'hydro-power-backhill-protection',
    category: 'anchoring-stabilization',
    subcategory: 'High-Load Anchoring',
    title: 'Hydro-Power Backhill Protection & Slope Stabilization Works',
    location: 'Uttarakhand, India',
    client: 'Uttarakhand Jal Vidyut Nigam Limited (UJVNL) – Dakpathar Project',
    year: '2025',
    status: 'Completed',
    duration: '18 months',
    value: '₹120 Crores',
    image: '/Prestressed%20Cable%20Anchor.jpeg',
    gallery: ['/Prestressed%20Cable%20Anchor.jpeg', '/Prestressed%20Cable%20Anchor%20(2).jpeg'],
    description:
      'Delivered heavy-duty slope stabilization for hydro-power infrastructure using high-capacity anchoring, post-tensioning, and structural grouting on critical hill profiles.',
    technicalScope:
      'Execution of 120-Ton high-capacity cable anchors, post-tensioning, structural grouting, and deep rock anchoring to stabilize vulnerable hill slopes and prevent progressive failure.',
    scope:
      'Heavy-duty anchoring and slope stabilization for hydro-power access slopes with a focus on long-term stability and structural integrity.',
    challenge:
      'Steep, weather-exposed slopes with critical hydro-power infrastructure required rock anchor performance to resist dynamic and static loads.',
    solution:
      'Implemented 120-Ton cable anchors, tensioned anchor bodies, and premium grout infusion for a high-capacity stabilization system.',
    outcome:
      'Delivered a resilient slope protection solution that mitigated progressive instability and protected hydro-power assets.',
    technology: ['120-Ton Cable Anchors', 'Post-Tensioning', 'Structural Grouting', 'Deep Rock Anchoring'],
    features: [
      'Heavy-duty high-load anchoring system',
      'Integrated slope reinforcement and drainage control',
      'Real-time geotechnical monitoring',
      'Premium execution for critical hydro-power infrastructure',
    ],
    tags: ['Cable Anchors', 'Slope Stabilization', 'Hydro Power'],
  },
  {
    id: 'ntpc-koldam-plunge-pool-strengthening',
    category: 'anchoring-stabilization',
    subcategory: 'High-Load Anchoring',
    title: 'NTPC Koldam Plunge Pool Area Strengthening Works',
    location: 'Himachal Pradesh, India',
    client: 'National Thermal Power Corporation (NTPC) – Koldam Hydro Power Station',
    year: '2025',
    status: 'Completed',
    duration: '16 months',
    value: '₹95 Crores',
    image: '/Prestressed%20Cable%20Anchor%20(2).jpeg',
    gallery: ['/Prestressed%20Cable%20Anchor%20(2).jpeg'],
    description:
      'Specialized strengthening of plunge pool infrastructure using high-capacity cable anchors to protect against extreme hydraulic forces and preserve downstream rock mass integrity.',
    technicalScope:
      'Stabilization of the high-velocity plunge pool zone using 100-Ton cable anchors, targeted grouting, and surface protection to secure geological formations under hydraulic loading.',
    scope:
      'Plunge pool zone strengthening to resist high-impact hydraulic forces and preserve critical energy-generation infrastructure.',
    challenge:
      'The area experienced extreme water velocities and unstable geology, requiring a solution that combined strength with corrosion-resistant design.',
    solution:
      'Deployed 100-Ton cable anchors, reinforced drainage, and corrosion-protected anchor heads for a long-term stabilization system.',
    outcome:
      'Achieved a durable plunge pool protection system that sustained extreme hydraulic load cycles with minimal maintenance requirements.',
    technology: ['100-Ton Cable Anchors', 'Targeted Grouting', 'Hydraulic Force Mitigation', 'Rock Mass Protection'],
    features: [
      'High-capacity plunge pool stabilization',
      'Resilient slope and rock face anchoring',
      'Minimal disturbance to existing hydraulic systems',
      'Engineered for extreme force resistance',
    ],
    tags: ['Hydro Power', 'Cable Anchors', 'Slope Stability'],
  },
  {
    id: 'pakyong-airport-hill-side-protection',
    category: 'aviation-infrastructure',
    subcategory: 'Aviation Infrastructure',
    title: 'Pakyong Airport Hill Side Protection & Landslide Mitigation',
    location: 'Pakyong, Sikkim, India',
    client: 'Airports Authority of India (AAI) – Pakyong Airport',
    year: '2025',
    status: 'Completed',
    duration: '14 months',
    value: '₹110 Crores',
    image: '/RS%20Wall.jpeg',
    gallery: ['/RS%20Wall.jpeg'],
    description:
      'Delivered critical runway hill slope stabilization for Pakyong Airport with concrete cladding walls, anchor systems, and subsurface water relief for long-term resilience.',
    technicalScope:
      'Comprehensive stabilization using heavy concrete cladding wall anchored with 100-Ton cable anchors and a specialized finger drain network for deep sub-surface de-pressurization.',
    scope:
      'Slope protection for critical aviation infrastructure using anchored retaining structures and subsurface drainage systems.',
    challenge:
      'Hill slope instability and high groundwater pressures posed a risk to runway safety and operational reliability.',
    solution:
      'Installed concrete cladding wall with 100-Ton anchors and finger drains to relieve subsurface pressure and lock the slope system.',
    outcome:
      'Secured runway slope stability with a robust defense against landslides and groundwater-driven failures.',
    technology: ['Concrete Cladding Wall', '100-Ton Cable Anchors', 'Finger Drain Network', 'Subsurface De-Pressurization'],
    features: [
      'Airport runway slope protection',
      'Heavy retaining wall anchorage',
      'Deep water drainage and de-pressurization',
      'Operational safety for aviation infrastructure',
    ],
    tags: ['Airport', 'Slope Protection', 'Drainage'],
  },
  {
    id: 'south-western-railway-rockfall-protection',
    category: 'rockfall-mitigation',
    subcategory: 'Rockfall Mitigation',
    title: 'South Western Railway Rockfall Protection Works',
    location: 'Sakleshpur to Subrahmanya Road, Western Ghats, India',
    client: 'South Western Railway',
    year: '2024',
    status: 'Completed',
    duration: '20 months',
    value: '₹78 Crores',
    image: '/SDRA%20Drilling.jpeg',
    gallery: ['/SDRA%20Drilling.jpeg'],
    description:
      'Built a turnkey rockfall protection system along a fragile Western Ghats railway corridor, combining high-energy barriers and active wire netting for passenger safety.',
    technicalScope:
      'Turnkey installation of 1500 KJ high-energy rockfall barrier systems and active wire netting to safeguard critical railway track corridors against massive rockfalls.',
    scope:
      'Rockfall defense for steep railway sections using high-energy barriers and retaining mesh installations.',
    challenge:
      'Massive rockfall potential, steep slopes, and fragile terrain demanded a robust, energy-absorbing protection system.',
    solution:
      'Installed 1500 KJ rockfall barriers and active wire netting to dissipate impact energy and prevent debris from reaching tracks.',
    outcome:
      'Enhanced railway safety with proven protection against large rockfall events on a critical transportation corridor.',
    technology: ['1500 KJ Rockfall Barriers', 'Active Wire Netting', 'Energy Absorption Systems', 'Trackside Protection'],
    features: [
      'High-energy rockfall protection',
      'Steep terrain safety reinforcement',
      'Railway corridor hazard mitigation',
      'Robust trackside defense solutions',
    ],
    tags: ['Railways', 'Rockfall Barriers', 'Safety'],
  },
  {
    id: 'col-santosh-babu-bridge-substructure',
    category: 'border-infrastructure',
    subcategory: 'Border Infrastructure',
    title: "Construction of Sub-Structure & Sub-Soil Investigation for the World's Highest Multi-Span Bridge (Col. Santosh Babu Bridge)",
    location: 'Shyok River, Leh-Ladakh, India',
    client: 'Border Roads Organisation (BRO – Project Vijayak)',
    year: '2024',
    status: 'Completed',
    duration: '14 months',
    value: '₹135 Crores',
    image: '/Micropile.jpeg',
    gallery: ['/Micropile.jpeg'],
    description:
      'Executed deep foundation and ground stabilization for the world’s highest multi-span bridge at extreme altitude using advanced TAM grouting micropiles.',
    technicalScope:
      'Ground stabilization and deep foundation construction using advanced TAM (Tube à Manchette) grouting micropiles for the Col. Santosh Babu Bridge.',
    scope:
      'TAM grouting micropile installation and sub-soil investigation for the bridge substructure in extreme cold, high-altitude conditions.',
    challenge:
      'Sub-zero temperatures, high altitude, and limited logistics required highly engineered foundation solutions and rapid mobilization.',
    solution:
      'Deployed TAM grouting micropiles with cold-weather construction protocols and precision instrumentation.',
    outcome:
      'Delivered the bridge substructure in a record 174 days, recognized by the World Book of Records, under severe Himalayan conditions.',
    technology: ['TAM Grouting Micropiles', 'Deep Foundation Engineering', 'High-Altitude Construction', 'Cold-Weather Protocols'],
    features: [
      'Record-setting bridge substructure delivery',
      'Extreme altitude construction at 14,900 ft',
      'Advanced cold-weather foundation methods',
      'World Book of Records recognized execution',
    ],
    recognition:
      'Successfully completed the 345-meter bridge in 174 days at 14,900 ft under -30°C conditions, officially registered with the World Book of Records (London) via Spar Geo Infra.',
    tags: ['Border Roads', 'Micropiles', 'World Record'],
  },
  {
    id: 'underground-metro-kashmere-gate-tunneling',
    category: 'metro-transit',
    subcategory: 'Metro Transit',
    title: 'Underground Metro Stations & Tunneling Works (DMRC Phase-III)',
    location: 'Kashmere Gate Metro Stations, Delhi, India',
    client: 'Delhi Metro Rail Corporation',
    year: '2025',
    status: 'Ongoing',
    duration: '30 months',
    value: '₹160 Crores',
    image: '/Structure%20work.jpeg',
    gallery: ['/Structure%20work.jpeg'],
    description:
      'Executed complex tunneling and underground station construction for Kashmere Gate Metro, delivering NATM and cut-and-cover works in a dense urban setting.',
    technicalScope:
      'Construction of twin tunnels using NATM method and cut & cover execution methodologies for underground metro stations under DMRC Phase-III.',
    scope:
      'Underground metro station and twin tunnel construction in a tightly constrained urban corridor.',
    challenge:
      'Dense urban setting, existing utilities, and live station operations required precise tunneling and staging.',
    solution:
      'Combined NATM tunneling with cut-and-cover station execution and phased traffic management.',
    outcome:
      'Advanced critical metro infrastructure while minimizing impact on central Delhi operations.',
    technology: ['NATM Tunneling', 'Cut & Cover', 'Urban Underground Construction', 'Metro Station Works'],
    features: [
      'Twin tunnel construction',
      'Complex urban excavation management',
      'Integrated station and tunnel delivery',
      'High precision underground engineering',
    ],
    tags: ['Metro', 'Tunneling', 'Urban Transit'],
  },
];

export default projects;




