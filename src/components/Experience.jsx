import React from 'react';

const ExperienceItem = ({ role, company, period, description }) => (
    <div className="relative pl-8 pb-12 border-l border-slate-200 last:pb-0 last:border-0">
        <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 bg-slate-400 rounded-full ring-4 ring-white"></div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h4 className="text-lg font-bold text-slate-900">{role}</h4>
            <span className="text-sm font-mono text-slate-500">{period}</span>
        </div>
        <div className="text-sm font-medium text-slate-600 mb-3">{company}</div>
        <p className="text-slate-600 leading-relaxed max-w-2xl">{description}</p>
    </div>
);

const Experience = () => {
    const experiences = [
        {
            role: "AI Engineer Trainee",
            company: " Karunya Innovation and Design Studio",
            period: "Dec 2025 - Present",
            description: "Developing AI-driven solutions and machine learning models for innovation projects at the university's design studio. Working with Python and AI frameworks to build and test intelligent systems and automation tools. Collaborating on interdisciplinary projects integrating AI with web technologies and contributing to technical documentation."
        },
        {
            role: "Technical Trainee",
            company: "Google Developer Groups on Campus",
            period: "Oct 2025 - Present",
            description: "Contributing to the development and maintenance of GDGOC's website and technical platforms through assigned components. Participating in code reviews, collaborative coding sessions, and technical discussions to support project execution. Assisting with event technical requirements including registration systems, documentation, and platform setup."
        }
    ];

    return (
        <section id="experience" className="py-12">
            <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-8">Experience</h3>
            <div className="max-w-3xl">
                {experiences.map((exp, index) => (
                    <ExperienceItem key={index} {...exp} />
                ))}
            </div>
        </section>
    );
};

export default Experience;
