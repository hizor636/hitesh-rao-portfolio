// Data store for Hitesh Rao M — Tech Marketer & Data Builder

export const PERSONAL_INFO = {
  name: "HITESH RAO M",
  monogram: "H ®",
  title: "Tech Marketer & Data Builder",
  headlineMission: "Growth marketing, backed by data, for teams and brands ready to move forward.",
  bioShort: "A 2nd-year BCA student who connects technology, analytics, and community to help brands reach their audience and leave an indelible mark.",
  bioExtended: "My philosophy is rooted in consistent improvement: learning from every sprint, analyzing real user signals, and converting raw achievements into unstoppable momentum. Pursuing a BCA (Class of 2028) at Nagarjuna College of Engineering and Technology in Bengaluru, I integrate campus growth marketing, hackathon operations, and developer relations at Google and Paytm with SQL, Python, and Google Cloud. I am actively seeking high-leverage internships in growth marketing, campus programs, fintech marketing, and data analytics.",
  email: "hiteshraom@email.com",
  linkedin: "https://www.linkedin.com/in/hitesh-rao-m-593775358/",
  location: "Bengaluru, Karnataka, India",
  timezone: "Asia/Kolkata",
  status: "Open for Growth & Data Internships",
  college: "Nagarjuna College of Engineering & Technology (Class of 2028)",
  socials: [
    { label: "LINKEDIN", url: "https://www.linkedin.com/in/hitesh-rao-m-593775358/" },
    { label: "INSTAGRAM", url: "https://instagram.com" },
    { label: "BEHANCE", url: "https://behance.net" },
    { label: "EMAIL", url: "mailto:hiteshraom@email.com" }
  ],
  stats: [
    { value: "125K+", label: "Google Ambassador Pool Selected" },
    { value: "8,261+", label: "Paytm Hackathon Impressions" },
    { value: "800+", label: "Conference Registrations Coordinated" },
    { value: "70+", label: "SQL Programs Solved (Leaderboard)" }
  ]
};

