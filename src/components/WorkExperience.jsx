import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function WorkExperience() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

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
                'Built and enhanced the company\'s online profile on Shopee and Lazada',
                'Created targeted advertisements for Facebook and Instagram to boost brand visibility',
                'Assisted in developing the company\'s website, gaining hands-on experience in web design',
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="experience" className="py-24 bg-slate-950">
            <div className="container mx-auto px-6">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
                    >
                        Work Experience
                    </motion.h2>

                    <div className="max-w-4xl mx-auto relative">
                        {/* Timeline line */}
                        <div className="hidden md:block absolute left-[7px] top-2 bottom-2 w-px bg-slate-800" />

                        <div className="space-y-10">
                            {experiences.map((exp, index) => (
                                <motion.div key={index} variants={itemVariants} className="relative md:pl-12">
                                    {/* Timeline dot */}
                                    <div className="hidden md:block absolute left-0 top-2 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-500" />

                                    <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
                                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                            <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                            <span className="text-sm font-medium text-indigo-400">{exp.period}</span>
                                        </div>

                                        <p className="text-slate-300 font-medium mb-1">{exp.company}</p>
                                        {exp.location && (
                                            <p className="text-slate-500 text-sm mb-4">{exp.location}</p>
                                        )}

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
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default WorkExperience;
