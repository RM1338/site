import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductJourney = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section id="product-journey" className="py-12">
            <h3 className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-6">
                In Between These Experiences
            </h3>

            <div className="bg-white border border-slate-100 rounded-xl p-6 md:p-7 shadow-sm transition-all hover:shadow-md">
                <h2 className="text-base font-normal text-slate-900 mb-3 font-sans tracking-tight">
                    The Product Building Journey
                </h2>

                <div className="max-w-3xl text-[14px] font-light leading-relaxed text-slate-500 mb-4 space-y-4">
                    <p>
                        I've been building and experimenting on the product side for a long time. Each previous product always feels naive in hindsight, but looking back, I can see they were incrementally better, each iteration teaching me something new about users, infrastructure, and what it takes to build something people actually want.
                    </p>
                </div>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="max-w-3xl text-[14px] font-light leading-relaxed text-slate-500 space-y-4 mb-4">
                                <p>
                                    Started with a Flappy Bird clone in C. Physics engine, collision detection, procedural generation - all from scratch. It taught me how things work under the hood, not just how to use libraries that abstract everything away.
                                </p>
                                <p>
                                    Built a URL shortener where I learned about scalable architecture. Database indexing, efficient redirects, handling concurrent requests. This was less about features and more about infrastructure that works reliably.
                                </p>
                                <p>
                                    Now I'm building Swamoz, a video dubbing platform with lip-sync using machine learning. Real users, real performance constraints, real technical debt. Synchronizing dubbed audio with mouth movements, handling multiple languages, deploying ML models in production. This is where all the fundamentals come together.
                                </p>
                                <p className="text-slate-900 font-normal mt-8">
                                    So yes, hard work and consistency pay off. Each product was a step forward, even when it didn't feel like it at the time.
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-1 text-[11px] font-medium text-slate-400 hover:text-slate-600 transition-colors"
                >
                    {isExpanded ? (
                        <>View Less ^</>
                    ) : (
                        <>View More ⌄</>
                    )}
                </button>
            </div>
        </section>
    );
};

export default ProductJourney;
