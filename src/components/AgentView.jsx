const AgentView = () => {
    const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });

    return (
        <div className="max-w-[750px] mx-auto py-12 font-mono text-[14px] text-slate-800 leading-relaxed overflow-x-hidden selection:bg-slate-200">
            <div className="space-y-16">
                {/* Header Section */}
                <header>
                    <h1 className="text-xl font-normal mb-1"># Ronel Abraham Mathew</h1>
                    <p className="text-slate-500">/roʊˈnɛl/ • noun • {timestamp} IST</p>
                </header>

                {/* About/Hero Context */}
                <section>
                    <h2 className="text-lg font-normal mb-8">## About</h2>
                    <div className="space-y-6 text-slate-700 max-w-2xl">
                        <p>A student and [product builder](https://en.wikipedia.org/wiki/Product_design) with a focus on engineering, AI systems, and technical architecture.</p>
                        <p>I build autonomous, goal-driven systems that shift from suggestion-based tools to proactive execution, exploring the intersection of AI and human-AI collaboration.</p>
                    </div>
                </section>

                {/* Experience Section */}
                <section>
                    <h2 className="text-lg font-normal mb-10">## Experience</h2>
                    <div className="space-y-12">
                        <div>
                            <h3 className="font-normal mb-2">### Karunya Innovation and Design Studio</h3>
                            <p className="font-bold">**AI Engineer Trainee**</p>
                            <p className="text-slate-400 mb-4">[https://www.karunya.edu/](https://www.karunya.edu/)</p>
                            <p className="ml-1 leading-relaxed">Developing AI-driven solutions and machine learning models for innovation projects. Working with Python and AI frameworks to build and test intelligent systems and automation tools. Collaborating on interdisciplinary projects integrating AI with web technologies.</p>
                        </div>
                        <div>
                            <h3 className="font-normal mb-2">### Google Developer Groups on Campus</h3>
                            <p className="font-bold">**Technical Trainee**</p>
                            <p className="text-slate-400 mb-4">[https://gdg.community.dev/](https://gdg.community.dev/)</p>
                            <p className="ml-1 leading-relaxed">Contributing to the development and maintenance of GDGOC's website and technical platforms through assigned components. Participating in code reviews, collaborative coding sessions, and technical discussions.</p>
                        </div>
                    </div>
                </section>

                {/* Product Journey Section */}
                <section>
                    <h2 className="text-lg font-normal mb-8">## In Between These Experiences</h2>
                    <div className="">
                        <h3 className="text-base font-normal mb-4">### The Product Building Journey</h3>
                        <p className="mb-8 leading-relaxed">I've been building and experimenting on the product side for a long time. Each iteration teaching me something new about users, infrastructure, and what it takes to build something people actually want.</p>
                        <div className="space-y-6">
                            <p>Started with **Flappy Bird Clone** in C. Physics engine, collision detection, procedural generation - all from scratch. It taught me how things work under the hood.</p>
                            <p>Built a **URL Shortener** where I learned about scalable architecture. Database indexing, efficient redirects, handling concurrent requests. Reliable infrastructure focus.</p>
                            <p>Now building **Swamoz**, a video dubbing platform with lip-sync using machine learning. Handling real users, performance constraints, and deploying ML models in production.</p>
                        </div>
                        <p className="mt-12 font-bold italic">**So yes, hard work and consistency pay off. Each product was a step forward, even when it didn't feel like it at the time.**</p>
                    </div>
                </section>

                {/* Tech Stack */}
                <section>
                    <h2 className="text-lg font-normal mb-6">## Tech Stack</h2>
                    <p className="text-slate-600 font-normal leading-loose">
                        Next.js, Python, Hugging Face, TypeScript, React, Tailwind CSS, GitHub, Git, Docker, PostgreSQL, FastAPI, MongoDB, Redis, Vercel
                    </p>
                </section>

                {/* Education */}
                <section>
                    <h2 className="text-lg font-normal mb-6">## Education</h2>
                    <div>
                        <h3 className="font-normal text-slate-800 mb-1">### Karunya Institute of Technology and Sciences</h3>
                        <p className="font-bold">**Computer Science and Engineering**</p>
                        <p className="text-slate-500 text-sm mt-1">2025 - Present</p>
                    </div>
                </section>

                {/* Library */}
                <section>
                    <h2 className="text-lg font-normal mb-8">## Library</h2>
                    <div className="space-y-8">
                        <div>
                            <h4 className="font-bold mb-3">### Dev</h4>
                            <ul className="list-none space-y-2">
                                <li>- **Linux Kernel Development** by Robert Love</li>
                                <li>- **Hacking: The Art of Exploitation** by Jon Erickson</li>
                                <li>- **Linux in a Nutshell** by Robert Love, et al.</li>
                                <li>- **The Art of Electronics** by Paul Horowitz</li>
                                <li>- **Nmap Cookbook** by Nicholas Marsh</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-3">### Casual Reads</h4>
                            <ul className="list-none space-y-2">
                                <li>- **Hooked** by Nir Eyal</li>
                                <li>- **The Lean Startup** by Eric Ries</li>
                                <li>- **Zero to One** by Peter Thiel</li>
                                <li>- **The Almanack of Naval Ravikant** by Eric Jorgenson</li>
                                <li>- **Deep Work** by Cal Newport</li>
                            </ul>
                        </div>
                        <p className="text-xs text-slate-400 italic mt-6">*and many more, these are just one of my best reads</p>
                    </div>
                </section>

                {/* Contact */}
                <section>
                    <h2 className="text-lg font-normal mb-6">## Get in Touch</h2>
                    <p className="mb-6 leading-relaxed">Connect with me on [LinkedIn](https://linkedin.com/in/ronelm) or shoot an [email](mailto:rma80070@gmail.com)</p>
                    <div className="space-y-2">
                        <p>- GitHub: [https://github.com/RM1338](https://github.com/RM1338)</p>
                        <p>- Twitter: [https://twitter.com/ronelm](https://twitter.com/ronelm)</p>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default AgentView;
