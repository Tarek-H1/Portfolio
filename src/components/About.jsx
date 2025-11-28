import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

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
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section id="about" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="max-w-4xl mx-auto"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
                    >
                        About Me
                    </motion.h2>

                    <motion.div
                        variants={itemVariants}
                        className="bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-700"
                    >
                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-gray-300 leading-relaxed mb-6"
                        >
                            A dedicated <span className="text-blue-400 font-semibold">Software Engineering student</span> at
                            Asia Pacific University, I achieved 2nd place in the Joget NextGen Hackathon 2024, where my team
                            developed an innovative machinery management solution. Passionate about building scalable systems,
                            I bring a strong track record in system design, and team leadership as a
                            Scrum Master for the Integrated Info System project.
                        </motion.p>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-gray-300 leading-relaxed mb-6"
                        >
                            I have served as <span className="text-blue-400 font-semibold">Scrum Master</span> for the Integrated Info System project at APU's Centre of Technology & Innovation, where I collaborated with cross-functional teams to ensure system scalability and efficiency. My expertise spans web development, database management, system design, and agile methodologies.
                        </motion.p>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-gray-300 leading-relaxed mb-8"
                        >
                            As <span className="text-blue-400 font-semibold">Valedictorian of my IGCSE class</span>, I bring
                            both academic excellence and practical problem-solving skills to every project. I'm always eager
                            to learn new technologies and collaborate on challenging projects that make a difference.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        >
                            <motion.div
                                className="text-center p-6 bg-gray-700 rounded-xl border border-gray-600"
                                whileHover={{ scale: 1.05, backgroundColor: "#374151" }}
                            >
                                <div className="text-4xl font-bold text-blue-400 mb-2">2+</div>
                                <div className="text-gray-300">Years Coding</div>
                            </motion.div>

                            <motion.div
                                className="text-center p-6 bg-gray-700 rounded-xl border border-gray-600"
                                whileHover={{ scale: 1.05, backgroundColor: "#374151" }}
                            >
                                <div className="text-4xl font-bold text-purple-400 mb-2">6+</div>
                                <div className="text-gray-300">Major Projects</div>
                            </motion.div>

                            <motion.div
                                className="text-center p-6 bg-gray-700 rounded-xl border border-gray-600"
                                whileHover={{ scale: 1.05, backgroundColor: "#374151" }}
                            >
                                <div className="text-4xl font-bold text-green-400 mb-2">8+</div>
                                <div className="text-gray-300">Technologies</div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;
