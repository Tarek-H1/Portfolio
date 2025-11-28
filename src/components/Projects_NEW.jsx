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
            gradient: 'from-blue-600 via-blue-500 to-cyan-500',
            icon: '🎓',
            link: 'https://github.com/Tarek-H1',
        },
        {
            title: 'Joget Machinery Management',
            description: '2nd Place Hackathon Winner - Innovative machinery management application using Joget DX 8 with custom HTML UI components for maintenance scheduling and tracking.',
            tech: ['Joget DX 8', 'HTML', 'JavaScript', 'SQL'],
            gradient: 'from-yellow-600 via-orange-500 to-red-500',
            icon: '🏆',
            link: 'https://github.com/Tarek-H1',
            featured: true,
        },
        {
            title: 'Concurrent Airport Simulation',
            description: 'System simulating airport operations with concurrency concepts like semaphores and thread synchronization. Implemented emergency landing priority, exclusive refueling, and safety checks.',
            tech: ['Java', 'Concurrency', 'Threads'],
            gradient: 'from-green-600 via-emerald-500 to-teal-500',
            icon: '✈️',
            link: 'https://github.com/Tarek-H1',
        },
        {
            title: 'Procurement Order Tracking System',
            description: 'Desktop application to streamline procurement tracking with real-time status updates and search filters. Improved operational efficiency and reduced delays in item processing.',
            tech: ['Java', 'Swing', 'Database'],
            gradient: 'from-purple-600 via-violet-500 to-purple-500',
            icon: '📦',
            link: 'https://github.com/Tarek-H1',
        },
        {
            title: 'Restaurant Management System',
            description: 'Complete restaurant management system for admins, managers, chefs, and customers. Implemented OOP concepts and secure login with role-based access control using Microsoft SQL Server.',
            tech: ['C#', '.NET', 'SQL Server'],
            gradient: 'from-pink-600 via-rose-500 to-red-500',
            icon: '🍽️',
            link: 'https://github.com/Tarek-H1',
        },
        {
            title: 'Khatm Al-Quran Mobile App',
            description: 'Mobile app to automate item tracking and distribution for Quran completion (Khatm) within a community group. Features logging and tracking with a user-friendly interface.',
            tech: ['Flutter', 'Dart', 'Mobile'],
            gradient: 'from-indigo-600 via-blue-500 to-cyan-500',
            icon: '📱',
            link: 'https://github.com/Tarek-H1',
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
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="projects" className="py-20 bg-gray-800 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden opacity-5">
                <motion.div
                    className="absolute text-blue-400 text-9xl font-bold"
                    style={{ top: '10%', left: '5%' }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                >
                    {'</>'}
                </motion.div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
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
                        Featured Projects
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto"
                    >
                        Showcasing my journey through innovative solutions and technical excellence
                    </motion.p>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                        {projects.map((project, index) => (
                            <motion.a
                                key={index}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={itemVariants}
                                className="group relative bg-gray-900 rounded-3xl overflow-hidden border border-gray-700 hover:border-transparent transition-all duration-500"
                                whileHover={{ y: -8, scale: 1.02 }}
                                style={{
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                                }}
                            >
                                {/* Gradient overlay on hover */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                />

                                {/* Featured badge */}
                                {project.featured && (
                                    <div className="absolute top-4 right-4 z-10">
                                        <motion.div
                                            className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-bold rounded-full"
                                            animate={{ scale: [1, 1.05, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            ⭐ Featured
                                        </motion.div>
                                    </div>
                                )}

                                <div className="p-8">
                                    {/* Icon with gradient background */}
                                    <motion.div
                                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {project.icon}
                                    </motion.div>

                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tech stack pills */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-gray-800 text-gray-300 text-xs font-medium rounded-full border border-gray-700 group-hover:border-blue-500/50 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Animated arrow */}
                                    <div className="flex items-center text-blue-400 font-semibold mt-4 group-hover:text-purple-400 transition-colors">
                                        <span>View Project</span>
                                        <motion.svg
                                            className="w-5 h-5 ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </motion.svg>
                                    </div>
                                </div>

                                {/* Bottom gradient line */}
                                <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />
                            </motion.a>
                        ))}
                    </div>

                    {/* View all projects button */}
                    <motion.div
                        variants={itemVariants}
                        className="text-center mt-16"
                    >
                        <motion.a
                            href="https://github.com/Tarek-H1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-500 hover:to-purple-500 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            View All on GitHub
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default Projects;
