import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950">
            {/* Subtle static background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.12),_transparent_55%)]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-center gap-14">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="relative flex-shrink-0"
                    >
                        <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border border-slate-700 shadow-xl">
                            <img
                                src="/Portfolio/photo/main.jpeg"
                                alt="M. Tarek Hamwi"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <div className="text-center md:text-left text-white max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.7 }}
                        >
                            <p className="text-indigo-400 font-medium tracking-wide uppercase text-sm mb-3">
                                Software Engineer
                            </p>

                            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                                M. Tarek Hamwi
                            </h1>

                            <div className="space-y-1 mb-6">
                                <p className="text-xl md:text-2xl text-slate-200 font-medium">
                                    Software Engineering Student
                                </p>
                                <p className="text-base md:text-lg text-slate-400">
                                    Asia Pacific University &middot; Scrum Master, R&amp;D Team
                                </p>
                            </div>

                            <p className="text-base md:text-lg text-slate-400 mb-8 leading-relaxed">
                                Software Engineering student with hands-on experience in R&amp;D, e-commerce, and
                                industrial internship work spanning system design, mobile application migration, and
                                web development. Recently migrated React Native TV applications to Amazon's Vega OS
                                platform and built a production-grade UI kit at Kloudius Services. 1st Runner-up,
                                Joget NextGen Hackathon 2024.
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                <Link to="projects" smooth={true} duration={500} offset={-70}>
                                    <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-colors">
                                        View Projects
                                    </button>
                                </Link>

                                <Link to="contact" smooth={true} duration={500} offset={-70}>
                                    <button className="px-6 py-3 bg-transparent border border-slate-600 hover:border-indigo-400 text-white font-medium rounded-lg transition-colors">
                                        Contact Me
                                    </button>
                                </Link>

                                <a href="/Portfolio/M.Tarek Hamwi Resume.pdf" download="M.Tarek Hamwi Resume.pdf">
                                    <button className="px-6 py-3 bg-transparent border border-slate-600 hover:border-indigo-400 text-white font-medium rounded-lg transition-colors flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        Download Resume
                                    </button>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity }}
            >
                <Link to="about" smooth={true} duration={500} offset={-70}>
                    <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center cursor-pointer">
                        <motion.div
                            className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.8, repeat: Infinity }}
                        />
                    </div>
                </Link>
            </motion.div>
        </section>
    );
}

export default Hero;
