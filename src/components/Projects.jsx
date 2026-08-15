import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Projects() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const projects = [
        {
            title: 'ParKL — Smart Parking Management System',
            subtitle: 'Final Year Project',
            description: 'Cross-platform smart parking system with a driver-facing mobile app and an admin web dashboard, addressing search time and visibility of specialised OKU/EV/women\'s bays. Features real-time bay availability on an interactive floor map, preference-based recommendations, voice-guided alerts, and an AI-assisted floor-plan onboarding tool. Validated with a 95-respondent user survey.',
            tech: ['React Native', 'Flask', 'PostgreSQL', 'Computer Vision'],
        },
        {
            title: 'Vega OS UI Kit & React Native TV Migration',
            subtitle: 'Internship Project',
            description: "Migrated two React Native TV applications, including a full Netflix-clone app, to Amazon's Vega OS platform. Built a production-grade UI Kit with design tokens, component architecture, and validated media player integrations, presented in two formal stakeholder demos.",
            tech: ['React Native', 'TypeScript', 'Redux', 'Shaka Player', 'HLS.js', 'DASH.js'],
        },
        {
            title: 'APCentral',
            subtitle: 'R&D Team Project',
            description: 'Centralized academic workflow system integrating platforms like iSmart, APTime, GIMS, Moodle, and Exam Scheduling tools. Built the intake and exam flow processes end-to-end and helped implement automation to reduce manual data entry and human error.',
            tech: ['Angular', 'Flask', 'AWS', 'Figma'],
        },
        {
            title: 'Concurrent Airport Simulation',
            description: 'System simulating airport operations using concurrency concepts like semaphores and thread synchronization, including emergency landing priority, exclusive refueling, and safety checks.',
            tech: ['Java', 'Concurrency', 'Threads'],
        },
        {
            title: 'Procurement Order Tracking System (POTS)',
            description: 'Desktop application to streamline procurement tracking with real-time status updates and search filters, improving operational efficiency and reducing delays.',
            tech: ['Java'],
        },
        {
            title: 'Delicious Restaurant Management System (DRMS)',
            description: 'Restaurant management system for admins, managers, chefs, and customers to manage users, reservations, and orders, built with OOP principles and SQL Server persistence.',
            tech: ['C#', 'Microsoft SQL Server'],
        },
        {
            title: 'Khatm Al-Quran Mobile App',
            description: 'App to automate item tracking and distribution for Quran completion (Khatm) within a community group, replacing manual messaging with an organized, user-friendly interface.',
            tech: ['Flutter', 'Dart'],
        },
        {
            title: 'Personal Portfolio',
            description: 'This site — a responsive single-page portfolio with animated sections, smooth scroll navigation, a downloadable resume, and automated CI/CD deployment to GitHub Pages.',
            tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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
        <section id="projects" className="py-24 bg-slate-900">
            <div className="container mx-auto px-6">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl md:text-4xl font-bold text-center mb-4 text-white"
                    >
                        Projects
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-center text-slate-400 text-lg mb-16 max-w-2xl mx-auto"
                    >
                        A selection of academic, internship, and personal projects spanning full-stack development,
                        system design, and mobile engineering.
                    </motion.p>

                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-slate-950 rounded-2xl p-8 border border-slate-800 hover:border-indigo-500/60 transition-colors"
                            >
                                {project.subtitle && (
                                    <span className="text-xs font-semibold tracking-wide uppercase text-indigo-400">
                                        {project.subtitle}
                                    </span>
                                )}
                                <h3 className="text-xl font-bold text-white mt-1 mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-slate-900 text-slate-300 text-xs font-medium rounded-md border border-slate-800"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Projects;
