import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

const Pomodoro = () => {
    const MODE_DURATIONS = {
        focus: 25,
        short: 5,
        long: 15
    };

    const [minutes, setMinutes] = useState(MODE_DURATIONS.focus);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [mode, setMode] = useState('focus');

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        setIsActive(false);
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, minutes, seconds]);

    const toggleTimer = () => setIsActive(!isActive);

    const resetTimer = () => {
        setIsActive(false);
        setMinutes(MODE_DURATIONS[mode]);
        setSeconds(0);
    };

    const setTime = (m, type) => {
        setMode(type);
        setIsActive(false);
        setMinutes(m);
        setSeconds(0);
    };

    return (
        <section id="pomodoro" className="py-12">
            <div className="w-full mx-auto">
                <div className="flex justify-between items-center mb-5">
                    <h3 className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">Pomodoro Timer</h3>
                    <button className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase hover:text-slate-600 transition-colors">Adjust Time</button>
                </div>

                <p className="text-slate-400 italic mb-8 text-[14px] font-light leading-relaxed">
                    You've reached the end! Or have you? Before you vanish into the digital void, I've got a quick Pomodoro Timer to help you focus better on your next big thing (or just to remind you to stop doomscrolling).
                </p>

                <div className="bg-white border border-slate-100 rounded-2xl p-5 md:p-6 shadow-sm transition-all hover:shadow-md flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
                    {/* Left: Time Display */}
                    <div className="flex flex-col items-start">
                        <div className="text-5xl font-medium text-slate-900 tracking-tight tabular-nums leading-none">
                            {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
                        </div>
                        <p className="text-[9px] font-bold tracking-[0.2em] text-slate-300 uppercase mt-2">
                            Focus Session
                        </p>
                    </div>

                    {/* Right: Controls */}
                    <div className="flex items-center gap-5">
                        {/* Mode Switcher */}
                        <div className="bg-slate-50 p-1 rounded-full flex items-center shadow-inner border border-slate-100">
                            <button
                                onClick={() => setTime(25, 'focus')}
                                className={`px-4 py-1.5 rounded-full text-[10px] font-bold transition-all duration-300 ${mode === 'focus' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
                            >
                                25m
                            </button>
                            <button
                                onClick={() => setTime(5, 'short')}
                                className={`px-4 py-1.5 rounded-full text-[10px] font-bold transition-all duration-300 ${mode === 'short' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
                            >
                                5m
                            </button>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2.5">
                            <button
                                onClick={toggleTimer}
                                className="w-11 h-11 bg-black rounded-full flex items-center justify-center text-white hover:bg-slate-800 transition-all active:scale-95 shadow-md"
                            >
                                {isActive ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-0.5" />}
                            </button>
                            <button
                                onClick={resetTimer}
                                className="w-9 h-9 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-all active:scale-95"
                            >
                                <RotateCcw size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pomodoro;
