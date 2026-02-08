import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const TechStack = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const categories = [
        {
            title: "LANGUAGES",
            items: [
                { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
                { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            ]
        },
        {
            title: "FRONTEND",
            items: [
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
                { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
                { name: "Framer Motion", icon: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg" },
            ]
        },
        {
            title: "BACKEND & DB",
            items: [
                { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
                { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
                { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
                { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
            ]
        },
        {
            title: "INFRA & TOOLS",
            items: [
                { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
                { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
                { name: "Vercel", icon: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" },
                { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
                { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
                { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
            ]
        },
        {
            title: "AI & ML",
            items: [
                { name: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
                { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
            ]
        }
    ];

    // Collect all items for the marquee
    const marqueeItems = categories.flatMap(cat => cat.items);
    // Duplicate for infinite effect
    const duplicatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

    return (
        <section id="tech-stack" className="py-12 overflow-hidden">
            <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-8">Tech Stack</h3>

            <div className="space-y-6">
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-normal">
                    I'm a generalist at heart who can build with anything, but here's the core stack I've spent the most time with:
                </p>

                <div className="flex flex-col items-end">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-slate-400 uppercase hover:text-slate-600 transition-colors mb-4"
                    >
                        {isExpanded ? (
                            <>SHOW LESS <ChevronUp size={14} /></>
                        ) : (
                            <>VIEW FULL STACK <ChevronDown size={14} /></>
                        )}
                    </button>

                    <AnimatePresence mode="wait">
                        {!isExpanded ? (
                            <motion.div
                                key="marquee"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="w-full relative py-12"
                            >
                                <motion.div
                                    className="flex gap-12 whitespace-nowrap"
                                    animate={{
                                        x: [0, -1200]
                                    }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                >
                                    {duplicatedItems.map((item, index) => (
                                        <div key={index} className="flex-shrink-0">
                                            <img
                                                src={item.icon}
                                                alt={item.name}
                                                className="h-10 w-10 object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-500 ease-in-out cursor-default"
                                            />
                                        </div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="grid"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                className="w-full pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16"
                            >
                                {categories.map((cat) => (
                                    <div key={cat.title} className="space-y-8">
                                        <h4 className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase border-b border-slate-100 pb-3">
                                            {cat.title}
                                        </h4>
                                        <div className="space-y-6">
                                            {cat.items.map((item) => (
                                                <div key={item.name} className="flex items-center gap-5 group">
                                                    <div className="w-6 h-6 flex items-center justify-center transition-all duration-500">
                                                        <img src={item.icon} alt={item.name} className="w-full h-full object-contain grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500" />
                                                    </div>
                                                    <span className="text-sm font-medium text-slate-500 group-hover:text-slate-900 transition-colors duration-300">
                                                        {item.name}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
