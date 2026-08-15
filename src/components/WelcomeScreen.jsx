import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function WelcomeScreen({ onComplete }) {
    const [showWelcome, setShowWelcome] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setShowWelcome(false);
                        setTimeout(onComplete, 300);
                    }, 300);
                    return 100;
                }
                return prev + 1.5;
            });
        }, 30);
        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {showWelcome && (
                <motion.div
                    className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Blurred animated background */}
                    <div className="absolute inset-0">
                        <img
                            src="/Portfolio/photo/animation_2.gif"
                            alt=""
                            className="w-full h-full object-cover blur-sm"
                        />
                        <div className="absolute inset-0 bg-black/60" />
                    </div>

                    <div className="relative z-10 text-center px-6">
                        {/* Loading bar container */}
                        <div className="w-80 md:w-96 mb-5">
                            <div className="relative h-2.5 bg-gray-800/80 rounded-full overflow-hidden border border-gray-700/50">
                                {/* Background shimmer effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                                    animate={{ x: ['-100%', '200%'] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                />

                                {/* Progress bar with gradient */}
                                <motion.div
                                    className="h-full relative overflow-hidden bg-indigo-500"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                >
                                    {/* Animated shine effect on progress bar */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                        animate={{ x: ['-100%', '200%'] }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    />
                                </motion.div>
                            </div>
                        </div>

                        {/* Percentage */}
                        <motion.div
                            className="text-5xl md:text-6xl font-bold mb-2 text-white"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {Math.floor(progress)}%
                        </motion.div>

                        {/* Loading text */}
                        <motion.p
                            className="text-gray-400 text-base font-light tracking-wider"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            Loading Experience
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default WelcomeScreen;