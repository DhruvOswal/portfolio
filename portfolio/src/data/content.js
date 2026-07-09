export const profile = {
  name: 'Dhruv Oswal',
  fullName: 'Dhruv Dinesh Oswal',
  role: 'Full-Stack Developer & AI/Fintech Builder',
  location: 'Navi Mumbai, India',
  email: 'oswal.dinesh@s.amity.edu',
  phone: '+91 83569 42577',
  linkedin: 'https://linkedin.com/in/dhruv_oswal',
  github: 'https://github.com/DhruvOswal',
  linkedinHandle: 'dhruv_oswal',
  githubHandle: 'DhruvOswal',
};

export const aboutFacts = [
  { k: 'Name', v: 'Dhruv Dinesh Oswal' },
  { k: 'Based In', v: 'Navi Mumbai, India' },
  { k: 'Studying', v: 'B.Tech CSE, Amity University Mumbai (23 – 27)' },
  { k: 'Specialization', v: 'AI & Machine Learning' },
  { k: 'Minor', v: 'Business Management' },
  { k: 'CGPA', v: '7.8' },
];

export const aboutParagraphs = [
  "I'm a final-year Computer Science Engineering student at Amity University Mumbai, specializing in AI & Machine Learning. Most of what I build sits at the intersection of backend systems engineering and real product thinking — APIs that hold up under concurrency, dashboards people actually check daily, and now, a fintech platform I'm building from scratch.",
  "Quantro is my current focus: an AI-driven platform for personalized financial insights, built with the same instinct I bring to every project — start from the data flow, then design the interface around it.",
  "Off the keyboard, I've been the General Secretary of the Students' Council '26, which — in practice — I organize university wide events, managed collaborations & sponsorships, and media coverage for campus-scale events the same way I'd design a distributed system: lots of moving parts, and someone has to own the co-ordination layer.",
];

export const aboutChips = [
  "General Secretary, Students' Council '26",
  "Sponsorship OC Head, Technicia '25",
  "Core Committee, Nirmaan x Odoo '25",
  'Management Lead, GDG on Campus',
  'OC Head, Ami-Snapsquad',
];

export const experience = {
  title: 'ReactJS Intern',
  org: "Coders' Boutique",
  date: 'APR 2025 — JUN 2025',
  points: [
    'Developed responsive UI components using React.js and Tailwind CSS, improving user experience and reducing load time by ~20%.',
    'Built and integrated RESTful APIs using Node.js with MongoDB, contributing to full-stack feature development.',
    'Applied Git-based version control, debugging, and clean coding practices within an agile development workflow.',
  ],
};

export const skills = [
  { cat: 'LANG', name: 'JavaScript (ES6+)' }, { cat: 'LANG', name: 'TypeScript' }, { cat: 'LANG', name: 'Python' }, { cat: 'LANG', name: 'Java' }, { cat: 'LANG', name: 'C++' }, { cat: 'LANG', name: 'SQL' },
  { cat: 'FRONTEND', name: 'React.js' }, { cat: 'FRONTEND', name: 'Next.js' }, { cat: 'FRONTEND', name: 'Tailwind CSS' }, { cat: 'FRONTEND', name: 'Redux Toolkit' }, { cat: 'FRONTEND', name: 'Context API' }, { cat: 'FRONTEND', name: 'Material UI' }, { cat: 'FRONTEND', name: 'Shadcn/UI' }, { cat: 'FRONTEND', name: 'Bootstrap' },
  { cat: 'BACKEND', name: 'Node.js' }, { cat: 'BACKEND', name: 'Express.js' }, { cat: 'BACKEND', name: 'RESTful APIs' }, { cat: 'BACKEND', name: 'GraphQL' }, { cat: 'BACKEND', name: 'JWT / OAuth 2.0' }, { cat: 'BACKEND', name: 'Middleware Design' },
  { cat: 'DATA', name: 'MongoDB' }, { cat: 'DATA', name: 'PostgreSQL' }, { cat: 'DATA', name: 'MySQL' }, { cat: 'DATA', name: 'Redis' }, { cat: 'DATA', name: 'Query Optimization' }, { cat: 'DATA', name: 'Data Modeling' },
  { cat: 'CLOUD', name: 'AWS (EC2, S3, IAM, CloudFront)' }, { cat: 'CLOUD', name: 'Docker' }, { cat: 'CLOUD', name: 'Kubernetes' }, { cat: 'CLOUD', name: 'CI/CD Pipelines' }, { cat: 'CLOUD', name: 'GitHub Actions' }, { cat: 'CLOUD', name: 'Vercel' }, { cat: 'CLOUD', name: 'Netlify' },
  { cat: 'SYSTEMS', name: 'Socket.IO' }, { cat: 'SYSTEMS', name: 'WebSockets' }, { cat: 'SYSTEMS', name: 'Event-Driven Arch.' }, { cat: 'SYSTEMS', name: 'Message Queues' }, { cat: 'SYSTEMS', name: 'RBAC / API Security' },
  { cat: 'ENGINEERING', name: 'DSA' }, { cat: 'ENGINEERING', name: 'OOP & Design Patterns' }, { cat: 'ENGINEERING', name: 'System Design' }, { cat: 'ENGINEERING', name: 'Agile/Scrum' }, { cat: 'ENGINEERING', name: 'Jest / Postman' },
];

