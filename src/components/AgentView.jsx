import { useState, useEffect } from 'react';
import { profile } from '../data/profile';

// Agent view: renders the SAME content as normal mode (from src/data/profile.js)
// in a terminal/markdown style. Markdown markers in the data ([label](url),
// **bold**) are intentionally printed verbatim as part of the aesthetic.
const AgentView = () => {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const timestamp = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'Asia/Kolkata' });

    return (
        <div className="max-w-[750px] mx-auto py-12 font-mono text-[14px] text-slate-800 leading-relaxed overflow-x-hidden selection:bg-slate-200">
            <div className="space-y-16">
                {/* Header Section */}
                <header>
                    <h1 className="text-xl font-normal mb-1"># {profile.name}</h1>
                    <p className="text-slate-500">{profile.phonetic} • noun • {timestamp} IST</p>
                </header>

                {/* About */}
                <section>
                    <h2 className="text-lg font-normal mb-8">## About</h2>
                    <div className="space-y-6 text-slate-700 max-w-2xl">
                        {profile.about.map((line, i) => (
                            <p key={i}>{line}</p>
                        ))}
                    </div>
                </section>

                {/* Experience */}
                <section>
                    <h2 className="text-lg font-normal mb-10">## Experience</h2>
                    <div className="space-y-12">
                        {profile.experiences.map((exp, i) => (
                            <div key={i}>
                                <h3 className="font-normal mb-2">### {exp.company}</h3>
                                <p className="font-bold">**{exp.role}**</p>
                                <p className="text-slate-400 mb-4">[{exp.url}]({exp.url})</p>
                                <p className="ml-1 leading-relaxed">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Product Journey */}
                <section>
                    <h2 className="text-lg font-normal mb-8">## In Between These Experiences</h2>
                    <div>
                        <h3 className="text-base font-normal mb-4">### The Product Building Journey</h3>
                        <p className="mb-8 leading-relaxed">{profile.productJourney.intro}</p>
                        <div className="space-y-6">
                            {profile.productJourney.items.map((item, i) => (
                                <p key={i}>{item}</p>
                            ))}
                        </div>
                        <p className="mt-12 font-bold italic">**{profile.productJourney.closing}**</p>
                    </div>
                </section>

                {/* Projects */}
                <section>
                    <h2 className="text-lg font-normal mb-8">## Projects</h2>
                    <div className="space-y-8">
                        {profile.projects.map((project, i) => (
                            <div key={i}>
                                <h3 className="font-normal mb-1">### {project.title}</h3>
                                <p className="text-slate-400 mb-2">[{project.github}]({project.github})</p>
                                <p className="ml-1 leading-relaxed mb-2">{project.description}</p>
                                <p className="text-slate-500 text-[13px]">`{project.tags.join('` `')}`</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Tech Stack */}
                <section>
                    <h2 className="text-lg font-normal mb-6">## Tech Stack</h2>
                    <p className="text-slate-600 font-normal leading-loose">
                        {profile.techStack.flatMap((cat) => cat.items.map((item) => item.name)).join(', ')}
                    </p>
                </section>

                {/* Education */}
                <section>
                    <h2 className="text-lg font-normal mb-6">## Education</h2>
                    <div>
                        <h3 className="font-normal text-slate-800 mb-1">### {profile.education.school}</h3>
                        <p className="font-bold">**{profile.education.degree}**</p>
                        <p className="text-slate-500 text-sm mt-1">{profile.education.period}</p>
                    </div>
                </section>

                {/* Library */}
                <section>
                    <h2 className="text-lg font-normal mb-8">## Library</h2>
                    <div className="space-y-8">
                        <div>
                            <h4 className="font-bold mb-3">### Dev</h4>
                            <ul className="list-none space-y-2">
                                {profile.library.dev.map((book, i) => (
                                    <li key={i}>- **{book.title}** by {book.author}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-3">### Casual Reads</h4>
                            <ul className="list-none space-y-2">
                                {profile.library.casual.map((book, i) => (
                                    <li key={i}>- **{book.title}** by {book.author}</li>
                                ))}
                            </ul>
                        </div>
                        <p className="text-xs text-slate-400 italic mt-6">{profile.library.note}</p>
                    </div>
                </section>

                {/* Contact */}
                <section>
                    <h2 className="text-lg font-normal mb-6">## Get in Touch</h2>
                    <p className="mb-6 leading-relaxed">{profile.contact.blurb}</p>
                    <div className="space-y-2">
                        <p>- Mail: [email](mailto:{profile.contact.email})</p>
                        <p>- LinkedIn: [{profile.contact.linkedin}]({profile.contact.linkedin})</p>
                        <p>- GitHub: [{profile.contact.github}]({profile.contact.github})</p>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default AgentView;
