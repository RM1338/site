import React from 'react';
import { profile } from '../data/profile';

const ExperienceItem = ({ role, company, period, description }) => (
    <div className="relative pl-8 pb-12 border-l border-slate-200 last:pb-0 last:border-0">
        <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 bg-slate-400 rounded-full ring-4 ring-white"></div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h4 className="text-lg font-bold text-slate-900">{role}</h4>
            <span className="text-slate-400 font-light">{period}</span>
        </div>
        <div className="text-sm font-medium text-slate-600 mb-3">{company}</div>
        <p className="text-slate-600 leading-relaxed max-w-2xl">{description}</p>
    </div>
);

const Experience = () => {
    const experiences = profile.experiences;

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
