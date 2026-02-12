import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const BlogItem = ({ title, views, date, link }) => (
    <a href={link} target="_blank" rel="noreferrer" className="group block py-6 border-b border-slate-100 last:border-0 hover:bg-slate-50 -mx-6 px-6 rounded-xl transition-colors">
        <div className="flex justify-between items-baseline mb-2">
            <h4 className="text-lg font-medium text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                {title}
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </h4>
            <span className="text-xs font-mono text-slate-400">{date}</span>
        </div>
        <div className="text-xs font-mono text-slate-400">{views} views</div>
    </a>
);

const Writings = () => {
    return (
        <section id="writings" className="py-12">
            <div className="flex justify-between items-end mb-8">
                <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase">Writings & Blogs</h3>
                <a href="https://medium.com/@ronelmathew" target="_blank" rel="noreferrer" className="text-xs font-bold tracking-widest text-slate-900 uppercase hover:underline">View All</a>
            </div>

            <p className="max-w-2xl text-lg font-light leading-relaxed text-slate-800 mb-8">
                I host my thoughts on <span className="underline decoration-slate-300 underline-offset-4">Medium</span> rather than building a custom site. Instead of overengineering and reinventing the wheel, I prefer leveraging a mature platform that lets me focus on what matters: sharing insights on AI systems, product strategy, and technical architecture.
            </p>
        </section>
    );
};

export default Writings;
