import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Achievements() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [hackathonIndex, setHackathonIndex] = useState(0);
    const [graduationIndex, setGraduationIndex] = useState(0);

    const graduationPhotos = [
        '/Portfolio/photo/grad1.jpg',
        '/Portfolio/photo/grad2.jpg',
        '/Portfolio/photo/grad3.jpg',
        '/Portfolio/photo/grad4.jpg',
        '/Portfolio/photo/grad5.jpg',
        '/Portfolio/photo/grad6.jpg',
        '/Portfolio/photo/grad7.jpg',
    ];

    const hackathonPhotos = [
        '/Portfolio/photo/hack1.jpeg',
        '/Portfolio/photo/hack2.jpeg',
        '/Portfolio/photo/hack3.jpeg',
        '/Portfolio/photo/hack4.jpeg',
        '/Portfolio/photo/hack5.jpeg',
        '/Portfolio/photo/hack6.jpeg',
    ];

    // Auto-advance slideshow
    useEffect(() => {
        const gradTimer = setInterval(() => {
            setGraduationIndex((prev) => (prev + 1) % graduationPhotos.length);
        }, 3000);

        const hackTimer = setInterval(() => {
            setHackathonIndex((prev) => (prev + 1) % hackathonPhotos.length);
        }, 3500);

        return () => {
            clearInterval(gradTimer);
            clearInterval(hackTimer);
        };
    }, [graduationPhotos.length, hackathonPhotos.length]);

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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section id="achievements" className="py-24 bg-slate-950">
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
                        Achievements &amp; Recognition
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-center text-slate-400 text-lg mb-16 max-w-2xl mx-auto"
                    >
                        Milestones and accomplishments throughout my academic and professional journey
                    </motion.p>

                    {/* Joget Hackathon Achievement - Images Left, Text Right */}
                    <motion.div variants={itemVariants} className="mb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                            {/* Slideshow Left */}
                            <div className="relative h-80 lg:h-[420px] rounded-2xl overflow-hidden border border-slate-800">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={hackathonIndex}
                                        src={hackathonPhotos[hackathonIndex]}
                                        alt={`Hackathon ${hackathonIndex + 1}`}
                                        className="w-full h-full object-cover"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.6 }}
                                    />
                                </AnimatePresence>

                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                                    {hackathonPhotos.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setHackathonIndex(idx)}
                                            aria-label={`Show hackathon photo ${idx + 1}`}
                                            className={`h-1.5 rounded-full transition-all ${idx === hackathonIndex ? 'bg-indigo-400 w-6' : 'bg-slate-500 w-1.5'
                                                }`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={() => setHackathonIndex((prev) => (prev - 1 + hackathonPhotos.length) % hackathonPhotos.length)}
                                    aria-label="Previous photo"
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                                >
                                    &#8592;
                                </button>
                                <button
                                    onClick={() => setHackathonIndex((prev) => (prev + 1) % hackathonPhotos.length)}
                                    aria-label="Next photo"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                                >
                                    &#8594;
                                </button>
                            </div>

                            {/* Text Content Right */}
                            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
                                <span className="text-xs font-semibold tracking-wide uppercase text-indigo-400">
                                    1st Runner-up
                                </span>
                                <h3 className="text-2xl font-bold text-white mt-2 mb-2">
                                    Joget NextGen Hackathon 2024
                                </h3>
                                <p className="text-slate-500 text-sm mb-5">
                                    No-code / Low-code Hackathon &middot; Oct 2024 – Nov 2024
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                                        <span className="mt-2 w-1 h-1 rounded-full bg-slate-600 flex-shrink-0" />
                                        <span>Developed an innovative machinery management application using Joget DX 8 and related technologies</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                                        <span className="mt-2 w-1 h-1 rounded-full bg-slate-600 flex-shrink-0" />
                                        <span>Participated in a team of 4, addressing efficient machinery maintenance with a no-code/low-code solution</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                                        <span className="mt-2 w-1 h-1 rounded-full bg-slate-600 flex-shrink-0" />
                                        <span>Developed custom UI components using custom HTML within the Joget environment for a user-friendly interface</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Valedictorian Achievement - Text Left, Images Right */}
                    <motion.div variants={itemVariants}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                            {/* Text Content Left */}
                            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 order-2 lg:order-1">
                                <span className="text-xs font-semibold tracking-wide uppercase text-indigo-400">
                                    Valedictorian
                                </span>
                                <h3 className="text-2xl font-bold text-white mt-2 mb-2">
                                    IGCSE Graduating Class
                                </h3>
                                <p className="text-slate-500 text-sm mb-5">
                                    Wadi Sofia School &middot; 2021
                                </p>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex items-start gap-3 text-slate-400 leading-relaxed">
                                        <span className="mt-2 w-1 h-1 rounded-full bg-slate-600 flex-shrink-0" />
                                        <span>Awarded Valedictorian for outstanding academic performance, ranking at the top of the graduating class</span>
                                    </li>
                                    <li className="pl-4 space-y-1 text-slate-400">
                                        <p><span className="text-slate-200 font-semibold">A*:</span> Mathematics, Chemistry, Physics, Arabic</p>
                                        <p><span className="text-slate-200 font-semibold">A:</span> ICT, Additional Mathematics, Biology</p>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-400 leading-relaxed">
                                        <span className="mt-2 w-1 h-1 rounded-full bg-slate-600 flex-shrink-0" />
                                        <span>Demonstrated exceptional dedication to academic excellence throughout high school</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Slideshow Right */}
                            <div className="relative h-80 lg:h-[420px] rounded-2xl overflow-hidden border border-slate-800 order-1 lg:order-2">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={graduationIndex}
                                        src={graduationPhotos[graduationIndex]}
                                        alt={`Graduation ${graduationIndex + 1}`}
                                        className="w-full h-full object-cover"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.6 }}
                                    />
                                </AnimatePresence>

                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                                    {graduationPhotos.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setGraduationIndex(idx)}
                                            aria-label={`Show graduation photo ${idx + 1}`}
                                            className={`h-1.5 rounded-full transition-all ${idx === graduationIndex ? 'bg-indigo-400 w-6' : 'bg-slate-500 w-1.5'
                                                }`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={() => setGraduationIndex((prev) => (prev - 1 + graduationPhotos.length) % graduationPhotos.length)}
                                    aria-label="Previous photo"
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                                >
                                    &#8592;
                                </button>
                                <button
                                    onClick={() => setGraduationIndex((prev) => (prev + 1) % graduationPhotos.length)}
                                    aria-label="Next photo"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                                >
                                    &#8594;
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default Achievements;
