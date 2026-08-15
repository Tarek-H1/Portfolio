import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import './index.css';

function App() {
    const [showContent, setShowContent] = useState(false);

    if (!showContent) {
        return <WelcomeScreen onComplete={() => setShowContent(true)} />;
    }

    return (
        <div className="App">
            <Navbar />
            <Hero />
            <About />
            <WorkExperience />
            <Education />
            <Skills />
            <Projects />
            <Achievements />
            <Contact />
        </div>
    );
}

export default App;
