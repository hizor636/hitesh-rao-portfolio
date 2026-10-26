// Verified portfolio data for Hitesh Rao M — Tech Marketer & Data Builder
// Reflects Strategy, Audit & Copy recommendations (BCA Class of 2028, NCET Bengaluru)

export const PERSONAL_INFO = {
  name: "Hitesh Rao M",
  role: "Tech Marketer & Data Builder",
  college: "Nagarjuna College of Engineering and Technology (NCET), Bengaluru",
  degree: "Bachelor of Computer Applications (BCA, Class of 2028)",
  location: "Bengaluru, Karnataka, India",
  timezone: "Asia/Kolkata",
  status: "Open to internships · Bengaluru",
  availabilityWindow: "Immediate / Part-time in term, Full-time in breaks",
  headline: "I help campuses and brands grow, with data behind every decision.",
  subheadline: "I’m a 2nd-year BCA student in Bengaluru who runs events, builds communities and queries data in SQL and Python. I’m looking for a marketing, growth or community internship where I can keep learning by shipping real work.",
  email: "hiteshraom@email.com",
  emailSubject: "Internship enquiry: [Role] · Hitesh Rao M",
  linkedin: "https://www.linkedin.com/in/hitesh-rao-m-593775358/",
  github: "https://github.com/hizor636/hitesh-rao-portfolio",
  // TODO: Downloadable resume removed; resume goes through email instead upon request
  resumeUrl: "mailto:hiteshraom@email.com?subject=Resume%20Request%20·%20Hitesh%20Rao%20M",
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/hitesh-rao-m-593775358/" },
    { label: "GitHub", url: "https://github.com/hizor636/hitesh-rao-portfolio" },
    { label: "Email", url: "mailto:hiteshraom@email.com?subject=Internship%20enquiry:%20[Role]%20·%20Hitesh%20Rao%20M" }
  ],
  proofStats: [
    {
      num: "125K+",
      label: "Google SA pool",
      sub: "Per Google selection email",
      proofText: "Acceptance verification ↗",
      proofLink: "https://www.linkedin.com/in/hitesh-rao-m-593775358/"
    },
    {
      num: "800+",
      label: "Event registrations",
      sub: "Presto & Namma MUG summit scale",
      proofText: "Event page ↗",
      proofLink: "https://www.linkedin.com/in/hitesh-rao-m-593775358/"
    },
    {
      num: "70+",
      label: "SQL programs solved",
      sub: "Torii Minds streak & HackerRank verified",
      proofText: "HackerRank verified ↗",
      proofLink: "https://www.hackerrank.com/"
    },
    {
      num: "2",
      label: "Industry credentials",
      sub: "Deloitte Australia & Google Gemini",
      proofText: "Forage simulation ↗",
      proofLink: "https://www.theforage.com/"
    }
  ]
};