export const projects = [
  { name: 'API Workflow Automation Platform', tags: ['React', 'Node', 'PostgreSQL', 'Redis'], desc: 'No-code workflow automation inspired by Zapier and Make.', details: ['Event-driven architecture supporting trigger-action workflows across services', 'Integrated Gmail, Slack, Stripe, and webhook triggers', 'Scheduling, execution monitoring, and retry mechanisms'] },
  { name: 'Financial Analytics & Expense Management', tags: ['React', 'Node', 'PostgreSQL', 'Chart.js', 'AWS'], desc: 'Full-stack budgeting and transaction analytics platform.', details: ['Real-time dashboards with KPI reporting', 'Recurring transactions and budget planning', 'Scalable backend for large transaction datasets'] },
  { name: 'Real-Time Team Collaboration Platform', tags: ['React', 'Socket.IO', 'MongoDB', 'Redis'], desc: 'Instant messaging and workspace tool built for scale.', details: ['WebSocket comms via Socket.IO supporting thousands of concurrent connections', 'Live presence tracking, typing indicators, reactions', 'Redis Pub/Sub for real-time event distribution'] },
  { name: 'AI-Powered Interview Preparation Platform', tags: ['Next.js', 'TypeScript', 'OpenAI API', 'AWS S3'], desc: 'Practice technical and behavioral interviews with AI feedback.', details: ['AI-powered resume analysis and personalized question generation', 'Secure auth, subscription management, RBAC', 'Scalable REST APIs for progress tracking'] },
  { name: 'Multi-Vendor Food Delivery Platform', tags: ['React', 'Socket.IO', 'Stripe', 'AWS'], desc: 'Full-stack marketplace for customers, restaurants, and riders.', details: ['Real-time order tracking via WebSockets', 'Secure Stripe payment processing', 'APIs for user, restaurant, menu, and delivery ops'] },
  { name: 'Logistics & Supply Chain Management System', tags: ['React', 'PostgreSQL', 'Socket.IO', 'AWS'], desc: 'Enterprise shipment tracking and fleet management.', details: ['Real-time shipment monitoring via event-driven architecture', 'Warehouse, inventory, and route optimization modules', 'Role-based dashboards for admins and delivery personnel'] },
  { name: 'Subscription Video Streaming Platform', tags: ['Next.js', 'PostgreSQL', 'Stripe', 'AWS S3'], desc: 'A Netflix-style streaming platform with personalization.', details: ['Stripe-based subscription management', 'Watchlists, recommendations, content categorization', 'Video upload, processing, and delivery pipeline'] },
  { name: 'Quantro', tags: ['AI', 'Fintech', 'In Progress'], desc: 'AI-driven fintech platform delivering personalized financial insights.', details: ['Currently in active development', 'Combines AI-driven analysis with a decision layer for everyday investors', 'Core focus of my current build cycle'] },
];

