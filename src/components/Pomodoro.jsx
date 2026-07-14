import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Minus, Plus } from 'lucide-react';

const DEFAULT_DURATIONS = {
    focus: 25,
    short: 5,
    long: 15
};

const MODE_LABELS = {
    focus: 'Focus Session',
    short: 'Short Break',
    long: 'Long Break'
};

const MIN_MINUTES = 1;
const MAX_MINUTES = 90;

const Pomodoro = () => {
    const [durations, setDurations] = useState(DEFAULT_DURATIONS);
    const [minutes, setMinutes] = useState(DEFAULT_DURATIONS.focus);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [mode, setMode] = useState('focus');
    const [isAdjusting, setIsAdjusting] = useState(false);

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
        setMinutes(durations[mode]);
        setSeconds(0);
    };

    const selectMode = (type) => {
        setMode(type);
        setIsActive(false);
        setMinutes(durations[type]);
        setSeconds(0);
    };

    // Adjust the current mode's duration (pauses the timer and resets the clock).
    const adjustMinutes = (delta) => {
        setDurations((prev) => {
            const next = Math.min(MAX_MINUTES, Math.max(MIN_MINUTES, prev[mode] + delta));
            const updated = { ...prev, [mode]: next };
            setIsActive(false);
            setMinutes(next);
            setSeconds(0);
            return updated;
        });
    };

    return (
        <section id="pomodoro" className="py-12">
            <div className="w-full mx-auto">
                <div className="flex justify-between items-center mb-5">
                    <h3 className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">Pomodoro Timer</h3>
                    <button
                        onClick={() => setIsAdjusting((v) => !v)}
                        className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${isAdjusting ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                        {isAdjusting ? 'Done' : 'Adjust Time'}
                    </button>
                </div>

                <p className="text-slate-400 italic mb-8 text-[14px] font-light leading-relaxed">
                    You've reached the end! Or have you? Before you vanish into the digital void, I've got a quick Pomodoro Timer to help you focus better on your next big thing (or just to remind you to stop doomscrolling).
                </p>

                <div className="bg-white border border-slate-100 rounded-2xl p-5 md:p-6 shadow-sm transition-all hover:shadow-md flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
                    {/* Left: Time Display */}
                    <div className="flex flex-col items-start">
                        <div className="flex items-center gap-4">
                            <div className="text-5xl font-medium text-slate-900 tracking-tight tabular-nums leading-none">
                                {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
                            </div>
                            {isAdjusting && (
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => adjustMinutes(-1)}
                                        disabled={durations[mode] <= MIN_MINUTES}
                                        aria-label="Decrease minutes"
                                        className="w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-all active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
                                    >
                                        <Minus size={14} />
                                    </button>
                                    <span className="text-[11px] font-bold tabular-nums text-slate-500 w-10 text-center">{durations[mode]}m</span>
                                    <button
                                        onClick={() => adjustMinutes(1)}
                                        disabled={durations[mode] >= MAX_MINUTES}
                                        aria-label="Increase minutes"
                                        className="w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-all active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
                                    >
                                        <Plus size={14} />
                                    </button>
                                </div>
                            )}
                        </div>
                        <p className="text-[9px] font-bold tracking-[0.2em] text-slate-300 uppercase mt-2">
                            {MODE_LABELS[mode]}
                        </p>
                    </div>

                    {/* Right: Controls */}
                    <div className="flex items-center gap-5">
                        {/* Mode Switcher */}
                        <div className="bg-slate-50 p-1 rounded-full flex items-center shadow-inner border border-slate-100">
                            <button
                                onClick={() => selectMode('focus')}
                                className={`px-4 py-1.5 rounded-full text-[10px] font-bold transition-all duration-300 ${mode === 'focus' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
                            >
                                {durations.focus}m
                            </button>
                            <button
                                onClick={() => selectMode('short')}
                                className={`px-4 py-1.5 rounded-full text-[10px] font-bold transition-all duration-300 ${mode === 'short' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
                            >
                                {durations.short}m
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