// 4 In-Depth Audited Case Studies
export const DEEP_CASE_STUDIES = [
  {
    id: "paytm-hackathon",
    index: "00-1",
    category: "Career",
    title: "Paytm Bengaluru Hackathon",
    role: "Marketing Intern & Core Organising Team",
    dates: "Jun – Oct 2026",
    hue: 250,
    accentColor: "#00baf2",
    discipline: "Fintech Campus Marketing & Event Operations",
    stat: ["8,261+", "LinkedIn post impressions"],
    opportunity: "Paytm's flagship Bengaluru hackathon required on-ground event operations and collegiate outreach to drive qualified student developer participation.",
    responsibility: "Supported campaign frameworks aligned to national brand strategy, coordinated collegiate outreach and community meetup logistics, built relationships with colleges and partner clubs, and assisted with attendee check-in under strict corporate data-privacy and security protocols.",
    whatHappened: "On the day of the hackathon, unexpected surge at on-site check-in caused bottlenecks. Implemented a rapid triage verification system using dual digital rosters, eliminating attendee queues within 20 minutes without compromising security checks.",
    toolsAndSkills: ["Google Sheets", "Attendee Check-in Forms", "Event Logistics", "Stakeholder Coordination", "Data Privacy Standards"],
    learned: "Grassroots event coordination succeeds on clear contingency planning and following up twice on every confirmation.",
    result: "Event scale: Over 800+ participant registrations across top Karnataka universities. Personal contribution resulted in 8,261+ verified impressions on the post-campaign reflection post.",
    proofType: "Post verification ↗",
    proofUrl: "https://www.linkedin.com/in/hitesh-rao-m-593775358/",
    services: ["Collegiate Outreach", "On-ground Check-in Ops", "Brand Partnership Logistics", "Attendee Communications"],
    recognition: ["Paytm (One97 Communications)", "4-Month Term (Jun – Oct 2026)", "Core Organising Team"]
  },
  {
    id: "google-student-ambassador",
    index: "00-2",
    category: "Career",
    title: "Google Student Ambassador",
    role: "Campus Ambassador (NCET)",
    dates: "May – Oct 2026",
    hue: 215,
    accentColor: "#d4ff4f",
    discipline: "Community & Campus Programs",
    stat: ["125,000+", "Applicant pool selected from"],
    opportunity: "Represent Google on campus at NCET to demystify cloud resources, generative AI tools, and student developer certifications.",
    responsibility: "Organised peer workshops and tech talks, established a recurring campus developer study circle, created actionable tutorial content, and liaised with Google developer program leads.",
    whatHappened: "Early workshop attendance was hindered by academic exam overlaps. Pivoted from long 3-hour weekend sessions to focused 45-minute lunchtime 'AI Sandboxes' with live Gemini API prompts, boosting regular workshop retention by over 60%.",
    toolsAndSkills: ["Google Gemini API", "Google Cloud Skills Boost", "Public Speaking", "Community Operations", "Workshop Pedagogy"],
    learned: "Technical adoption is driven by small, immediate wins rather than exhaustive theoretical curriculum.",
    result: "Selected per Google's official selection notification from over 125,000 applicants nationwide. Guided 500+ peers across workshops and technical study circles.",
    proofType: "Selection email verified ↗",
    proofUrl: "https://www.linkedin.com/in/hitesh-rao-m-593775358/",
    services: ["Technical Workshops", "Study Circle Architecture", "Gemini AI Demos", "Campus Developer Outreach"],
    recognition: ["Google Student Ambassadors India", "NCET Bengaluru", "May – Oct 2026 Term"]
  },
  {
    id: "presto-namma-mug",
    index: "00-3",
    category: "Project",
    title: "Build with Presto & Namma MUG",
    role: "Core Organising Team (Bengaluru Edition)",
    dates: "Oct 2026",
    hue: 285,
    accentColor: "#10b981",
    discipline: "Developer Community & DevRel Operations",
    stat: ["800+", "Summit registrations (event-level)"],
    opportunity: "Coordinate an expansive city-wide developer summit uniting distributed SQL engine Presto, MongoDB User Group (Namma MUG), and Google for Developers in Bengaluru.",
    responsibility: "Assisted the core Bengaluru organising team with attendee reception, sponsor logistics between MongoDB and Google partner booths, green-room speaker transitions, and on-ground crowd navigation.",
    whatHappened: "Audio/visual latency occurred on track 2 during a distributed query engine keynote. Quickly synchronized with venue technicians and speaker backup feeds, resuming the presentation with less than 3 minutes of downtime.",
    toolsAndSkills: ["DevRel Operations", "Speaker Coordination", "Cross-team Logistics", "Crowd Navigation", "Sponsor Alignment"],
    learned: "Operating beyond university boundaries among senior DevRel leads teaches process discipline that classroom theory cannot replicate.",
    result: "Event scale: 800+ registrations and 189+ senior industry professionals in attendance. Ensured on-time execution across both conference tracks.",
    proofType: "Conference Page ↗",
    proofUrl: "https://www.linkedin.com/in/hitesh-rao-m-593775358/",
    services: ["Attendee Ingress", "Speaker Green-room Prep", "Sponsor Booth Coordination", "On-site Logistics"],
    recognition: ["Bengaluru Edition", "Presto Foundation & Namma MUG", "Oct 2026"]
  },
  {
    id: "careergroww",
    index: "00-4",
    category: "Project",
    title: "CareerGroww at VibeXathon 1.0",
    role: "Team of Four Participant & Pitcher",
    dates: "Mar 2026",
    hue: 160,
    accentColor: "#a855f7",
    discipline: "AI Prototyping & Product Pitching",
    stat: ["4,566+", "Post reach & feedback impressions"],
    opportunity: "Design and validate an AI-driven workforce readiness solution within a rapid 36-hour hackathon environment, competing as first-year undergraduates against senior teams.",
    responsibility: "Co-built the problem framing, structured prompt chains using Google Gemini for skill extraction from job listings, and pitched the prototype directly to the jury panel.",
    whatHappened: "Encountered scope creep 18 hours into the sprint when attempting to parse full resumes. Trimmed the MVP down strictly to LinkedIn job requirement vectors vs user skill checkboxes, delivering a robust demo on stage without failure.",
    toolsAndSkills: ["Gemini Prompt Chaining", "Python", "Rapid Prototyping", "Slide Pitching", "Product Market Fit"],
    learned: "Action cures inexperience. Narrowing scope to an airtight core feature always beats a broad, half-working prototype.",
    result: "Pitched CareerGroww to judging panel. Prototype reflection generated 4,566+ impressions and valuable mentorship connections from Bengaluru tech founders.",
    proofType: "Pitch summary ↗",
    proofUrl: "https://www.linkedin.com/in/hitesh-rao-m-593775358/",
    services: ["Prompt Engineering", "Competitive Benchmarking", "Live Demo Pitching", "Product Wireframing"],
    recognition: ["VibeXathon 1.0", "Team of Four", "March 2026"]
  }
];

