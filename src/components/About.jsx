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
                staggerChildren: 0.15,
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

    const stats = [
        { value: '3', label: 'Professional Roles' },
        { value: '8+', label: 'Projects Built' },
        { value: '12+', label: 'Technologies' },
    ];

    return (
        <section id="about" className="py-24 bg-slate-900">
            <div className="container mx-auto px-6">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="max-w-4xl mx-auto"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
                    >
                        About Me
                    </motion.h2>

                    <motion.div
                        variants={itemVariants}
                        className="bg-slate-950 rounded-2xl p-8 md:p-12 border border-slate-800"
                    >
                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-slate-300 leading-relaxed mb-6"
                        >
                            I'm a <span className="text-indigo-400 font-semibold">Software Engineering student</span> at
                            Asia Pacific University with experience across R&amp;D, e-commerce, and industrial
                            internship work, where I've contributed to system design, mobile application migration,
                            and web development.
                        </motion.p>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-slate-300 leading-relaxed mb-6"
                        >
                            During my internship at <span className="text-indigo-400 font-semibold">Kloudius Services</span>,
                            I migrated React Native TV applications to Amazon's Vega OS platform and built a
                            production-grade UI kit. I currently serve as{' '}
                            <span className="text-indigo-400 font-semibold">Scrum Master</span> for APCentral, APU's
                            Centre of Technology &amp; Innovation R&amp;D project, where I oversee project progress and
                            facilitate team collaboration across cross-functional teams.
                        </motion.p>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-slate-300 leading-relaxed mb-10"
                        >
                            I earned <span className="text-indigo-400 font-semibold">2nd place in the Joget NextGen
                            Hackathon 2024</span> and bring the same drive to scalable system design, cross-platform
                            development, and team collaboration in every project I take on.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-slate-800 pt-8"
                        >
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl font-bold text-indigo-400 mb-1">{stat.value}</div>
                                    <div className="text-slate-400 text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;
