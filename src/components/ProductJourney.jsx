import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/profile';

const ProductJourney = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { intro, items, closing } = profile.productJourney;

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
                    <p>{intro}</p>
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
                                {items.map((item, i) => (
                                    <p key={i}>{item}</p>
                                ))}
                                <p className="text-slate-900 font-normal mt-8">{closing}</p>
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
