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
            title: 'Integrated Info System (IIS)',
            description: 'Centralized academic workflow system integrating platforms like iSmart, APTime, GIMS, Moodle, and Exam Scheduling tools. Implemented automation features to reduce manual data entry and improve tracking.',
            tech: ['HTML', 'CSS', 'JavaScript'],
        },
        {
            title: 'Khatm Al-Quran Mobile App',
            description: 'Mobile app to automate item tracking and distribution for Quran completion (Khatm) within a community group. Features logging and tracking with a user-friendly interface.',
            tech: ['Flutter', 'Dart', 'Mobile'],
        },
        {
            title: 'Procurement Order Tracking System (POTS)',
            description: 'Desktop application to streamline procurement tracking with real-time status updates and search filters. Improved operational efficiency and reduced delays in item processing.',
            tech: ['Java', 'Swing', 'Database'],
        },
        {
            title: 'Delicious Restaurant Management System (DRMS)',
            description: 'Restaurant management system for admins, managers, chefs, and customers. Implemented OOP concepts and secure login with role-based access control using Microsoft SQL Server.',
            tech: ['C#', '.NET', 'SQL Server'],
        },
        {
            title: 'Concurrent Airport Simulation',
            description: 'System simulating airport operations with concurrency concepts like semaphores and thread synchronization. Implemented emergency landing priority, exclusive refueling, and safety checks.',
            tech: ['Java', 'Concurrency', 'Threads'],
        },
        {
            title: 'Personal Portfolio',
            description: 'Responsive SPA with animated hero, project cards, and smooth Framer Motion / Three.js transitions. EmailJS contact form, downloadable resume, lazy-loaded images served from public/. CI/CD via GitHub Actions → GitHub Pages.',
            tech: ['React', 'Vite', 'Tailwind', 'Framer Motion', 'EmailJS'],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="projects" className="py-20 bg-gray-800">
            <div className="container mx-auto px-6">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
                    >
                        My Projects
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto"
                    >
                        Here are some of my recent projects showcasing my skills in full-stack development,
                        system design, and problem-solving.
                    </motion.p>

                    {/* Asymmetric diagonal layout */}
                    <div className="max-w-7xl mx-auto space-y-8">
                        {/* First row - Large left, small right */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <motion.div
                                variants={itemVariants}
                                className="lg:col-span-2 group relative bg-gray-900/50 backdrop-blur-sm rounded-3xl p-10 border-2 border-gray-700 hover:border-blue-500 transition-all duration-300"
                                whileHover={{ y: -12, scale: 1.01, boxShadow: "0 20px 60px rgba(59, 130, 246, 0.2)" }}
                            >
                                <motion.div
                                    className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-l-3xl"
                                    initial={{ height: 0 }}
                                    whileInView={{ height: "100%" }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                />
                                <div className="ml-4">
                                    <h3 className="text-4xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                                        {projects[0].title}
                                    </h3>
                                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                                        {projects[0].description}
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {projects[0].tech.map((tech, idx) => (
                                            <span key={idx} className="px-4 py-2 bg-gray-800/80 text-blue-400 text-sm font-medium rounded-full border border-gray-600">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-700 hover:border-emerald-500 transition-all duration-300"
                                whileHover={{ y: -12, scale: 1.01, boxShadow: "0 20px 60px rgba(16, 185, 129, 0.2)" }}
                            >
                                <motion.div
                                    className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-emerald-500 to-teal-500 rounded-l-3xl"
                                    initial={{ height: 0 }}
                                    whileInView={{ height: "100%" }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                />
                                <div className="ml-4">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                                        {projects[1].title}
                                    </h3>
                                    <p className="text-gray-300 mb-4 line-clamp-4">
                                        {projects[1].description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {projects[1].tech.map((tech, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-gray-800/80 text-emerald-400 text-xs font-medium rounded-full border border-gray-600">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Second row - Small left, large right */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <motion.div
                                variants={itemVariants}
                                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-700 hover:border-orange-500 transition-all duration-300"
                                whileHover={{ y: -12, scale: 1.01, boxShadow: "0 20px 60px rgba(249, 115, 22, 0.2)" }}
                            >
                                <motion.div
                                    className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-orange-500 to-red-500 rounded-l-3xl"
                                    initial={{ height: 0 }}
                                    whileInView={{ height: "100%" }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                />
                                <div className="ml-4">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                                        {projects[2].title}
                                    </h3>
                                    <p className="text-gray-300 mb-4 line-clamp-4">
                                        {projects[2].description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {projects[2].tech.map((tech, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-gray-800/80 text-orange-400 text-xs font-medium rounded-full border border-gray-600">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="lg:col-span-2 group relative bg-gray-900/50 backdrop-blur-sm rounded-3xl p-10 border-2 border-gray-700 hover:border-pink-500 transition-all duration-300"
                                whileHover={{ y: -12, scale: 1.01, boxShadow: "0 20px 60px rgba(236, 72, 153, 0.2)" }}
                            >
                                <motion.div
                                    className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-pink-500 to-rose-500 rounded-l-3xl"
                                    initial={{ height: 0 }}
                                    whileInView={{ height: "100%" }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                />
                                <div className="ml-4">
                                    <h3 className="text-4xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">
                                        {projects[3].title}
                                    </h3>
                                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                                        {projects[3].description}
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {projects[3].tech.map((tech, idx) => (
                                            <span key={idx} className="px-4 py-2 bg-gray-800/80 text-pink-400 text-sm font-medium rounded-full border border-gray-600">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Third row - Two equal cards */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <motion.div
                                variants={itemVariants}
                                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-3xl p-10 border-2 border-gray-700 hover:border-cyan-500 transition-all duration-300"
                                whileHover={{ y: -12, scale: 1.01, boxShadow: "0 20px 60px rgba(6, 182, 212, 0.2)" }}
                            >
                                <motion.div
                                    className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-cyan-500 to-blue-500 rounded-l-3xl"
                                    initial={{ height: 0 }}
                                    whileInView={{ height: "100%" }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                />
                                <div className="ml-4">
                                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                                        {projects[4].title}
                                    </h3>
                                    <p className="text-gray-300 mb-5 text-lg leading-relaxed">
                                        {projects[4].description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {projects[4].tech.map((tech, idx) => (
                                            <span key={idx} className="px-3 py-2 bg-gray-800/80 text-cyan-400 text-sm font-medium rounded-full border border-gray-600">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-3xl p-10 border-2 border-gray-700 hover:border-yellow-500 transition-all duration-300"
                                whileHover={{ y: -12, scale: 1.01, boxShadow: "0 20px 60px rgba(234, 179, 8, 0.2)" }}
                            >
                                <motion.div
                                    className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-yellow-500 to-amber-500 rounded-l-3xl"
                                    initial={{ height: 0 }}
                                    whileInView={{ height: "100%" }}
                                    transition={{ duration: 0.8, delay: 0.7 }}
                                />
                                <div className="ml-4">
                                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                                        {projects[5].title}
                                    </h3>
                                    <p className="text-gray-300 mb-5 text-lg leading-relaxed">
                                        {projects[5].description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {projects[5].tech.map((tech, idx) => (
                                            <span key={idx} className="px-3 py-2 bg-gray-800/80 text-yellow-400 text-sm font-medium rounded-full border border-gray-600">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Projects;
