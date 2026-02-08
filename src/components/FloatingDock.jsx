import { Github, Linkedin, Bot, User } from 'lucide-react';
import { motion } from 'framer-motion';

const DockItem = ({ icon: Icon, label, href }) => {
    return (
        <motion.a
            href={href}
            target={href.startsWith('http') ? "_blank" : "_self"}
            rel={href.startsWith('http') ? "noreferrer" : ""}
            className="p-3 text-slate-400 relative group flex items-center justify-center transition-colors hover:text-slate-900"
        >
            <motion.div
                initial={{ strokeWidth: 2, scale: 1 }}
                whileHover={{ strokeWidth: 3, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 500, damping: 25 }}
            >
                <Icon size={22} strokeWidth={2} />
            </motion.div>
        </motion.a>
    );
};

const FloatingDock = ({ isAgentMode, setIsAgentMode }) => {
    const handleToggle = () => setIsAgentMode(!isAgentMode);

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-1 px-4 py-2 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full shadow-lg shadow-slate-200/50">
                {/* Mode Toggle */}
                <div className="mr-3">
                    <button
                        onClick={handleToggle}
                        className="relative h-10 w-[72px] bg-slate-100 rounded-full flex items-center p-1 transition-colors hover:bg-slate-200"
                    >
                        <motion.div
                            animate={{ x: isAgentMode ? 32 : 0 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                            className="h-8 w-8 bg-white rounded-full shadow-sm flex items-center justify-center text-slate-600"
                        >
                            {isAgentMode ? <Bot size={18} /> : <User size={18} />}
                        </motion.div>
                    </button>
                </div>

                <div className="w-px h-6 bg-slate-200 mr-2" />

                <DockItem icon={Github} label="GitHub" href="https://github.com/RM1338" />
                <DockItem icon={Linkedin} label="LinkedIn" href="https://linkedin.com/in/ronelm" />
            </div>
        </div>
    );
};

export default FloatingDock;
