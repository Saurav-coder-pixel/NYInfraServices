// ─── Projects / Portfolio Data ──────────────────────────────────────────────
export const projectCategories = [
  { id: 'all',                      label: 'All Works' },
  { id: 'anchoring-stabilization',  label: 'High-Load Anchoring' },
  { id: 'retaining-landslide',      label: 'Retaining & Landslide' },
  { id: 'rockfall-mitigation',      label: 'Rockfall Mitigation' },
  { id: 'foundation-ground',        label: 'Deep Foundation' },
  { id: 'tunneling-transit',        label: 'Tunneling & Transit' },
];

export const projects = [
  // ── 1. High-Load Anchoring & Slope Stabilization (Hydro-Power) ─────────────
  {
    id: 'high-load-anchoring-hydro-slope',
    title: 'High-Load Anchoring & Slope Stabilization',
    category: 'anchoring-stabilization',
    subcategory: 'High-Load Anchoring',
    status: 'Completed',
    image: '/cable-anchor-1.jpeg',
    gallery: [
      '/cable-anchor-1.jpeg',
      '/slope-sdra-installation.jpeg',
      '/site-photo-3.jpeg',
    ],
    description:
      'Heavy-duty slope stabilization for critical hydro-power infrastructure using 120-Ton high-capacity cable anchoring, post-tensioning, and structural grouting on vulnerable hill profiles.',
    technicalScope:
      'Execution of 120-Ton high-capacity cable anchors, post-tensioning systems, structural grouting, and deep rock anchoring to stabilize critical hill slopes and prevent progressive failure.',
    scope:
      'High-load anchoring and slope stabilization for hydro-power access slopes with a focus on long-term structural integrity.',
    challenge:
      'Steep, weather-exposed slopes adjacent to critical hydro-power infrastructure required rock anchor performance to resist both dynamic and static loads.',
    solution:
      'Implemented 120-Ton cable anchors, tensioned anchor bodies, and premium structural grout infusion for a high-capacity stabilization system.',
    outcome:
      'Delivered a resilient slope protection solution that mitigated progressive instability and protected hydro-power assets.',
    technology: ['120-Ton Cable Anchors', 'Post-Tensioning', 'Structural Grouting', 'Deep Rock Anchoring'],
    features: [
      'Heavy-duty, high-load anchoring systems',
      'Integrated slope reinforcement and drainage control',
      'Geotechnical monitoring throughout execution',
      'Executed for critical hydro-power infrastructure',
    ],
    tags: ['Cable Anchors', 'Slope Stabilization', 'Post-Tensioning'],
  },

  // ── 2. High-Load Anchoring — Extreme Hydraulic Force Resistance ────────────
  {
    id: 'high-load-anchoring-hydraulic-force',
    title: 'High-Load Anchoring for Hydraulic Force Resistance',
    category: 'anchoring-stabilization',
    subcategory: 'High-Load Anchoring',
    status: 'Completed',
    image: '/site-photo-2.jpeg',
    gallery: [
      '/site-photo-2.jpeg',
      '/cable-anchor-1.jpeg',
    ],
    description:
      'Specialized high-capacity anchoring to stabilize rock mass against extreme hydraulic forces, protecting critical energy-generation infrastructure from high-velocity water impact.',
    technicalScope:
      'Stabilization using 100-Ton cable anchors, targeted grouting, and surface protection to secure geological formations operating under extreme hydraulic loading conditions.',
    scope:
      'Rock mass strengthening to resist high-impact hydraulic forces and preserve critical energy infrastructure.',
    challenge:
      'Extreme water velocities and unstable geology required a solution combining high structural strength with long-term corrosion-resistant design.',
    solution:
      'Deployed 100-Ton cable anchors with corrosion-protected anchor heads, reinforced drainage, and targeted grouting for a durable stabilization system.',
    outcome:
      'Achieved a robust protection system capable of sustaining extreme hydraulic load cycles with minimal maintenance.',
    technology: ['100-Ton Cable Anchors', 'Targeted Grouting', 'Hydraulic Force Mitigation', 'Rock Mass Protection'],
    features: [
      'High-capacity anchoring against hydraulic forces',
      'Corrosion-protected anchor design',
      'Resilient rock face anchoring',
      'Engineered for extreme force resistance',
    ],
    tags: ['Cable Anchors', 'Hydraulic Force', 'Rock Anchoring'],
  },

  // ── 3. Heavy Retaining Structures & Landslide Mitigation ──────────────────
  {
    id: 'heavy-retaining-landslide-mitigation',
    title: 'Heavy Retaining Structures & Landslide Mitigation',
    category: 'retaining-landslide',
    subcategory: 'Retaining & Landslide',
    status: 'Completed',
    image: '/cable-anchor-2.jpeg',
    gallery: [
      '/cable-anchor-2.jpeg',
      '/rs-wall.jpeg',
      '/site-photo-1.jpeg',
    ],
    description:
      'Comprehensive slope protection using heavy concrete cladding walls anchored with 100-Ton cable anchors, finger drain networks, and deep sub-surface water de-pressurization systems.',
    technicalScope:
      'Heavy concrete cladding wall construction anchored with 100-Ton cable anchors, combined with specialized finger drain networks for deep sub-surface de-pressurization and long-term landslide mitigation.',
    scope:
      'Slope protection using anchored retaining structures and subsurface drainage systems to eliminate landslide risk.',
    challenge:
      'Hill slope instability and high groundwater pressures required a combined structural and drainage solution to lock the slope system permanently.',
    solution:
      'Installed heavy concrete cladding wall with 100-Ton anchors and a finger drain network to relieve subsurface hydrostatic pressure.',
    outcome:
      'Secured slope stability with a robust defense against landslides and groundwater-driven failures.',
    technology: ['Concrete Cladding Wall', '100-Ton Cable Anchors', 'Finger Drain Network', 'Subsurface De-Pressurization'],
    features: [
      'Heavy retaining wall construction',
      'High-capacity wall anchorage',
      'Deep subsurface water drainage and de-pressurization',
      'Permanent landslide mitigation',
    ],
    tags: ['Retaining Wall', 'Landslide Mitigation', 'Drainage'],
  },

  // ── 4. High-Energy Rockfall Mitigation ────────────────────────────────────
  {
    id: 'high-energy-rockfall-mitigation',
    title: 'High-Energy Rockfall Mitigation',
    category: 'rockfall-mitigation',
    subcategory: 'Rockfall Mitigation',
    status: 'Completed',
    image: '/rs-wall.jpeg',
    gallery: [
      '/rs-wall.jpeg',
      '/site-photo-3.jpeg',
      '/slope-sdra-installation.jpeg',
    ],
    description:
      'Turnkey installation of 1500 KJ high-energy rockfall barrier systems and active wire netting to safeguard critical infrastructure corridors against massive rockfalls and debris flows.',
    technicalScope:
      'Supply and installation of 1500 KJ high-energy absorption rockfall barrier systems combined with active wire netting on steep, fragile terrain to intercept high-velocity rockfalls.',
    scope:
      'Rockfall defense for steep terrain using high-energy barriers and retaining mesh systems.',
    challenge:
      'Massive rockfall potential, steep slopes, and fragile terrain demanded a robust, high-energy-absorbing protection system with rapid installation.',
    solution:
      'Installed 1500 KJ rockfall barriers and active wire netting to dissipate impact energy and prevent debris from reaching critical infrastructure.',
    outcome:
      'Enhanced safety with proven protection against large rockfall events on a critical infrastructure corridor.',
    technology: ['1500 KJ Rockfall Barriers', 'Active Wire Netting', 'Energy Absorption Systems', 'Trackside Protection'],
    features: [
      '1500 KJ high-energy barrier systems',
      'Active wire netting for slope face protection',
      'Steep terrain hazard mitigation',
      'Robust debris flow defense',
    ],
    tags: ['Rockfall Barriers', 'Active Wire Netting', 'Safety'],
  },

  // ── 5. Deep Foundation & Ground Stabilization ─────────────────────────────
  {
    id: 'deep-foundation-tam-grouting',
    title: 'Deep Foundation & Ground Stabilization',
    category: 'foundation-ground',
    subcategory: 'Deep Foundation',
    status: 'Completed',
    image: '/micropile.jpeg',
    gallery: [
      '/micropile.jpeg',
      '/sdra-drilling.jpeg',
      '/structure-work.jpeg',
    ],
    description:
      'Deep foundation construction and ground stabilization using advanced TAM (Tube à Manchette) grouting micropiles for sub-structure works in extreme environmental conditions.',
    technicalScope:
      'Ground stabilization and deep foundation construction using TAM (Tube à Manchette) grouting micropiles, sub-soil investigation, and sub-structure works executed under severe cold and high-altitude constraints.',
    scope:
      'TAM grouting micropile installation and sub-soil investigation for sub-structure construction in extreme conditions.',
    challenge:
      'Extreme environmental conditions — sub-zero temperatures, high altitude, and limited logistics — required highly engineered foundation solutions and precision instrumentation.',
    solution:
      'Deployed TAM grouting micropiles with specialized cold-weather construction protocols and precision geotechnical instrumentation.',
    outcome:
      'Delivered the complete sub-structure on schedule with zero structural compromise, recognized for exceptional execution under extreme conditions.',
    technology: ['TAM Grouting Micropiles', 'Deep Foundation Engineering', 'Sub-Soil Investigation', 'Ground Stabilization'],
    features: [
      'TAM grouting micropile systems',
      'Sub-soil investigation and reporting',
      'Ground stabilization in extreme conditions',
      'Precision deep foundation construction',
    ],
    tags: ['Micropiles', 'TAM Grouting', 'Deep Foundation'],
  },

  // ── 6. Underground Tunneling & Transit Infrastructure ─────────────────────
  {
    id: 'underground-tunneling-transit',
    title: 'Underground Tunneling & Transit Infrastructure',
    category: 'tunneling-transit',
    subcategory: 'Tunneling & Transit',
    status: 'Completed',
    image: '/structure-work.jpeg',
    gallery: [
      '/structure-work.jpeg',
      '/site-photo-1.jpeg',
    ],
    description:
      'Complex twin tunnel construction and underground infrastructure works using NATM and Cut & Cover methodologies for a major urban transit network.',
    technicalScope:
      'Construction of twin tunnels using NATM (New Austrian Tunnelling Method) and Cut & Cover execution methodologies for underground station-related construction and transit infrastructure works.',
    scope:
      'Underground twin tunnel construction and station-related infrastructure works in a constrained urban corridor.',
    challenge:
      'Dense urban setting, existing utilities, and operational constraints required precise tunneling sequencing and staged excavation management.',
    solution:
      'Combined NATM tunneling with cut-and-cover station construction and phased excavation management to maintain safety and continuity.',
    outcome:
      'Successfully advanced critical underground transit infrastructure while minimizing disruption in a dense operational environment.',
    technology: ['NATM Tunneling', 'Cut & Cover', 'Twin Tunnel Construction', 'Underground Station Works'],
    features: [
      'Twin tunnel construction using NATM',
      'Cut & Cover station execution',
      'Complex urban excavation management',
      'High-precision underground engineering',
    ],
    tags: ['Tunneling', 'NATM', 'Cut & Cover'],
  },
];

export default projects;
