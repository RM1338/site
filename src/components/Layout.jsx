import FloatingDock from './FloatingDock';

const Layout = ({ children, isAgentMode, setIsAgentMode }) => {
    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-200 pb-32">
            <main className="max-w-[750px] mx-auto px-6 pt-24 pb-12">
                {children}
            </main>

            <FloatingDock isAgentMode={isAgentMode} setIsAgentMode={setIsAgentMode} />
        </div>
    );
};

export default Layout;