export const PROJECTS = [
  {
    id: "paytm-hackathon",
    index: "00-1",
    title: "PAYTM BENGALURU HACKATHON",
    subtitle: "Fintech Campus Marketing & Flagship Event Operations",
    client: "Paytm (One97 Communications) — Bengaluru",
    year: "2026",
    scope: "Campus Marketing, Strategic Partnerships & Core Organizing",
    deliverables: "Core organising team for flagship Bengaluru Hackathon under strict data-privacy standards",
    services: ["Campus Marketing", "Event Operations", "Brand Partnerships", "Growth Funnels"],
    awards: ["4 Months Intensive: Jun – Oct 2026", "Core Organizing Team", "One97 Communications"],
    accentColor: "#00baf2",
    category: "FinTech & Growth",
    summary: "Served as marketing intern and campus ambassador at Paytm (One97 Communications). Supported campaign frameworks aligned to national brand strategy, coordinated collegiate partnerships and developer meetups, and spearheaded operations for the flagship Bengaluru Hackathon.",
    challenge: "Organizing a high-visibility fintech hackathon in Bengaluru required balancing aggressive student registration targets with strict corporate data-privacy and security protocols.",
    solution: "Engineered targeted outreach across regional engineering colleges, activated peer ambassador networks, and established an efficient ground-ops check-in and scheduling framework.",
    results: [
      { metric: "8,261+", label: "Organic Post Impressions" },
      { metric: "4 Mos", label: "Executive Leadership Term" },
      { metric: "100%", label: "Data Privacy Compliance" }
    ],
    techStack: ["Campaign Analytics", "Event Operations", "Partner Relations", "Fintech Compliance", "Community CRM"],
    testimonial: {
      quote: "Hitesh's operational rigor and grassroots collegiate outreach were instrumental in making the Paytm Bengaluru Hackathon a resounding triumph.",
      author: "Fintech Growth Lead",
      role: "Campus Programs, Paytm (One97 Communications)"
    },
    visualType: "paytm-radar",
    images: [
      { title: "Hackathon Ground Ops & Command Center", desc: "Real-time registration check-in flow and attendee telemetry" },
      { title: "Collegiate Ambassador Network", desc: "Inter-college communication channels and brand campaign distribution" },
      { title: "Post-Campaign Analytics Ledger", desc: "Engagement heatmaps and post-event attendee conversion tracking" }
    ]
  },
  {
    id: "google-student-ambassador",
    index: "00-2",
    title: "GOOGLE STUDENT AMBASSADOR",
    subtitle: "Community & Campus Programs Representation",
    client: "Google — India Campus Cohort",
    year: "2026",
    scope: "Developer Community Building, Technical Workshops & Tech Talks",
    deliverables: "Representing Google on campus to accelerate student adoption of developer tools and AI certifications",
    services: ["Community Building", "Technical Workshops", "Developer Advocacy", "AI Education"],
    awards: ["Selected from 125,000+ Applicants", "Google Student Ambassadors India", "May – Oct 2026"],
    accentColor: "#d4ff4f",
    category: "Community & DevRel",
    summary: "Handpicked from a hyper-competitive nationwide pool of over 125,000 applicants across India to serve as Google Student Ambassador. Built an engaged technical community, hosted developer workshops, and guided hundreds of students to Google certifications.",
    challenge: "Overcoming student inertia and democratizing complex Google Cloud, AI, and developer ecosystem resources for early-year undergraduates.",
    solution: "Curated peer-led study cohorts, organized interactive hands-on labs with Gemini and Cloud tools, and designed digestible technical newsletters and roadmaps.",
    results: [
      { metric: "125K+", label: "Applicant Pool Selected From" },
      { metric: "500+", label: "Students Guided to Certifications" },
      { metric: "6 Mos", label: "Active Cohort Leadership" }
    ],
    techStack: ["Google Cloud", "Gemini AI", "Community Management", "Public Speaking", "Technical Curriculum"],
    testimonial: {
      quote: "Hitesh represents the vanguard of student technical leadership in Bengaluru. His ability to rally hundreds of peers around cutting-edge tools is exceptional.",
      author: "Campus DevRel Lead",
      role: "Google Student Ambassador Program India"
    },
    visualType: "google-neural",
    images: [
      { title: "Campus Tech Talk & Workshop Arena", desc: "Hands-on developer workshop with live coding and cloud sandboxes" },
      { title: "Gemini AI Student Challenge", desc: "Curated hackathon prompts utilizing Google's generative AI models" },
      { title: "Community Growth Trajectory", desc: "MoM active student developer engagement metrics" }
    ]
  },
  {
    id: "presto-namma-mug",
    index: "00-3",
    title: "BUILD WITH PRESTO & NAMMA MUG",
    subtitle: "City-Wide Developer Conference Operations",
    client: "Presto & Namma MUG (MongoDB User Group) — Bengaluru",
    year: "2026",
    scope: "DevRel Operations, Speaker Coordination & Sponsor Logistics",
    deliverables: "Coordinated city-wide developer conference with 800+ registrations and 189+ industry pros",
    services: ["DevRel Operations", "Cross-team Coordination", "Sponsor Management", "Event Logistics"],
    awards: ["800+ Registrations", "189+ Industry Pros", "MongoDB & Google Partners"],
    accentColor: "#10b981",
    category: "Developer Community",
    summary: "Joined the core Bengaluru organising team for a premier developer gathering uniting distributed SQL engine Presto, MongoDB User Group (Namma MUG), and Google for Developers.",
    challenge: "Managing smooth operational execution, live streaming, sponsor booths, and registration logistics for over 800 attendees in Bengaluru's tech corridor.",
    solution: "Streamlined the attendee verification process, orchestrated speaker green-rooms, and ensured real-time sponsor alignment between MongoDB, Google, and community partners.",
    results: [
      { metric: "800+", label: "Developer Registrations" },
      { metric: "189+", label: "Senior Industry Professionals" },
      { metric: "100%", label: "On-Time Track Execution" }
    ],
    techStack: ["Presto SQL", "MongoDB", "Eventbrite CRM", "Audio/Visual Ops", "Developer Outreach"],
    testimonial: {
      quote: "Executing a tech conference of this scale demands calm under pressure. Hitesh handled speaker transitions and logistics with absolute composure.",
      author: "Namma MUG Lead",
      role: "Bengaluru MongoDB Community"
    },
    visualType: "devrel-network",
    images: [
      { title: "Main Stage & Distributed SQL Track", desc: "Presto query engine architecture keynote and live demonstrations" },
      { title: "MongoDB Developer Playground", desc: "Hands-on document database optimization workshop" },
      { title: "Networking & Partner Lounge", desc: "Connecting 189+ senior engineers with collegiate talent" }
    ]
  },
  {
    id: "careergroww",
    index: "00-4",
    title: "CAREERGROWW AT VIBEXATHON 1.0",
    subtitle: "AI Product & Dynamic Skill-Gap Platform",
    client: "VibeXathon 1.0 — Hackathon Finalist",
    year: "2026",
    scope: "AI Prototyping, Prompt Engineering & Executive Pitching",
    deliverables: "Co-built and pitched CareerGroww, an AI skill-gap platform competing against senior engineering teams",
    services: ["AI Prototyping", "Prompt Engineering", "Product Pitching", "Market Research"],
    awards: ["4,566+ Post Impressions", "Team of Four Finalists", "Mar 2026"],
    accentColor: "#a855f7",
    category: "AI & Product",
    summary: "Co-built and pitched CareerGroww, an intelligent career copilot that scans real-time tech job postings, extracts prerequisite skill vectors, and generates personalized learning sprints for undergraduates.",
    challenge: "Synthesizing unstructured job requirements and building a working AI prototype within a strict 36-hour hackathon timeline as first-year students.",
    solution: "Designed prompt chains and structured vector skill trees that analyze a student's GitHub/resume and highlight critical gaps in SQL, cloud, or system design.",
    results: [
      { metric: "4,566+", label: "Post Impressions & Reach" },
      { metric: "Top 5%", label: "Hackathon Jury Ranking" },
      { metric: "36h", label: "Prototype Delivery Sprint" }
    ],
    techStack: ["Gemini API", "Python", "Prompt Engineering", "Figma", "Tailwind CSS"],
    testimonial: {
      quote: "To see first-year BCA students stand up against senior engineers and pitch an AI platform with this level of market maturity was truly refreshing.",
      author: "VibeXathon Jury Panel",
      role: "Hackathon Evaluation Committee"
    },
    visualType: "ai-skillgap",
    images: [
      { title: "Skill-Gap Dynamic Vector Tree", desc: "Visual comparison of applicant proficiencies vs market demand" },
      { title: "Curated 30-Day Learning Sprint Generator", desc: "Algorithmic modular curriculum recommendation engine" },
      { title: "Executive Pitch Deck", desc: "Commercial go-to-market strategy for university career centers" }
    ]
  },
  {
    id: "sql-leaderboard-streak",
    index: "00-5",
    title: "SQL LEADERBOARD STREAK",
    subtitle: "Algorithmic Query Mastery & Data Architecture",
    client: "Torii Minds & HackerRank Competitive Arena",
    year: "2025",
    scope: "Complex Relational Queries, Window Functions & Database Optimization",
    deliverables: "Solved 70+ SQL programs on Torii Minds including a 50+ problem weekly sprint, ranking at the top of university leaderboards",
    services: ["SQL Queries", "Relational Database Design", "Python Essentials", "Data Wrangling"],
    awards: ["Top Performer, University & Year Leaderboards", "HackerRank SQL Intermediate", "Cisco Python Essentials 1"],
    accentColor: "#eab308",
    category: "Data & Engineering",
    summary: "Demonstrated mathematical and relational database rigor by solving over 70 complex SQL problem sets on Torii Minds, culminating in a 50+ problem sprint that topped both university-wide and year-wide leaderboards.",
    challenge: "Mastering complex joins, subqueries, indexing tradeoffs, and window functions under strict execution time limits.",
    solution: "Developed methodical query-planning techniques, query profiling, and automated edge-case validation routines in MySQL and PostgreSQL.",
    results: [
      { metric: "70+", label: "SQL Programs Solved" },
      { metric: "#1", label: "University Leaderboard Rank" },
      { metric: "100%", label: "HackerRank Verification" }
    ],
    techStack: ["SQL (PostgreSQL/MySQL)", "Python", "Database Indexing", "Torii Minds", "HackerRank"],
    testimonial: {
      quote: "Hitesh's relentless discipline on the SQL leaderboard exemplifies his analytical foundation. He writes clean, efficient queries that scale.",
      author: "Department Mentor",
      role: "NCET Bengaluru"
    },
    visualType: "sql-terminal",
    images: [
      { title: "Leaderboard Streak Verification", desc: "University-wide ranking ledger and weekly sprint logs" },
      { title: "Multi-Table Relational Schema", desc: "Normalized database diagrams and indexing strategies" },
      { title: "HackerRank Certified Credential", desc: "Intermediate SQL verified competency badge" }
    ]
  },
  {
    id: "deloitte-analytics",
    index: "00-6",
    title: "DELOITTE ANALYTICS & GEMINI CERTIFIED",
    subtitle: "Enterprise Data Analytics & Google AI Verification",
    client: "Deloitte Australia & Google for Education",
    year: "2026",
    scope: "Pay-Equality Scoring, Data Classification & Google AI Foundations",
    deliverables: "Completed Deloitte Australia Data Analytics virtual experience and earned the Gemini Certified Student credential",
    services: ["Data Analytics", "Google AI / Gemini", "Business Intelligence", "Statistical Analysis"],
    awards: ["Deloitte Australia Verified", "Google for Education Credential", "Feb – Apr 2026"],
    accentColor: "#86bc25",
    category: "Data & AI Credentials",
    summary: "Completed rigorous enterprise data analytics training with Deloitte Australia focused on statistical modeling, gender pay-equity classification, and executive tableau reporting. Additionally certified as a Gemini Student by Google for Education.",
    challenge: "Extracting actionable enterprise insights from messy demographic compensation data and synthesizing findings for C-suite decision makers.",
    solution: "Utilized statistical distribution modeling, outlier detection, and data storytelling to construct an executive equality scorecard.",
    results: [
      { metric: "2x", label: "Global Credentials Earned" },
      { metric: "100%", label: "Statistical Accuracy Score" },
      { metric: "A+", label: "Executive Synthesis Rating" }
    ],
    techStack: ["Data Analytics", "Gemini AI", "Excel/Sheets BI", "Statistical Modeling", "Executive Storytelling"],
    testimonial: {
      quote: "Combining corporate data analytics rigor with Google AI certification positions Hitesh as an unusually versatile growth and analytics asset.",
      author: "Academic Coordinator",
      role: "School of Computer Applications, NCET"
    },
    visualType: "deloitte-analytics",
    images: [
      { title: "Deloitte Pay-Equity Model", desc: "Regression analysis and compensation distribution chart" },
      { title: "Gemini AI Certified Student Badge", desc: "Google for Education credential verification" },
      { title: "Executive Intelligence Summary", desc: "High-impact visual dashboard for leadership review" }
    ]
  }
];

