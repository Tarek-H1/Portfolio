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
            category: 'Tools & Technologies',
            items: ['API Integration', 'Figma', 'Canva', 'Microsoft Office', 'Jira', 'Git/GitHub', 'Postman', 'Bitbucket'],
        },
        {
            category: 'Additional Skills',
            items: ['Scrum Master', 'Agile/Kanban Methodology', 'Team Collaboration', 'UI/UX Design'],
        },
        {
            category: 'Web & Mobile Development',
            items: ['React', 'React Native', 'Angular'],
        },
        {
            category: 'Backend & Cloud',
            items: ['Flask', 'AWS'],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
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

                    <div className="max-w-5xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
                        {skillGroups.map((group, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="break-inside-avoid mb-5 bg-slate-900 border border-slate-800 rounded-2xl p-6"
                            >
                                <div className="flex items-baseline justify-between mb-4">
                                    <h3 className="text-sm font-semibold tracking-wide uppercase text-slate-300">
                                        {group.category}
                                    </h3>
                                    <span className="text-xs text-slate-600">{group.items.length}</span>
                                </div>
                                <div className="flex flex-wrap content-start gap-2">
                                    {group.items.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-md text-sm font-medium text-slate-200 hover:border-indigo-500 hover:text-white transition-colors"
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
