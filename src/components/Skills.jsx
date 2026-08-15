import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Skills() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const skillGroups = [
        {
            category: 'Programming Languages',
            items: ['Python', 'Java', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'C++', 'C#', 'Flutter', 'Dart', 'R', 'SQL'],
        },
        {
            category: 'Web & Mobile Development',
            items: ['React', 'React Native', 'Angular'],
        },
        {
            category: 'Backend & Cloud',
            items: ['Flask', 'AWS'],
        },
        {
            category: 'Tools & Technologies',
            items: ['API Integration', 'Figma', 'Canva', 'Microsoft Office', 'Jira', 'Git/GitHub', 'Postman', 'Bitbucket'],
        },
        {
            category: 'Additional Skills',
            items: ['Scrum Master', 'Agile/Kanban Methodology', 'Team Collaboration', 'UI/UX Design'],
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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="skills" className="py-24 bg-slate-950">
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
                        Skills &amp; Expertise
                    </motion.h2>

                    <div className="max-w-4xl mx-auto space-y-10">
                        {skillGroups.map((group, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <h3 className="text-sm font-semibold tracking-wide uppercase text-slate-500 mb-4">
                                    {group.category}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {group.items.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-sm font-medium text-slate-200 hover:border-indigo-500 hover:text-white transition-colors"
                                        >
                                            {skill}
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

export default Skills;