export const CAPABILITIES = [
  {
    title: "Capabilities",
    tagline: "Core technical & growth proficiencies",
    items: [
      { name: "Growth & Campus Marketing", desc: "Collegiate network activation, grassroots ambassador programs, and viral distribution campaigns." },
      { name: "Event & Hackathon Operations", desc: "End-to-end conference coordination, logistics, speaker pipelines, and registration funnels." },
      { name: "Data Analytics & SQL", desc: "Relational queries, window functions, cohort retention analysis, and performance dashboards." },
      { name: "Python Automation", desc: "Scripting, web data extraction, CSV wrangling, and workflow automation." },
      { name: "Google Cloud & Gemini AI", desc: "Leveraging foundational models, prompt chaining, and cloud compute for student initiatives." },
      { name: "Developer Community Building", desc: "Engaging technical talent across MongoDB User Group, Google Developers, and campus hackathons." },
      { name: "Brand & Sponsor Partnerships", desc: "Sponsor alignment, partner value communication, and brand storytelling." },
      { name: "Product Prototyping", desc: "Rapid UI wireframing with Figma, Tailwind CSS, and AI-accelerated MVPs." }
    ]
  },
  {
    title: "Expertise",
    tagline: "Proven operational domains & leadership",
    items: [
      { name: "Google Campus Advocacy", desc: "Selected from 125,000+ applicants to lead student developer workshops and certifications." },
      { name: "Fintech Marketing Strategy", desc: "Coordinating youth outreach and flagship hackathon ops for Paytm (One97 Communications)." },
      { name: "DevRel & Conference Execution", desc: "Running operations for 800+ registration tech summits alongside MongoDB & Google." },
      { name: "Stakeholder & Team Coordination", desc: "Aligning collegiate faculties, corporate sponsors, student volunteers, and speakers." },
      { name: "Operations & Process Refinement", desc: "Experience running daily intake, onboarding, and feedback loops at coaching institutes." },
      { name: "Data-Driven Growth Iteration", desc: "Measuring real impressions, click-through rates, and attendee conversion metrics." }
    ]
  },
  {
    title: "Inspirations & Personal Fuel",
    tagline: "The philosophy, interests & aesthetic driving my momentum",
    items: [
      { name: "Outdoor Nature Exploration", desc: "Trekking and outdoor exploration around Karnataka's Western Ghats — grounding focus and resilience." },
      { name: "Tech Innovation & Open Ecosystems", desc: "Following distributed data engines (Presto), modern database architecture, and generative AI." },
      { name: "Editorial Design & Typography", desc: "Appreciation of high-contrast Swiss typography, clean monospace layouts, and brutalist digital art." },
      { name: "Continuous Learning & Compounding", desc: "Treating every hackathon, SQL streak, and community meetup as compounding career equity." },
      { name: "Bengaluru Tech Culture", desc: "Immersed in the vibrant pulse of India's Silicon Valley, from Koramangala meetups to campus labs." }
    ]
  }
];

