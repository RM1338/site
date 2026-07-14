// Single source of truth for portfolio content.
// Both the normal-mode components and the agent view (AgentView.jsx) render from
// this file, so content is authored once and stays in sync across both modes.
//
// Text may contain a lightweight markdown subset ([label](url), **bold**):
//   - normal mode renders it via renderInline() in src/lib/richText.jsx
//   - agent mode prints it verbatim as its terminal/markdown aesthetic

export const profile = {
    name: 'Ronel Abraham Mathew',
    phonetic: '/roʊˈnɛl/',
    resumeUrl: '/RonelAbrahamMathewResume.pdf',

    about: [
        `a software engineer and [product builder](https://en.wikipedia.org/wiki/Product_design) with hands on experience in game development, programming, and building problem-solving products.`,
        `a [polymath](https://en.wikipedia.org/wiki/Polymath) who bridges code architecture with real-world projects to create engaging, scalable apps and workflows.`,
    ],

    experiences: [
        {
            role: 'AI Engineer Trainee',
            company: 'Karunya Innovation and Design Studio',
            url: 'https://www.karunya.edu/',
            period: 'Dec 2025 - Present',
            description: `Working on AI across the stack, with a focus on agentic and generative AI. Building autonomous tool-using agents and multi-step reasoning workflows, and turning them into real products people can use. Prototyping with Python and modern LLM frameworks, iterating from research experiments to production-grade systems.`,
        },
        {
            role: 'Technical Trainee',
            company: 'Google Developer Groups on Campus',
            url: 'https://gdg.community.dev/',
            period: 'Oct 2025 - Jun 2026',
            description: `Contributed to the development and maintenance of GDGOC's website and technical platforms through assigned components. Participated in code reviews, collaborative coding sessions, and technical discussions to support project execution. Assisted with event technical requirements including registration systems, documentation, and platform setup.`,
        },
    ],

    productJourney: {
        intro: `I've been building and experimenting on the product side for a long time. Each previous product always feels naive in hindsight, but looking back, I can see they were incrementally better, each iteration teaching me something new about users, infrastructure, and what it takes to build something people actually want.`,
        items: [
            `Built Scribe, a cross-platform Flutter app that records meetings, transcribes audio locally, and generates AI summaries - decisions, action items, the gist - in seconds. It taught me how to ship a real product end to end: on-device inference, offline-first storage, and an experience people actually reach for.`,
            `Then Swamoz, a video dubbing platform with lip-sync using machine learning. Real users, real performance constraints, real technical debt. Synchronizing dubbed audio with mouth movements, handling multiple languages, deploying ML models in production. This is where all the fundamentals came together.`,
            `Right now I'm building Gremlin, an autonomous agent that explores a Flutter app like a confused user and files a reproducible bug report every time the framework's own logs report a failure. A vision model decides where to tap; exact log matching decides what's broken. It's the hardest thing I've built - reasoning loops, real devices, and a React console to watch it all happen live.`,
        ],
        closing: `So yes, hard work and consistency pay off. Each product was a step forward, even when it didn't feel like it at the time.`,
    },

    projects: [
        {
            title: 'Scribe',
            description: `A cross-platform Flutter app that records meetings, transcribes audio locally, and generates AI summaries — decisions, action items, and the gist — in seconds. Features language detection, translation, a meeting scheduler with reminders, and PDF export.`,
            tags: ['Flutter', 'Dart', 'Groq Whisper', 'Llama 3.3', 'Supabase'],
            link: 'https://getscribe.pages.dev',
            github: 'https://github.com/RM1338/Scribe',
        },
        {
            title: 'Gremlin',
            description: `An autonomous agent that explores a Flutter app like a confused user and files a reproducible bug report every time the framework's own logs scream. A vision model decides where to tap; exact logcat signal-matching decides what's broken — no hallucinated bugs. Ships with a React console for live runs, traces, and benchmarks.`,
            tags: ['Python', 'FastAPI', 'React', 'Gemini', 'Groq', 'adb / Android', 'Claude CLI'],
            link: '#',
            github: 'https://github.com/RM1338/Gremlin',
        },
        {
            title: 'Swamoz AI',
            description: `An open-source AI video dubbing platform for global creators. Features multi-language translation, voice cloning, and lip-sync synchronization.`,
            tags: ['React', 'FFmpeg', 'Whisper', 'NLLB-200', 'XTTS v2', 'Wav2Lip', 'PostgreSQL', 'Redis'],
            link: '#',
            github: 'https://github.com/RM1338/SwamozAI',
        },
    ],

    techStack: [
        {
            title: 'LANGUAGES',
            items: [
                { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
                { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            ],
        },
        {
            title: 'FRONTEND',
            items: [
                { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
                { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
                { name: 'Framer Motion', icon: 'https://www.vectorlogo.zone/logos/framer/framer-icon.svg' },
            ],
        },
        {
            title: 'BACKEND & DB',
            items: [
                { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
                { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
                { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
                { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
            ],
        },
        {
            title: 'INFRA & TOOLS',
            items: [
                { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
                { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
                { name: 'Vercel', icon: 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png' },
                { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
                { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
                { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
            ],
        },
        {
            title: 'AI & ML',
            items: [
                { name: 'Hugging Face', icon: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg' },
                { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
            ],
        },
    ],

    education: {
        school: 'Karunya Institute of Technology and Sciences',
        degree: 'Computer Science and Engineering',
        period: '2025 – Surviving',
    },

    library: {
        dev: [
            { title: 'Linux Kernel Development', author: 'Robert Love' },
            { title: 'Hacking: The Art of Exploitation', author: 'Jon Erickson' },
            { title: 'Linux in a Nutshell', author: 'Ellen Siever, Stephen Figgins, et al.' },
            { title: 'The Art of Electronics', author: 'Paul Horowitz and Winfield Hill' },
            { title: 'Nmap Cookbook', author: 'Nicholas Marsh' },
        ],
        casual: [
            { title: 'Hooked: How to Build Habit-Forming Products', author: 'Nir Eyal' },
            { title: 'The Lean Startup', author: 'Eric Ries' },
            { title: 'Zero to One', author: 'Peter Thiel' },
            { title: 'Atomic Habits', author: 'James Clear' },
            { title: 'The 48 Laws of Power', author: 'Robert Greene' },
        ],
        note: '*and many more, these are just one of my best reads',
    },

    contact: {
        blurb: `Connect with me on [LinkedIn](https://linkedin.com/in/ronelm) or shoot an [email](mailto:rma80070@gmail.com)`,
        email: 'rma80070@gmail.com',
        linkedin: 'https://linkedin.com/in/ronelm',
        github: 'https://github.com/RM1338',
    },
};

export default profile;
