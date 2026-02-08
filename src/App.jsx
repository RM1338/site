import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Layout from './components/Layout';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import ProductJourney from './components/ProductJourney';
import Projects from './components/Projects';
import Writings from './components/Writings';
import Library from './components/Library';
import GitHubContributions from './components/GitHubContributions';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Pomodoro from './components/Pomodoro';
import AgentView from './components/AgentView';

function App() {
  const [isAgentMode, setIsAgentMode] = useState(false);

  return (
    <Layout isAgentMode={isAgentMode} setIsAgentMode={setIsAgentMode}>
      <AnimatePresence mode="wait">
        {isAgentMode ? (
          <motion.div
            key="agent-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <AgentView />
          </motion.div>
        ) : (
          <motion.div
            key="human-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Hero />
            <Experience />
            <ProductJourney />
            <Education />
            <GitHubContributions />
            <TechStack />
            <Projects />
            <Writings />
            <Library />
            <Contact />
            <Pomodoro />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}

export default App;