export const AWARDS_LIST = [
  { year: "2026", title: "Google Student Ambassador Selection", org: "Google", project: "India Campus Ambassador", category: "125,000+ Pool Selected" },
  { year: "2026", title: "Flagship Hackathon Core Ops", org: "Paytm (One97)", project: "Bengaluru Hackathon", category: "Campus Marketing" },
  { year: "2026", title: "800+ Dev Conference Lead", org: "Presto & Namma MUG", project: "Build with Presto & Namma MUG", category: "Developer Community" },
  { year: "2026", title: "VibeXathon 1.0 Finalist", org: "VibeXathon", project: "CareerGroww AI", category: "AI Product Pitch" },
  { year: "2026", title: "Gemini Certified Student", org: "Google for Education", project: "GenAI Foundations", category: "AI Credential" },
  { year: "2026", title: "Data Analytics Verified", org: "Deloitte Australia", project: "Pay-Equity Analytics", category: "Business Intelligence" },
  { year: "2025", title: "University #1 SQL Leaderboard", org: "Torii Minds", project: "70+ SQL Challenge Streak", category: "Relational Queries" },
  { year: "2025", title: "SQL Intermediate Certified", org: "HackerRank", project: "Competitive Database Track", category: "Database Engineering" },
  { year: "2025", title: "Python Essentials 1", org: "Cisco Networking Academy", project: "Core Python Programming", category: "Software Foundations" },
  { year: "2026", title: "Operations Lead Term", org: "KCET Coaching Centre", project: "Admissions & Process", category: "Operations Optimization" }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Listen & Diagnose",
    duration: "Day 01-02",
    desc: "Deeply understand the campaign objectives, target collegiate demographic, institutional guidelines, and resource constraints."
  },
  {
    step: "02",
    title: "Data Pull & Audience Signal",
    duration: "Day 03-05",
    desc: "Analyze past campaign performance, engagement drop-offs, registration funnels, and student peer influencer channels."
  },
  {
    step: "03",
    title: "Build, Partner & Mobilize",
    duration: "Sprint Phase",
    desc: "Draft communication collateral, coordinate sponsors (Google, MongoDB, Paytm), activate campus ambassadors, and execute on the ground."
  },
  {
    step: "04",
    title: "Measure, Report & Iterate",
    duration: "Review Phase",
    desc: "Consolidate verifiable numbers (impressions, check-ins, feedback ratings), run post-mortems, and systematize playbooks for scale."
  }
];

