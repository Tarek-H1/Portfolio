import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', to: 'hero' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Experience', to: 'experience' },
        { name: 'Projects', to: 'projects' },
        { name: 'Achievements', to: 'achievements' },
        { name: 'Contact', to: 'contact' }
    ];

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800' : 'bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <motion.button
                        onClick={() => window.location.reload()}
                        className="text-2xl font-bold text-blue-400 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        M. TAREK HAMWI
                    </motion.button>

                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.to}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className={`cursor-pointer transition-colors duration-300 ${scrolled ? 'text-gray-300 hover:text-blue-400' : 'text-white hover:text-blue-300'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`${scrolled ? 'text-gray-300' : 'text-white'} focus:outline-none z-50 relative`}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <motion.div
                    initial={false}
                    animate={mobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden overflow-hidden"
                >
                    <div className="pt-4 pb-6 space-y-4">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.to}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer py-2"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    );
}

export default Navbar;