export const education = [
  { year: '2023 — 2027', name: 'B.Tech, Computer Science Engineering', meta: 'Amity School of Engineering & Technology, Amity University Mumbai · CGPA 7.8 · AI & ML Specialization · Minor in Business Management' },
  { year: '2022', name: 'Class XII — HSC Board', meta: 'Sardar Vallabhbhai Patel College, Dahisar' },
  { year: '2020', name: 'Class X — SSC Board', meta: 'S.L. Porwal High School, Bhayander West' },
];

export const leadership = {
  Leadership: [
    { t: 'Management Lead, GDG on Campus', d: 'Leading the Google Developers Group campus chapter — team operations, event planning, and community outreach.' },
    { t: 'OC Head, AMI-Snapsquad', d: "Oversees the photography and media team's planning, execution, and delivery for campus-wide event coverage." },
    { t: "Sponsorship OC Head, Technicia '25", d: "Onboarded sponsors and ran on-ground execution for the university's biggest TechFest." },
    { t: 'Core Committee, Nirmaan x Odoo 2025', d: "Core committee for ASET/AUM's largest tech hackathon, run with ODOO India Pvt Ltd; handled sponsor onboarding." },
    { t: "Media Coverage Lead, Aminova '25", d: 'Led media coverage and planning for one of the largest inter-departmental festivals.' },
    { t: "General Management & Security, Aminova '24", d: 'Ensured event flow, crowd control, and coordination across multiple fest segments.' },
    { t: "Sports Media Lead, Sangathan '24 & '25", d: "Led photography and media teams; managed back-end prep for ASET's cluster." },
  ],
  'Media & Culture': [
    { t: "Swarajyaotsav '24 & '25", d: 'Coordinated logistics and digital coverage for the cultural celebration of Indian heritage.' },
    { t: "Model United Nations '24 & '25", d: 'Supported backend operations, delegate coordination, and shoot management.' },
    { t: "Onam '24 Shoot Team", d: 'Captured and coordinated visual media coverage of the Onam celebration.' },
    { t: 'Ami-Startup Shoot Team', d: 'Documented student startup showcases and panel discussions with the entrepreneurship cell.' },
    { t: 'Club Fair 2024, Marketing Head', d: "Designed marketing materials and built Snapsquad's brand presence." },
    { t: 'Photowalk — ASCO & Snapsquad', d: 'Organized a creative photowalk fostering peer learning in photography.' },
    { t: 'Dance Dhamaka', d: 'Contributed to digital coverage, event management, and stage coordination.' },
    { t: 'Interview with Lt. Cdr. Bijay Nair', d: 'Conducted an exclusive interaction with a decorated naval officer for event coverage.' },
    { t: "Engineer's Day '24", d: 'Helped plan and manage technical competitions and speaker panels.' },
    { t: 'Convocation 2023 & 2024', d: 'Led visual documentation and backstage execution; coordinated faculty, staff, and media.' },
    { t: "Orientation '24 — ASET & AUM", d: "Managed logistics and communication for freshers' orientation." },
  ],
  Accomplishments: [
    { t: 'Runner-Up, CSI Ideathon, DY Patil College', d: 'Secured 2nd place for an innovative tech solution in a competitive inter-collegiate ideathon.' },
    { t: "SIH '24 Hackathon Participant", d: 'Developed a practical solution for a real-world challenge at Smart India Hackathon.' },
    { t: "ODOO India Hackathon '25 Participant", d: 'Engaged in ERP-based innovation, building open-source business applications.' },
  ],
  'Community & Early Leadership': [
    { t: 'Core Member, STAMBH (NGO)', d: 'Focuses on social issues across Mumbai through collection drives and medical camps.' },
    { t: 'Student Council President — High School', d: '2019–2020. Organized school-level events during tenure.' },
    { t: 'Head Boy — High School', d: '2018–2019. Represented the school at inter-school events.' },
  ],
};

export const languages = [
  { n: 'English', l: 'Fluent' },
  { n: 'Marathi', l: 'Basics' },
  { n: 'German', l: 'Basics' },
  { n: 'Marwari', l: 'Intermediate' },
  { n: 'Gujarati', l: 'Intermediate' },
];

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/education', label: 'Education' },
  { to: '/leadership', label: 'Leadership' },
  { to: '/contact', label: 'Contact' },
];