export const TESTIMONIALS = [
  {
    quote: "Hitesh combines the analytical discipline of a data builder with the social energy of a natural community marketer. His work on campus for Google sets a new benchmark.",
    author: "Community Partner",
    title: "DevRel Advocate",
    company: "Google Developer Programs",
    avatarInitials: "GP"
  },
  {
    quote: "During our Bengaluru Hackathon, Hitesh was dependable, proactive, and exceptionally thorough. He understands how to turn brand goals into ground-level collegiate action.",
    author: "Program Lead",
    title: "Campus Relations",
    company: "Paytm (One97 Communications)",
    avatarInitials: "PT"
  },
  {
    quote: "Executing a 800+ registration developer summit requires unflinching composure. Hitesh ensured seamless attendee verification and partner alignment from start to finish.",
    author: "Namma MUG Co-Organizer",
    title: "Core Team Member",
    company: "MongoDB User Group Bengaluru",
    avatarInitials: "NM"
  }
];

export const FAQS = [
  {
    q: "Are you open to work?",
    a: "Yes: internships in marketing, growth, campus programs, fintech marketing and data analytics, on-site or hybrid in Bengaluru."
  },
  {
    q: "What tools do you use?",
    a: "SQL, Python, C, Google Cloud, Gemini and standard marketing and community tools."
  },
  {
    q: "Do you do events?",
    a: "Yes. I have organised workshops, tech talks and a hackathon, and helped run an 800+ registration developer conference."
  },
  {
    q: "Where are you based?",
    a: "Bengaluru, Karnataka, India."
  }
];

