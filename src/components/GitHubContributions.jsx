import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';


const GitHubContributions = () => {
    return (
        <section id="github" className="py-12 overflow-hidden">
            <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-8">Github Contributions</h3>

            {/* Custom wrapper to match the exact look */}
            <div className="w-full overflow-x-auto no-scrollbar">
                <GitHubCalendar
                    username="RM1338"
                    colorScheme="light"
                    fontSize={12}
                    blockSize={10}
                    blockMargin={3}
                    theme={{
                        light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                    }}
                    style={{
                        width: '100%',
                        color: '#94a3b8'
                    }}
                />
            </div>
        </section>
    );
};

export default GitHubContributions;
