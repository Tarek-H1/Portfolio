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
        '/photo/grad1.jpg',
        '/photo/grad2.jpg',
        '/photo/grad3.jpg',
        '/photo/grad4.jpg',
        '/photo/grad5.jpg',
        '/photo/grad6.jpg',
        '/photo/grad7.jpg',
    ];

    const hackathonPhotos = [
        '/photo/hack1.jpeg',
        '/photo/hack2.jpeg',
        '/photo/hack3.jpeg',
        '/photo/hack4.jpeg',
        '/photo/hack5.jpeg',
        '/photo/hack6.jpeg',
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
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section id="achievements" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl md:text-5xl font-bold text-center mb-4 text-white"
                    >
                        Achievements & Recognition
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto"
                    >
                        Milestones and accomplishments throughout my academic and professional journey
                    </motion.p>

                    {/* Joget Hackathon Achievement - Images Left, Text Right */}
                    <motion.div
                        variants={itemVariants}
                        className="mb-20"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Slideshow Left */}
                            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={hackathonIndex}
                                        src={hackathonPhotos[hackathonIndex]}
                                        alt={`Hackathon ${hackathonIndex + 1}`}
                                        className="w-full h-full object-cover"
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.7 }}
                                    />
                                </AnimatePresence>

                                {/* Slideshow indicators */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                                    {hackathonPhotos.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setHackathonIndex(idx)}
                                            className={`w-3 h-3 rounded-full transition-all ${idx === hackathonIndex ? 'bg-blue-500 w-8' : 'bg-gray-400'
                                                }`}
                                        />
                                    ))}
                                </div>

                                {/* Navigation buttons */}
                                <button
                                    onClick={() => setHackathonIndex((prev) => (prev - 1 + hackathonPhotos.length) % hackathonPhotos.length)}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                                >
                                    ←
                                </button>
                                <button
                                    onClick={() => setHackathonIndex((prev) => (prev + 1) % hackathonPhotos.length)}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                                >
                                    →
                                </button>
                            </div>

                            {/* Text Content Right */}
                            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                                <div className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full text-sm font-bold mb-4">
                                    🏆 2ND PLACE WINNER
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">
                                    Joget NextGen Hackathon 2024
                                </h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    No-code / Low-code Hackathon | Oct 2024 – Nov 2024
                                </p>
                                <div className="space-y-4 text-gray-300">
                                    <p className="flex items-start gap-2">
                                        <span className="text-blue-400 mt-1">✓</span>
                                        <span>Developed an innovative machinery management application using Joget DX 8 and related technologies</span>
                                    </p>
                                    <p className="flex items-start gap-2">
                                        <span className="text-blue-400 mt-1">✓</span>
                                        <span>Participated in a team of 4, addressing efficient machinery maintenance with a no-code/low-code solution</span>
                                    </p>
                                    <p className="flex items-start gap-2">
                                        <span className="text-blue-400 mt-1">✓</span>
                                        <span>Developed custom UI components using HTML within the Joget environment for user-friendly interface</span>
                                    </p>
                                    <p className="flex items-start gap-2">
                                        <span className="text-blue-400 mt-1">✓</span>
                                        <span>Demonstrated proficiency in Joget DX 8, JavaScript, HTML, SQL, and collaborative hackathon skills</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Valedictorian Achievement - Text Left, Images Right */}
                    <motion.div
                        variants={itemVariants}
                        className="mb-20"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Text Content Left */}
                            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 order-2 lg:order-1">
                                <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-bold mb-4">
                                    🎓 VALEDICTORIAN
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">
                                    IGCSE Graduating Class
                                </h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    Wadi Sofia School | 2021
                                </p>
                                <div className="space-y-4 text-gray-300">
                                    <p className="flex items-start gap-2">
                                        <span className="text-purple-400 mt-1">✓</span>
                                        <span>Awarded Valedictorian for outstanding academic performance, ranking at the top of the graduating class</span>
                                    </p>
                                    <p className="flex items-start gap-2">
                                        <span className="text-purple-400 mt-1">✓</span>
                                        <span>Excelled in key subjects with top grades:</span>
                                    </p>
                                    <div className="ml-6 space-y-2">
                                        <p className="text-gray-300">
                                            <span className="text-green-400 font-bold">A*:</span> Mathematics, Chemistry, Physics, Arabic
                                        </p>
                                        <p className="text-gray-300">
                                            <span className="text-blue-400 font-bold">A:</span> ICT, Additional Mathematics, Biology
                                        </p>
                                        <p className="text-gray-300">
                                            <span className="text-yellow-400 font-bold">B:</span> English as a Second Language
                                        </p>
                                    </div>
                                    <p className="flex items-start gap-2">
                                        <span className="text-purple-400 mt-1">✓</span>
                                        <span>Demonstrated exceptional dedication to academic excellence throughout high school</span>
                                    </p>
                                </div>
                            </div>

                            {/* Slideshow Right */}
                            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gray-700 order-1 lg:order-2">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={graduationIndex}
                                        src={graduationPhotos[graduationIndex]}
                                        alt={`Graduation ${graduationIndex + 1}`}
                                        className="w-full h-full object-cover"
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.7 }}
                                    />
                                </AnimatePresence>

                                {/* Slideshow indicators */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                                    {graduationPhotos.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setGraduationIndex(idx)}
                                            className={`w-3 h-3 rounded-full transition-all ${idx === graduationIndex ? 'bg-purple-500 w-8' : 'bg-gray-400'
                                                }`}
                                        />
                                    ))}
                                </div>

                                {/* Navigation buttons */}
                                <button
                                    onClick={() => setGraduationIndex((prev) => (prev - 1 + graduationPhotos.length) % graduationPhotos.length)}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                                >
                                    ←
                                </button>
                                <button
                                    onClick={() => setGraduationIndex((prev) => (prev + 1) % graduationPhotos.length)}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                                >
                                    →
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