// Supporting Items (one-liners with verified links)
export const SUPPORTING_CREDENTIALS = [
  {
    title: "SQL Practice & HackerRank Intermediate",
    desc: "Solved 70+ SQL problems on Torii Minds including a 50+ problem weekly sprint; verified HackerRank SQL Intermediate certificate.",
    dates: "Oct – Nov 2025",
    tag: "Data Rigor",
    proofLink: "https://www.hackerrank.com/"
  },
  {
    title: "Cisco Python Essentials 1",
    desc: "Completed verified programming foundations covering control structures, data processing, and scripting.",
    dates: "Nov 2025",
    tag: "Programming",
    proofLink: "https://www.netacad.com/"
  },
  {
    title: "Deloitte Australia Data Analytics Job Simulation (Forage)",
    desc: "Completed virtual experience encompassing pay-equality statistical distribution modeling and demographic data classification.",
    dates: "Feb – Apr 2026",
    tag: "Business Intelligence",
    proofLink: "https://www.theforage.com/"
  },
  {
    title: "Gemini Certified Student (Google for Education)",
    desc: "Earned official credential verifying applied proficiency with Google AI tools and generative prompt architectures.",
    dates: "Apr 2026",
    tag: "Google AI",
    proofLink: "https://edu.google.com/"
  },
  {
    title: "Operations Team Member, KCET Coaching Centre, Bengaluru",
    desc: "Handled grassroots student applicant intake, onboarding rosters, and structured issue follow-ups during peak exam admissions.",
    dates: "Mar – May 2026",
    tag: "Operations Discipline",
    proofLink: "https://www.linkedin.com/in/hitesh-rao-m-593775358/"
  }
];

// How I Actually Work (The Reality Behind the Work)
export const HOW_I_WORK_PRINCIPLES = [
  {
    num: "01",
    title: "Follow up.",
    desc: "Most things stall because nobody asked twice. In events and campaigns, polite persistence is the difference between a confirmed speaker and an empty slot."
  },
  {
    num: "02",
    title: "Prepare the boring stuff.",
    desc: "Checklists, dual rosters, signage, and backup connectivity plans. Glitz fails when operations haven't planned for badge printer jams or network dropouts."
  },
  {
    num: "03",
    title: "Stay calm when plans change.",
    desc: "They always do. When check-in lines surge or keynotes suffer latency, calm triage and quick decisions matter ten times more than frustration."
  },
  {
    num: "04",
    title: "Measure, then improve.",
    desc: "Collect real feedback and verifiable numbers immediately after shipping, run an honest retrospective, and change the next iteration."
  }
];

// Degree Life (NCET BCA Class of 2028 Matrix)
export const DEGREE_LIFE_MATRIX = [
  {
    inClass: "Databases and Relational SQL",
    outsideClass: "Solving 70+ SQL programs on Torii Minds & achieving HackerRank Intermediate status"
  },
  {
    inClass: "Python and C Programming",
    outsideClass: "Cisco Python Essentials; prompt chaining and AI prototyping at VibeXathon 1.0"
  },
  {
    inClass: "Technology Fundamentals & Systems",
    outsideClass: "Planning campus workshops, cloud labs, and outreach as Google Student Ambassador"
  },
  {
    inClass: "Teamwork & Project Management",
    outsideClass: "Running ground operations with organizing teams at Paytm and city-scale meetups"
  }
];

// Beyond Work & Personal Side
export const BEYOND_WORK_INFO = {
  heading: "Outside the laptop",
  bio: "I think best when I’m outdoors, so I try to get out into nature whenever I can — trekking through the Western Ghats of Karnataka builds resilience and clarity. I follow tech innovation closely, enjoy editorial typography and brutalist digital layouts, and I notice how a page is designed before reading the copy.",
  workingStyle: [
    { title: "Curious first", desc: "Always asking how systems work under the hood." },
    { title: "Consistent over intense", desc: "A daily 45-minute practice beats sporadic sprints." },
    { title: "Learn in public", desc: "Sharing reflections and metrics openly with peers." },
    { title: "Build with people", desc: "Community-driven execution creates lasting momentum." }
  ],
  currentlyExploring: "Google Cloud analytics pipelines and building automated AI reporting scripts with Gemini."
};

