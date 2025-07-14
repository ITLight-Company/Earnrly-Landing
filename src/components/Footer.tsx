'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
    Smartphone,
    Mail,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    Shield,
    FileText,
    HelpCircle
} from 'lucide-react'

const footerLinks = {
    app: [
        { name: 'Download for Android', href: '#' },
        { name: 'Download for iOS', href: '#' },
        { name: 'App Features', href: '#features' },
        { name: 'How it works', href: '#how-it-works' }
    ],
    company: [
        { name: 'About us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Press', href: '#' }
    ],
    support: [
        { name: 'Help Center', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'FAQ', href: '#' },
        { name: 'System Status', href: '#' }
    ],
    legal: [
        { name: 'Terms of Service', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Cookies', href: '#' },
        { name: 'GDPR', href: '#' }
    ]
}

const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Youtube, href: '#', color: 'hover:text-red-500' }
]

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                                <Image src="/logo_v2.svg" alt="Earnrly" width={32} height={32} className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                                    Earnrly
                                </h3>
                                <p className="text-gray-400 text-sm">Earn money every day</p>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 leading-relaxed max-w-md">
                            Earnrly is the best way to earn money on your phone.
                            Solve quizzes, watch videos, install apps and receive real money.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-gray-300">
                                <Mail className="w-5 h-5 text-yellow-400" />
                                <span>contact@earnrly.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <MapPin className="w-5 h-5 text-yellow-400" />
                                <span>Global</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-colors duration-300 ${social.color}`}
                                >
                                    <social.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* App Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <Smartphone className="w-5 h-5 text-purple-400" />
                            App
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.app.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Company Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-bold mb-6">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Support Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <HelpCircle className="w-5 h-5 text-purple-400" />
                            Help
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Newsletter Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-12 pt-8 border-t border-gray-800"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div>
                            <h4 className="text-xl font-bold mb-2">Stay updated</h4>
                            <p className="text-gray-300">Get the latest information about new ways to earn money</p>
                        </div>

                        <div className="flex gap-3 w-full md:w-auto">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 md:w-80 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-shadow duration-300"
                            >
                                Subscribe
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="text-gray-400 text-sm text-center md:text-left"
                        >
                            © 2024 Earnrly. All rights reserved.
                        </motion.div>

                        {/* Legal Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-wrap justify-center gap-6"
                        >
                            {footerLinks.legal.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300 flex items-center gap-1"
                                >
                                    {link.name === 'Terms of Service' && <FileText className="w-4 h-4" />}
                                    {link.name === 'Privacy Policy' && <Shield className="w-4 h-4" />}
                                    {link.name}
                                </a>
                            ))}
                        </motion.div>

                        {/* Trust Badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4"
                        >
                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                                <Shield className="w-4 h-4 text-green-400" />
                                <span>Secure</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                <span>SSL</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
