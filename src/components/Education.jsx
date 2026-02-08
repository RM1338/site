import React from 'react';

const Education = () => {
    return (
        <section id="education" className="py-12">
            <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-8">Education</h3>

            <div className="w-full">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-1">
                    <h4 className="text-lg font-bold text-slate-900">Karunya Institute of Technology and Sciences</h4>
                    <span className="text-slate-400 font-light">Computer Science and Engineering</span>
                </div>
                <p className="text-slate-500 text-sm">2025 – Surviving</p>
            </div>
        </section>
    );
};

export default Education;
