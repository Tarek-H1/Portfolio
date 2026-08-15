import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const stats = [
        { value: '3', label: 'Professional roles' },
        { value: '8+', label: 'Projects built' },
        { value: '12+', label: 'Technologies used' },
    ];

    const highlights = [
        {
            index: '01',
            title: 'Leadership & R&D',
            text: "I currently serve as Scrum Master for APCentral, APU's Centre of Technology & Innovation project, overseeing progress and facilitating collaboration across cross-functional teams.",
        },
        {
            index: '02',
            title: 'Internship at Kloudius Services',
            text: "I migrated React Native TV applications to Amazon's Vega OS platform and built a production-grade UI kit — design tokens, component architecture, and validated media player integrations.",
        },
        {
            index: '03',
            title: 'Recognition',
            text: "I earned 1st Runner-up in the Joget NextGen Hackathon 2024, and graduated Valedictorian of my IGCSE class — a track record of academic excellence and hands-on delivery.",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="about" className="py-24 bg-slate-900">
            <div className="container mx-auto px-6">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="max-w-5xl mx-auto"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
                    >
                        About Me
                    </motion.h2>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                        {/* Left: intro + stats */}
                        <motion.div
                            variants={itemVariants}
                            className="lg:col-span-2 bg-slate-950 rounded-2xl p-8 border border-slate-800 flex flex-col justify-between"
                        >
                            <div>
                                <span className="text-xs font-semibold tracking-wide uppercase text-indigo-400">
                                    Who I Am
                                </span>
                                <p className="text-lg text-slate-300 leading-relaxed mt-3">
                                    A Software Engineering student at Asia Pacific University with hands-on
                                    experience across R&amp;D, e-commerce, and industrial internship work —
                                    spanning system design, mobile application migration, and web development.
                                </p>
                            </div>

                            <div className="mt-10 divide-y divide-slate-800 border-t border-slate-800">
                                {stats.map((stat, index) => (
                                    <div key={index} className="flex items-center justify-between py-4">
                                        <span className="text-slate-400 text-sm">{stat.label}</span>
                                        <span className="text-2xl font-bold text-white">{stat.value}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right: highlight rows */}
                        <div className="lg:col-span-3 flex flex-col gap-6">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-slate-950 rounded-2xl p-8 border border-slate-800 flex gap-6"
                                >
                                    <span className="text-3xl font-bold text-slate-700 leading-none select-none">
                                        {item.index}
                                    </span>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
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

export default About;
