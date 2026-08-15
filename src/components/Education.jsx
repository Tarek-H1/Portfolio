import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Education() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const education = [
        {
            title: 'BSc (Hons) in Software Engineering',
            institution: 'Asia Pacific University (APU)',
            location: 'Malaysia – Bukit Jalil',
            period: '2023 – Expected Feb 2027',
            detail: 'Current CGPA: 3.56',
        },
        {
            title: 'Foundation in Science',
            institution: 'MAHSA University',
            location: 'Malaysia – Saujana Putra',
            period: '2022 – 2023',
            detail: 'CGPA: 3.53',
        },
        {
            title: 'IGCSE – High School',
            institution: 'Wadi Sofia School',
            location: 'Malaysia – Kota Bharu',
            period: '2019 – 2021',
            detail: 'A*: Mathematics, Chemistry, Physics, Arabic · A: ICT, Additional Mathematics, Biology',
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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="education" className="py-24 bg-slate-900">
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
                        Education
                    </motion.h2>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-slate-950 rounded-2xl p-8 border border-slate-800 flex flex-col md:flex-row md:items-start md:justify-between gap-2"
                            >
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">{edu.title}</h3>
                                    <p className="text-slate-300 font-medium">{edu.institution}</p>
                                    <p className="text-slate-500 text-sm mb-3">{edu.location}</p>
                                    <p className="text-slate-400 text-sm">{edu.detail}</p>
                                </div>
                                <span className="text-sm font-medium text-indigo-400 whitespace-nowrap">
                                    {edu.period}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Education;
