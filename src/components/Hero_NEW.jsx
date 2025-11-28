import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
            {/* Animated Matrix-like code rain background */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-blue-400 font-mono text-sm whitespace-pre"
                        style={{
                            left: `${i * 3.33}%`,
                            top: '-200px',
                        }}
                        animate={{
                            y: ['0vh', '120vh'],
                        }}
                        transition={{
                            duration: Math.random() * 8 + 7,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5,
                        }}
                    >
                        {Array.from({ length: 30 }, () =>
                            ['const', 'function', 'return', 'import', 'export', 'class', 'async', '{', '}', '(', ')', '=>'][Math.floor(Math.random() * 12)]
                        ).join('\n')}
                    </motion.div>
                ))}
            </div>

            {/* Floating geometric shapes */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={`shape-${i}`}
                        className="absolute border-2 border-blue-400/20"
                        style={{
                            width: Math.random() * 150 + 80,
                            height: Math.random() * 150 + 80,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '10px' : '0',
                        }}
                        animate={{
                            y: [0, -40, 0],
                            x: [0, Math.random() * 60 - 30, 0],
                            rotate: [0, 360],
                            opacity: [0.1, 0.4, 0.1],
                        }}
                        transition={{
                            duration: Math.random() * 15 + 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Glowing orbs */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={`orb-${i}`}
                        className="absolute rounded-full blur-3xl"
                        style={{
                            width: Math.random() * 300 + 200,
                            height: Math.random() * 300 + 200,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            background: `radial-gradient(circle, ${i % 3 === 0 ? 'rgba(59, 130, 246, 0.1)' :
                                    i % 3 === 1 ? 'rgba(139, 92, 246, 0.1)' :
                                        'rgba(236, 72, 153, 0.1)'
                                }, transparent)`,
                        }}
                        animate={{
                            x: [0, Math.random() * 100 - 50, 0],
                            y: [0, Math.random() * 100 - 50, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: Math.random() * 20 + 15,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-center gap-16">
                    {/* Profile Image with enhanced effects */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 1, type: "spring" }}
                        className="relative"
                    >
                        {/* Glowing ring effect */}
                        <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent 70%)',
                                filter: 'blur(20px)',
                            }}
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />

                        {/* Multiple rotating rings */}
                        <motion.div
                            className="absolute inset-0 rounded-full border-2 border-blue-400/30"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            style={{ width: '110%', height: '110%', left: '-5%', top: '-5%' }}
                        />

                        <motion.div
                            className="absolute inset-0 rounded-full border-2 border-purple-400/30"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            style={{ width: '120%', height: '120%', left: '-10%', top: '-10%' }}
                        />

                        <motion.div
                            className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-400/50 shadow-2xl relative"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                boxShadow: '0 0 60px rgba(59, 130, 246, 0.5), 0 0 100px rgba(139, 92, 246, 0.3)',
                            }}
                        >
                            <img
                                src="/photo/main.jpeg"
                                alt="M. Tarek Hamwi"
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
                        </motion.div>
                    </motion.div>

                    {/* Text Content */}
                    <div className="text-center md:text-left text-white max-w-2xl">
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
                                <p className="text-2xl md:text-3xl text-blue-300 font-semibold">
                                    Software Engineering Student
                                </p>
                                <p className="text-xl md:text-2xl text-purple-300">
                                    Asia Pacific University
                                </p>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.9, duration: 0.8 }}
                                className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
                            >
                                Passionate about building scalable systems with expertise in concurrent programming,
                                system design, and team leadership. Dedicated to creating innovative solutions that
                                solve real-world problems.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.1, duration: 0.8 }}
                                className="flex gap-4 justify-center md:justify-start flex-wrap"
                            >
                                <Link to="projects" smooth={true} duration={500} offset={-70}>
                                    <motion.button
                                        className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg relative overflow-hidden group"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className="relative z-10">View Projects</span>
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                                            initial={{ x: '100%' }}
                                            whileHover={{ x: 0 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.button>
                                </Link>

                                <Link to="contact" smooth={true} duration={500} offset={-70}>
                                    <motion.button
                                        className="px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-400 font-semibold rounded-full hover:bg-blue-400/10"
                                        whileHover={{ scale: 1.05, borderColor: '#a78bfa' }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Contact Me
                                    </motion.button>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <Link to="about" smooth={true} duration={500} offset={-70}>
                    <div className="w-8 h-12 border-2 border-blue-400 rounded-full flex justify-center cursor-pointer hover:border-purple-400 transition-colors">
                        <motion.div
                            className="w-2 h-2 bg-blue-400 rounded-full mt-2"
                            animate={{ y: [0, 16, 0], backgroundColor: ['#60a5fa', '#a78bfa', '#60a5fa'] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </div>
                </Link>
            </motion.div>
        </section>
    );
}

export default Hero;
