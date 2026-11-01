export const profile = {
    name: "Krish Gupta",
    email: "krishgupta80067@gmail.com",
    github: "https://github.com/Krish9006",
    linkedin: "https://linkedin.com/in/krishguptaji",
    resume: "/Krish_Gupta_Resume.pdf",
};

export const experience = [
    {
        period: "Jun 2026 – Aug 2026",
        role: "Full Stack Developer Intern (MERN)",
        org: "The Holidays Club",
        place: "Remote, India",
        points: [
            "Built the resort discovery module for 114 national and international properties, with a layered Repository, Mapper, Service and Hooks architecture that cleans scraped data and powers combined filters, search and sorting.",
            "Developed an end-to-end Careers portal: a multistep React form with drag-and-drop resume upload, backed by an Express and Multer API (PDF/DOC validation, 5 MB limit) that stores applications in MongoDB and sends Nodemailer confirmation emails.",
            "Integrated live maps and weather via Open-Meteo APIs and built a persistent wishlist using React Context and localStorage.",
            "Shipped the Member Reviews page (27 videos, 43 reviews, gallery of 328 photos), plus FAQ, Company and Press pages and Open Graph SEO tags.",
        ],
    },
    {
        period: "Feb 2026 – May 2026",
        role: "Full Stack AI Engineer Intern, Healthcare (Full-time)",
        org: "iAverse",
        place: "Remote, India",
        points: [
            "Engineered the entire product frontend from the ground up in Next.js and tested it against 38 backend REST APIs across 4 core modules: Authentication & Admin Control (11), Patient & Appointments (9), Doctor Schedule & Availability (10), and AI-powered medical document/OCR processing (8).",
            "Built backend services using PostgreSQL and Prisma ORM, working with the backend team on the IVR system, messaging queue and image storage pipeline for the healthcare application.",
            "Embedded AI tools and LLM workflows into development to ship faster; mapped user flows and caught edge cases and bugs before release.",
        ],
    },
    {
        period: "Feb 2026",
        role: "Freelance Full Stack Developer",
        org: "Axiora Learning",
        place: "Remote",
        points: [
            "Built a fully responsive coaching website for IGCSE and A Level students in Next.js and TypeScript with a conversion-focused UI.",
            "Cut page load times and shipped SEO-friendly pages with a reusable Tailwind CSS component library.",
            "Gathered client requirements, iterated on feedback and deployed to production on Vercel, owning the project from kickoff to handover.",
        ],
    },
];

export const education = {
    period: "2023 – Expected May 2027",
    degree: "B.Sc. (Hons.) in Data Science and Artificial Intelligence",
    org: "Indian Institute of Technology Guwahati",
    detail: "Coursework: Data Structures & Algorithms, Object-Oriented Programming, Algorithms, Python, C.",
};

export const featuredProjects = [
    {
        kind: "Freelance client work",
        title: "Axiora Learning",
        summary:
            "The website for a coaching institute serving IGCSE and A Level students (Grades 9–12): programs, admissions and a maths skill evaluation, presented clearly for parents and students.",
        highlights: [
            "Live in production for a real business, delivered from requirements to handover.",
            "Reusable Tailwind component library and SEO-friendly pages, deployed on Vercel.",
        ],
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
        image: "/images/axiora_live.jpg",
        demo: "https://www.axioralearning.com/",
        github: "https://github.com/imawadh/axiora-learning",
    },
    {
        kind: "AI product",
        title: "TrendPulse",
        summary:
            "A full-stack market-insights engine that turns natural-language queries into structured, categorised trend reports, with a personalised dashboard.",
        highlights: [
            "Multi-model fallback chain keeps the service running even when a primary model hits its API quota.",
            "Cron-scheduled news aggregation feeds a custom sentiment-scoring engine.",
            "Denormalised data model for fast insight retrieval.",
        ],
        tags: ["MERN", "Gemini AI 2.0", "Cron jobs", "REST APIs"],
        image: "/images/trendpulse_hd.jpg",
        demo: "https://trend-pulse-seven.vercel.app/",
        github: "https://github.com/Krish9006/TrendPulse",
    },
    {
        kind: "Full-stack platform",
        title: "Krishka Kitchen",
        summary:
            "A social-commerce food platform that combines food delivery with a TikTok-style video feed, with separate User and Partner roles.",
        highlights: [
            "Vertical video feed with infinite scroll across 20+ product categories.",
            "Redis caching on product listings and search to cut repeated database reads under load.",
            "12+ endpoints secured with dual-role JWT auth, rate limiting at 100 requests per 15 minutes and input validation.",
        ],
        tags: ["React", "Node.js", "Express", "MongoDB", "Redis", "JWT"],
        image: "/images/krishka_showcase.png",
        demo: "https://krishka-kitchen.vercel.app/",
        github: "https://github.com/Krish9006/krishka_Kitchen",
    },
    {
        kind: "AI product",
        title: "ContentBrain AI",
        summary:
            "A retrieval-augmented generation (RAG) platform. Upload documents, query them in real time, and get topics, content ideas and CTA recommendations back.",
        highlights: [
            "Serverless embedding pipeline on Pinecone (multilingual-e5-large).",
            "Low-latency, context-aware Q&A powered by Groq Llama-3.3-70b.",
        ],
        tags: ["Next.js", "RAG", "Pinecone", "Groq", "Tailwind CSS"],
        image: "/images/contentbrain_hd.svg",
        demo: "https://ai-insights-omega.vercel.app/",
        github: "https://github.com/Krish9006/AI-Insights",
    },
];

