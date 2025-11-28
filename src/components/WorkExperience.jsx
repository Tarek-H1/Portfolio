import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function WorkExperience() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const experiences = [
        {
            title: 'Research and Development Team (R&D)',
            company: 'Centre of Technology & Innovation – APU',
            location: 'Kuala Lumpur, Malaysia',
            period: '2024 - 2025',
            description: 'Contributing to innovative solutions for academic management systems.',
            achievements: [
                'Contributed to designing and developing a centralized student management system',
                'Collaborated with cross-functional teams to ensure system scalability and efficiency',
                'Served as Scrum Master, overseeing project progress and facilitating team collaboration',
            ],
            color: 'from-blue-500 to-purple-500',
        },
        {
            title: 'E-commerce Specialist',
            company: 'Ck Decor',
            location: 'Malaysia - Kota Bharu',
            period: '2022 - 2023',
            description: 'Enhanced online presence and digital marketing strategies.',
            achievements: [
                'Built and enhanced company profile on Shopee and Lazada platforms',
                'Created targeted advertisements for Facebook and Instagram to boost brand visibility',
                'Assisted in developing the company website, gaining hands-on experience in web design',
            ],
            color: 'from-green-500 to-teal-500',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section id="experience" className="py-20 bg-gray-900">
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
                        Work Experience
                    </motion.h2>

                    <div className="max-w-5xl mx-auto relative">
                        {/* Timeline line */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500" />

                        <div className="space-y-12">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}
                                >
                                    {/* Content */}
                                    <motion.div
                                        className="flex-1 bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-700"
                                        whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                                    >
                                        <div className={`inline-block px-4 py-1 bg-gradient-to-r ${exp.color} text-white rounded-full text-sm font-semibold mb-4`}>
                                            {exp.period}
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            {exp.title}
                                        </h3>

                                        <p className="text-lg text-blue-400 font-semibold mb-1">
                                            {exp.company}
                                        </p>

                                        {exp.location && (
                                            <p className="text-gray-400 text-sm mb-4">
                                                {exp.location}
                                            </p>
                                        )}

                                        <p className="text-gray-300 mb-4 leading-relaxed">
                                            {exp.description}
                                        </p>

                                        <ul className="space-y-2">
                                            {exp.achievements.map((achievement, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    className="flex items-start gap-2 text-gray-300"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                                    transition={{ delay: index * 0.3 + idx * 0.1 }}
                                                >
                                                    <span className="text-green-400 mt-1">✓</span>
                                                    <span>{achievement}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>

                                    {/* Timeline dot */}
                                    <motion.div
                                        className="hidden md:block w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-gray-900 shadow-lg z-10"
                                        whileHover={{ scale: 1.5 }}
                                    />

                                    {/* Spacer for alternating layout */}
                                    <div className="hidden md:block flex-1" />
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