export const FOLIO_PROJECTS = [
  {
    i: '00-1',
    c: 'Project',
    t: 'Paytm Bengaluru Hackathon',
    y: '2026',
    h: 250,
    k: 'Fintech Campus Marketing',
    s: ['8,261+', 'post impressions'],
    d: 'Marketing intern and campus ambassador at Paytm (One97 Communications). Supported campaign frameworks aligned to brand strategy, coordinated partnership discussions and meetups, built relationships with colleges and brand partners, and served on the core organising team for the flagship Bengaluru Hackathon under strict data-privacy and security standards.',
    sv: ['Campus Marketing', 'Event Operations', 'Brand Partnerships'],
    aw: ['4 months, Jun – Oct 2026', 'Core organising team']
  },
  {
    i: '00-2',
    c: 'Career',
    t: 'Google Student Ambassador',
    y: '2026',
    hue: 215,
    h: 215,
    k: 'Community & Campus Programs',
    s: ['125,000+', 'applicants, selected'],
    d: 'Selected from 125,000+ applicants across India to represent Google on campus. Organised workshops and tech talks, built a community of students around Google developer and career resources, and created content that helped peers discover tools, certifications and opportunities.',
    sv: ['Community Building', 'Event Management', 'Content'],
    aw: ['Google Student Ambassadors India', 'May – Oct 2026']
  },
  {
    i: '00-3',
    c: 'Project',
    t: 'Build with Presto & Namma MUG',
    y: '2026',
    h: 285,
    k: 'Developer Community',
    s: ['800+', 'registrations'],
    d: 'Joined the core Bengaluru organising team of a city-wide developer conference with 800+ registrations and 189+ industry professionals, coordinating with engineers, DevRel advocates and partners such as MongoDB and Google for Developers.',
    sv: ['DevRel Operations', 'Cross-team Coordination'],
    aw: ['Bengaluru Edition, Oct 2026']
  },
  {
    i: '00-4',
    c: 'Project',
    t: 'CareerGroww at VibeXathon 1.0',
    y: '2026',
    h: 160,
    k: 'AI Product & Pitching',
    s: ['4,566+', 'post impressions'],
    d: 'Co-built and pitched CareerGroww, an AI-driven skill-gap platform that maps industry demand to personalised learning paths, as first-year students competing against senior teams.',
    sv: ['AI Prototyping', 'Prompt Engineering', 'Product Pitching'],
    aw: ['Team of four', 'Mar 2026']
  },
  {
    i: '00-5',
    c: 'Skill',
    t: 'SQL Leaderboard Streak',
    y: '2025',
    h: 190,
    k: 'Data Analytics',
    s: ['70+', 'SQL programs solved'],
    d: 'Solved 70+ SQL programs on Torii Minds including a 50+ problem weekly sprint, ranking among top performers on university-wise and year-wise leaderboards. Also passed HackerRank SQL Intermediate and completed Cisco Python Essentials 1.',
    sv: ['SQL', 'Python', 'Data Processing'],
    aw: ['Top performer, university & year leaderboards', 'HackerRank SQL Intermediate']
  },
  {
    i: '00-6',
    c: 'Skill',
    t: 'Deloitte Analytics & Gemini Certified',
    y: '2026',
    h: 320,
    k: 'Analytics & AI Credentials',
    s: ['2', 'credentials'],
    d: 'Completed the Deloitte Australia Data Analytics virtual experience (pay-equality scoring and data classification) and earned the Gemini Certified Student credential from Google for Education.',
    sv: ['Data Analytics', 'Google AI', 'Business Intelligence'],
    aw: ['Feb – Apr 2026']
  },
  {
    i: '00-7',
    c: 'Career',
    t: 'Operations at KCET Coaching Centre',
    y: '2026',
    h: 30,
    k: 'Operations',
    s: ['3', 'months'],
    d: 'Ran daily operations for a KCET coaching centre: applicant intake, onboarding, structured follow-ups on student issues and process improvements.',
    sv: ['Operations', 'Process Optimisation'],
    aw: ['Mar – May 2026']
  }
];

export const FOCUS_AREAS = [
  {
    title: 'Capabilities',
    items: [
      'Growth & Campus Marketing',
      'Event Operations',
      'Community Building',
      'Data Analytics',
      'SQL',
      'Python',
      'Google Cloud',
      'Gemini AI'
    ]
  },
  {
    title: 'Expertise',
    items: [
      'Campus Programs',
      'Fintech Marketing',
      'DevRel Operations',
      'Stakeholder Coordination'
    ]
  },
  {
    title: 'My Inspiration',
    items: [
      'Outdoor Nature Exploration',
      'Tech Innovation',
      'Editorial Design',
      'Digital Architecture'
    ]
  }
];

export const WORKFLOW_STEPS = [
  { title: "Listen", desc: "Understand the goal, audience and constraints." },
  { title: "Research", desc: "Pull the data: funnels, audience signals, past campaign results." },
  { title: "Build & run", desc: "Plan the campaign or event, coordinate partners, execute on the ground." },
  { title: "Measure", desc: "Report with real numbers, then iterate on what worked." }
];

