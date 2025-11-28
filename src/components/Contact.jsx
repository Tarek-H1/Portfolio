import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    service_id: 'service_0q5lkgn',
                    template_id: 'template_tj8q20o', 
                    user_id: 'hhlBXp_6la3nBqDn_', 
                    template_params: {
                        from_name: formData.name,
                        from_email: formData.email,
                        message: formData.message,
                    },
                }),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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
        <section id="contact" className="py-20 bg-gray-800 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
                    style={{ top: '10%', left: '10%' }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
                    style={{ bottom: '10%', right: '10%' }}
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.5, 0.3, 0.5],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
                    >
                        Get In Touch
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto"
                    >
                        Have a question or want to work together? Let's connect!
                    </motion.p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <motion.div variants={itemVariants}>
                            <form
                                onSubmit={handleSubmit}
                                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8"
                            >
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-gray-300 font-semibold mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-300 font-semibold mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-300 font-semibold mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="6"
                                            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all resize-none"
                                            placeholder="Your message..."
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {status === 'sending'
                                            ? 'Sending...'
                                            : status === 'success'
                                                ? '✓ Message Sent!'
                                                : status === 'error'
                                                    ? '✗ Failed to Send'
                                                    : 'Send Message'}
                                    </motion.button>
                                </div>
                            </form>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            {/* Email */}
                            <motion.a
                                href="mailto:tareqhamwi2004@hotmail.com"
                                className="group block bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-6 hover:border-blue-500/50 transition-all"
                                whileHover={{ scale: 1.02, y: -4 }}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
                                        <svg
                                            className="w-7 h-7 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-gray-400 text-sm font-semibold mb-1">Email</h3>
                                        <p className="text-white font-medium group-hover:text-blue-400 transition-colors">
                                            tareqhamwi2004@hotmail.com
                                        </p>
                                    </div>
                                </div>
                            </motion.a>

                            {/* Phone */}
                            <motion.a
                                href="tel:+60115863241"
                                className="group block bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-6 hover:border-green-500/50 transition-all"
                                whileHover={{ scale: 1.02, y: -4 }}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-500 flex items-center justify-center flex-shrink-0">
                                        <svg
                                            className="w-7 h-7 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-gray-400 text-sm font-semibold mb-1">Phone</h3>
                                        <p className="text-white font-medium group-hover:text-green-400 transition-colors">
                                            +60 11-5863 2412
                                        </p>
                                    </div>
                                </div>
                            </motion.a>

                            {/* LinkedIn */}
                            <motion.a
                                href="https://www.linkedin.com/in/tarek-hamwi-113a17334"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-6 hover:border-blue-500/50 transition-all"
                                whileHover={{ scale: 1.02, y: -4 }}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center flex-shrink-0">
                                        <svg
                                            className="w-7 h-7 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-gray-400 text-sm font-semibold mb-1">LinkedIn</h3>
                                        <p className="text-white font-medium group-hover:text-blue-400 transition-colors">
                                            Tarek Hamwi
                                        </p>
                                    </div>
                                </div>
                            </motion.a>

                            {/* GitHub */}
                            <motion.a
                                href="https://github.com/Tarek-H1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-6 hover:border-purple-500/50 transition-all"
                                whileHover={{ scale: 1.02, y: -4 }}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center flex-shrink-0">
                                        <svg
                                            className="w-7 h-7 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-gray-400 text-sm font-semibold mb-1">GitHub</h3>
                                        <p className="text-white font-medium group-hover:text-purple-400 transition-colors">
                                            @Tarek-H1
                                        </p>
                                    </div>
                                </div>
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Contact;
