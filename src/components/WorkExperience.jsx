import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function ExperienceCard({ exp, index, alignRight, onVisibilityChange }) {
    const [ref, inView] = useInView({
        threshold: 0.35,
    });

    React.useEffect(() => {
        onVisibilityChange(index, inView);
    }, [inView, index, onVisibilityChange]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className={`relative w-full md:w-[54%] ${alignRight ? 'md:ml-auto' : 'md:mr-auto'}`}
        >
            <div className="relative bg-slate-900 rounded-2xl p-8 border border-slate-800">
                {/* Node marker, centered on the card */}
                <motion.div
                    animate={{
                        scale: inView ? 1 : 0.6,
                        backgroundColor: inView ? '#6366f1' : '#0f172a',
                    }}
                    transition={{ duration: 0.6 }}
                    className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-indigo-400 ring-4 ring-slate-950 ${alignRight ? '-left-2' : '-right-2'
                        }`}
                />

                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <span className="text-sm font-medium text-indigo-400">{exp.period}</span>
                </div>

                <p className="text-slate-300 font-medium mb-1">{exp.company}</p>
                {exp.location && <p className="text-slate-500 text-sm mb-4">{exp.location}</p>}

                <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                            <span className="mt-2 w-1 h-1 rounded-full bg-slate-600 flex-shrink-0" />
                            <span>{achievement}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}

function WorkExperience() {
    const experiences = [
        {
            title: 'Software Engineering Intern (React Native & Amazon Vega OS)',
            company: 'Kloudius Services Sdn. Bhd.',
            location: 'Bangsar South, Kuala Lumpur, Malaysia',
            period: 'Jan 2026 – Apr 2026',
            achievements: [
                "Migrated multiple React Native TV applications, including a fully functional Netflix-clone app with video playback, from Android to Amazon's Vega OS platform",
                'Designed and built a comprehensive Vega OS UI Kit as a structured React Native codebase — design tokens, a 12-column responsive grid, reusable components, and Redux-based state management',
                'Integrated and debugged three JavaScript media players (Shaka Player, HLS.js, DASH.js) with full D-pad remote support',
                'Built and documented demonstration screens for 30+ Expo and React Native libraries, validated on physical Fire TV Stick and Echo Show 8 hardware',
                'Presented project progress in two formal stakeholder demonstrations',
            ],
        },
        {
            title: 'Scrum Master, Research and Development Team (R&D)',
            company: 'Centre of Technology & Innovation – APU',
            location: 'Kuala Lumpur, Malaysia',
            period: '2024 – Present',
            achievements: [
                'Serve as Scrum Master for APCentral, a centralized academic workflow system, overseeing project progress and facilitating team collaboration',
                "Collaborated with cross-functional teams to ensure the system's scalability and efficiency, resuming and continuing to lead the role following completion of an industrial internship",
            ],
        },
        {
            title: 'E-commerce',
            company: 'Ck Decor',
            location: 'Malaysia – Kota Bharu',
            period: '2022 – 2023',
            achievements: [
                "Built and enhanced the company's online profile on Shopee and Lazada",
                'Created targeted advertisements for Facebook and Instagram to boost brand visibility',
                "Assisted in developing the company's website, gaining hands-on experience in web design",
            ],
        },
    ];

    const [visible, setVisible] = useState(() => Array(experiences.length).fill(false));

    const handleVisibilityChange = useCallback((index, inView) => {
        setVisible((prev) => {
            if (prev[index] === inView) return prev;
            const next = [...prev];
            next[index] = inView;
            return next;
        });
    }, []);

    const highestVisible = visible.reduce((max, v, i) => (v ? i : max), -1);
    const fillFraction = experiences.length > 0 ? (highestVisible + 1) / experiences.length : 0;

    return (
        <section id="experience" className="py-24 bg-slate-950">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
                >
                    Work Experience
                </motion.h2>

                <div className="max-w-4xl mx-auto relative">
                    {/* Progress line */}
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] rounded-full bg-slate-800" />
                    <motion.div
                        className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] rounded-full bg-indigo-500 origin-top shadow-[0_0_12px_rgba(99,102,241,0.6)]"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: fillFraction }}
                        transition={{ duration: 1.4, ease: 'easeOut' }}
                    />

                    <div className="relative space-y-10 md:space-y-16">
                        {experiences.map((exp, index) => (
                            <ExperienceCard
                                key={index}
                                exp={exp}
                                index={index}
                                alignRight={index % 2 !== 0}
                                onVisibilityChange={handleVisibilityChange}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WorkExperience;
