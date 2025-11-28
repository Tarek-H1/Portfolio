import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
            {/* Animated background gif */}
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src="/Portfolio/photo/animation_1.gif"
                    alt=""
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/90" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 1, type: "spring" }}
                        className="relative"
                    >
                        {/* Multiple glowing rings */}
                        <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{
                                boxShadow: '0 0 60px 20px rgba(59, 130, 246, 0.5)',
                            }}
                            animate={{
                                scale: [1, 1.15, 1],
                                opacity: [0.5, 0.8, 0.5]
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />

                        <motion.div
                            className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-2xl relative"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src="/Portfolio/photo/main.jpeg"
                                alt="M. Tarek Hamwi"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
                        </motion.div>

                        {/* Rotating decorative rings */}
                        <motion.div
                            className="absolute inset-0 rounded-full border-2 border-purple-400/30"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            className="absolute inset-0 rounded-full border-2 border-pink-400/20"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        />
                    </motion.div>

                    {/* Text Content */}
                    <div className="text-center md:text-left text-white">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <motion.h1
                                className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            >
                                M. Tarek Hamwi
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7, duration: 0.8 }}
                                className="space-y-2 mb-6"
                            >
                                <p className="text-2xl md:text-3xl text-gray-200">
                                    Software Engineering Student
                                </p>
                                <p className="text-xl md:text-2xl text-gray-300">
                                    Asia Pacific University
                                </p>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.9, duration: 0.8 }}
                                className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed"
                            >
                                I’m passionate about building scalable systems and love the challenge of system design. With a strong focus on team leadership, I’m dedicated to creating innovative solutions that solve real-world problems and drive meaningful impact!
                            </motion.p>                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.1, duration: 0.8 }}
                                className="flex flex-wrap gap-4 justify-center md:justify-start"
                            >
                                <Link to="projects" smooth={true} duration={500} offset={-70}>
                                    <motion.button
                                        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg"
                                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)" }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        View Projects
                                    </motion.button>
                                </Link>

                                <Link to="contact" smooth={true} duration={500} offset={-70}>
                                    <motion.button
                                        className="px-8 py-4 bg-transparent border-2 border-purple-400 text-white font-semibold rounded-full hover:bg-purple-400/20"
                                        whileHover={{ scale: 1.05, borderColor: "#c084fc" }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Contact Me
                                    </motion.button>
                                </Link>

                                <a href="/Portfolio/M.Tarek Hamwi Resume.pdf" download="M.Tarek Hamwi Resume.pdf">
                                    <motion.button
                                        className="px-8 py-4 bg-transparent border-2 border-pink-400 text-white font-semibold rounded-full hover:bg-pink-400/20 flex items-center gap-2"
                                        whileHover={{ scale: 1.05, borderColor: "#f472b6" }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        Download Resume
                                    </motion.button>
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <Link to="about" smooth={true} duration={500} offset={-70}>
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center cursor-pointer">
                        <motion.div
                            className="w-2 h-2 bg-white rounded-full mt-2"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </div>
                </Link>
            </motion.div>
        </section>
    );
}

export default Hero;
