import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import NeuralLandscape from './NeuralLandscape';

const Hero = () => {
    const [time, setTime] = useState(new Date());
    const [showNeural, setShowNeural] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="hero" className="pt-20 pb-12 flex flex-col justify-start">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-8"
            >
                <div className="space-y-2">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 text-center whitespace-nowrap">
                        Ronel Abraham Mathew
                    </h1>
                    <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-slate-400 font-sans text-[11px] md:text-xs font-medium tracking-wide">
                        <span className="font-serif italic text-slate-500">/roʊˈnɛl/</span>
                        <span>•</span>
                        <span>noun</span>
                        <span>•</span>
                        <span>{time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'Asia/Kolkata', timeZoneName: 'short' })}</span>
                    </div>
                </div>

                <div className="space-y-6 text-lg md:text-xl text-slate-600 leading-relaxed font-normal text-left">
                    <p>
                        a full-stack developer and <span className="underline decoration-slate-300 underline-offset-4 text-slate-900">product builder</span> with&nbsp;deep&nbsp;experience&nbsp;across <br className="hidden md:block" />
                        engineering, product strategy, and user-centric design.
                    </p>
                    <p>
                        a <span className="underline decoration-slate-300 underline-offset-4 text-slate-900">polymath</span> who bridges technical architecture with business outcomes to create impactful, scalable solutions.
                    </p>
                </div>

                <div className="pt-4 text-left">
                    {!showNeural ? (
                        <button
                            onClick={() => setShowNeural(true)}
                            className="text-xs font-medium text-slate-400 hover:text-slate-600 underline decoration-slate-200 underline-offset-4 transition-colors"
                        >
                            side feature: neural landscape
                        </button>
                    ) : (
                        <div className="w-full mt-8">
                            <NeuralLandscape onClose={() => setShowNeural(false)} />
                        </div>
                    )}
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
