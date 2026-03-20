import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, description, tags, link, github }) => (
    <div className="group relative bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
        <div className="flex justify-between items-start mb-4">
            <h4 className="text-lg font-bold text-slate-900">{title}</h4>
            <div className="flex gap-2">
                {github && (
                    <a href={github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
                        <Github size={20} />
                    </a>
                )}
                {link && (
                    <a href={link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
                        <ExternalLink size={20} />
                    </a>
                )}
            </div>
        </div>
        <p className="text-slate-600 mb-6 text-sm leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md">
                    {tag}
                </span>
            ))}
        </div>
    </div>
);

const Projects = () => {
    const projects = [
        {
            title: "Scribe",
            description: "A cross-platform flutter project that aims to provide a seamless and intuitive experience for transcribing, summarizing and managing meeting recordings.",
            tags: ["Flutter", "Whisper", "OpenAI v1", "Llama 3.2"],
            link: "#",
            github: "https://github.com/RM1338/Scribe"
        },
        {
            title: "Swamoz AI",
            description: "An open-source AI video dubbing platform for global creators. Features multi-language translation, voice cloning, and lip-sync synchronization.",
            tags: ["React", "FFmpeg", "Whisper", "NLLB-200", "XTTS v2", "Wav2Lip", "PostgreSQL", "Redis"],
            link: "#",
            github: "https://github.com/RM1338/SwamozAI"
        },
        {
            title: "Sevak",
            description: "Collaborative task manager with real-time updates. specialized in productivity workflows with Kanban boards and calendar views.",
            tags: ["n8n", "Llama 3.2", "OpenAI v1", "IRCTC Rapid API",  "Open Street Map API", "Open Weather Map API", "Twilio API"],
            link: "#",
            github: "https://github.com/RM1338/Sevak"
        },
        {
            title: "AI Image Generator",
            description: "Interface for generating images using Stable Diffusion API. Includes gallery and prompt history management.",
            tags: ["React", "Node.js", "OpenAI API"],
            link: "#",
            github: "#"
        }
    ];

    return (
        <section id="projects" className="py-12">
            <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-8">Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