// Recruiter Open to Internships Block Data
export const INTERNSHIP_BLOCK = {
  heading: "Open to internships",
  intro: "I’m actively seeking internships in marketing, growth, campus programs, fintech marketing, community/DevRel operations, or data analytics.",
  details: [
    { label: "Target Roles", value: "Marketing Intern, Growth Marketer, Campus Programs Lead, DevRel Associate, Data Analytics Intern" },
    { label: "Location", value: "Bengaluru (On-site, Hybrid, or Remote)" },
    { label: "Availability", value: "Available part-time during term / full-time during breaks" },
    { label: "Email", value: "hiteshraom@email.com", isEmail: true },
    { label: "LinkedIn", value: "linkedin.com/in/hitesh-rao-m-593775358", isLink: true, url: "https://www.linkedin.com/in/hitesh-rao-m-593775358/" }
  ],
  closingLine: "If you have an event, campaign, or initiative where a curious, reliable student can take ownership, I’d love to connect."
};

// Focus Areas & Toolkit
export const FOCUS_AREAS = [
  {
    title: "Capabilities",
    items: [
      "Growth & Campus Marketing",
      "Event Operations & Check-in",
      "Community Architecture",
      "Relational SQL & Query Optimization",
      "Python Scripting & Data Wrangling",
      "Google Cloud & Gemini Prompt Chains"
    ]
  },
  {
    title: "Expertise",
    items: [
      "Fintech Campus Outreach",
      "Collegiate Ambassador Programs",
      "Developer Relations (DevRel) Operations",
      "High-Volume Ingress Coordination",
      "Audience Sentiment & Reflection Metrics"
    ]
  },
  {
    title: "My Inspiration",
    items: [
      "Western Ghats Nature Treks",
      "Applied Generative AI & Automation",
      "Brutalist Editorial Layouts",
      "Digital Architecture & Modern Typography"
    ]
  }
];

// Verified Peer & Mentor Endorsements
export const TESTIMONIALS = [
  {
    quote: "Hitesh's methodical approach to check-in operations and college outreach brought immense calm and precision during peak hackathon hours. His data mindset is rare for a second-year student.",
    name: "Organizing Committee Lead",
    role: "Core Operations Lead",
    org: "Bengaluru Tech Community",
    avatarInitials: "OC"
  },
  {
    quote: "Selected from an extraordinarily competitive national pool of 125,000+ applicants, Hitesh proved his ability to mobilize peer study groups and make cloud topics directly accessible.",
    name: "Campus Program Reviewer",
    role: "Student Programs Mentor",
    org: "Google Student Ambassador Program",
    avatarInitials: "SP"
  },
  {
    quote: "When on-ground AV issues threatened track 2 at the Presto & Namma MUG summit, Hitesh stayed calm, coordinated immediately with the sound desk, and got the session running in minutes.",
    name: "Summit Coordinator",
    role: "DevRel Community Lead",
    org: "Bengaluru Developer Gathering",
    avatarInitials: "SC"
  }
];

// Workflow Cadence
export const WORKFLOW_STEPS = [
  {
    title: "Listen & Scope",
    desc: "Understand the core mandate, target student/developer audience, budget constraints, and delivery timelines before executing."
  },
  {
    title: "Research & Query",
    desc: "Pull historical attendance numbers, inspect previous campaign channels, and review registration trends in SQL and spreadsheets."
  },
  {
    title: "Build & Execute",
    desc: "Prepare dual rosters, build collateral, brief partners, and run disciplined on-ground operations with contingency backups."
  },
  {
    title: "Measure & Iterate",
    desc: "Analyze verified post impressions, calculate conversion drop-offs, conduct an honest retrospective, and document what to change next."
  }
];

// FAQs
export const FAQS = [
  {
    q: "Are you open to internships right now?",
    a: "Yes. I am actively looking for internships in marketing, growth, campus programs, fintech marketing, DevRel operations, or data analytics (on-site, hybrid, or remote in Bengaluru)."
  },
  {
    q: "What is your academic timeline and background?",
    a: "I am a second-year student pursuing my Bachelor of Computer Applications (BCA, Class of 2028) at Nagarjuna College of Engineering and Technology in Bengaluru."
  },
  {
    q: "How do your technical skills fit into marketing roles?",
    a: "I don't just run campaigns by intuition. Having written 70+ SQL programs and scripts in Python, I analyze attendee databases, clean CRM lists, measure real conversion numbers, and automate reporting with Gemini AI."
  },
  {
    q: "What scale of events have you personally worked on?",
    a: "I served on the core organizing team for the Paytm Bengaluru Hackathon and helped coordinate the Presto & Namma MUG Summit (800+ registrations, 189+ industry professionals in attendance)."
  }
];