export const moreProjects = [
    {
        title: "Real-Time Chat",
        note: "Messaging with instant delivery, live presence and secure sign-in",
        tags: "Next.js · Convex · Clerk",
        demo: "https://chat-app-nine-eta-56.vercel.app/",
        github: "https://github.com/Krish9006/chat-App",
    },
    {
        title: "SkillSync",
        note: "Team discovery SaaS with search, JWT auth and a 3D interface",
        tags: "Next.js · Node · MongoDB · Three.js",
        demo: "https://project-buddies-krish.netlify.app/",
        github: "https://github.com/Krish9006/SkillSync-",
    },
    {
        title: "DSA AI Instructor",
        note: "Gemini-powered tutor that teaches with hints and analogies, not answers",
        tags: "React · Vite · Gemini API",
        demo: "https://dsa-ai-instructor-six.vercel.app/",
        github: "https://github.com/Krish9006/DSA-AI-Instructor",
    },
    {
        title: "Milky Drip",
        note: "Streetwear e-commerce with filtering, cart and checkout",
        tags: "React · Redux · Node · Stripe",
        demo: "https://milky-drip.vercel.app/",
        github: "https://github.com/Krish9006/MilkyDrip",
    },
    {
        title: "Food Ordering & Algo",
        note: "Ordering platform with a custom recommendation algorithm",
        tags: "React · Algorithms · APIs",
        demo: "https://react-nitin-sir.vercel.app/",
        github: "https://github.com/Krish9006/React-Nitin-Sir",
    },
];

export const services = [
    {
        title: "Web applications",
        description:
            "Responsive, SEO-aware frontends in React and Next.js, built with clean component structure and typed where it helps.",
        tags: ["Next.js", "React", "TypeScript"],
    },
    {
        title: "APIs and backend",
        description:
            "REST APIs with JWT authentication, validation, rate limiting and caching on Node, Express, MongoDB and PostgreSQL.",
        tags: ["Node.js", "Prisma", "Redis"],
    },
    {
        title: "AI features",
        description:
            "LLM integrations, RAG pipelines and AI orchestration with sensible fallbacks, plus OCR and document workflows.",
        tags: ["RAG", "Gemini", "Vector DBs"],
    },
    {
        title: "Client delivery",
        description:
            "Requirements to deployment on my own: gathering needs, iterating on feedback and handing over a maintainable product.",
        tags: ["3 client projects", "Vercel", "Render"],
    },
];

export const stack = [
    { group: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "C"] },
    { group: "Frontend", items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Context API", "Responsive design"] },
    { group: "Backend", items: ["Node.js", "Express.js", "REST API design", "JWT authentication", "Redis", "Rate limiting", "Multer", "Nodemailer", "Clerk"] },
    { group: "Databases", items: ["MongoDB", "Mongoose", "MySQL", "PostgreSQL", "Prisma ORM"] },
    { group: "AI / ML", items: ["LLM integration", "Gemini API", "RAG", "Prompt engineering", "AI orchestration", "Vector databases", "OCR processing"] },
    { group: "Tools & platforms", items: ["Git", "GitHub", "Vercel", "Netlify", "Render", "Docker", "Postman", "VS Code"] },
];
