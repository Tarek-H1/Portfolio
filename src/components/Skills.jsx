import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Skills() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const skills = [
        { name: 'Python', level: 90, color: 'bg-blue-500' },
        { name: 'Java', level: 90, color: 'bg-red-500' },
        { name: 'JavaScript/HTML/CSS', level: 85, color: 'bg-yellow-500' },
        { name: 'C# & C++', level: 80, color: 'bg-purple-500' },
        { name: 'Flutter & Dart', level: 75, color: 'bg-blue-400' },
        { name: 'SQL & Database', level: 85, color: 'bg-green-500' },
        { name: 'Git & Jira', level: 85, color: 'bg-orange-600' },
        { name: 'React & Node.js', level: 20, color: 'bg-cyan-500' },

    ]; const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="skills" className="py-20 bg-gray-800">
            <div className="container mx-auto px-6">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
                    >
                        Skills & Expertise
                    </motion.h2>                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 gap-8">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="relative"
                                >
                                    <div className="flex justify-between mb-2">
                                        <span className="text-lg font-semibold text-gray-200">
                                            {skill.name}
                                        </span>
                                        <span className="text-lg font-semibold text-gray-400">
                                            {skill.level}%
                                        </span>
                                    </div>

                                    <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                                        <motion.div
                                            className={`h-full ${skill.color} rounded-full relative overflow-hidden`}
                                            initial={{ width: 0 }}
                                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                                            transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                                        >
                                            {/* Shine effect */}
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                                                animate={{
                                                    x: ['-100%', '200%'],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    repeatDelay: 1,
                                                    ease: "easeInOut",
                                                }}
                                            />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Technologies icons/badges */}
                        <motion.div
                            variants={itemVariants}
                            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
                        >
                            {[
                                { name: 'React', icon: '⚛️' },
                                { name: 'Node.js', icon: '🟢' },
                                { name: 'Python', icon: '🐍' },
                                { name: 'Java', icon: '☕' },
                                { name: 'Database', icon: '🗄️' },
                                { name: 'Git', icon: '📦' },
                                { name: 'API', icon: '🔌' },
                                { name: 'Cloud', icon: '☁️' },
                            ].map((tech, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gray-900 border-2 border-gray-700 p-6 rounded-xl text-center shadow-lg"
                                    whileHover={{
                                        scale: 1.1,
                                        boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                                        borderColor: "#3b82f6",
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="text-4xl mb-2">{tech.icon}</div>
                                    <div className="text-sm font-semibold text-gray-300">{tech.name}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Skills;
