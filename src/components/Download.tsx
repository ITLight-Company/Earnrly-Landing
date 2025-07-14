'use client'

import { motion } from 'framer-motion'
import { Star, Shield, Zap } from 'lucide-react'
import Image from 'next/image'

export default function Download() {
    return (
        <section id="download" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500 rounded-full filter blur-2xl animate-pulse delay-700"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                            Download
                            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Earnrly</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Start earning today! Download the Earnrly app and discover
                            the easiest way to generate additional income.
                        </p>
                    </motion.div>

                    {/* Main Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Phone Mockup */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative mx-auto max-w-sm">
                                {/* Phone Frame */}
                                <div className="relative">
                                    <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-6 shadow-2xl mx-auto">
                                        <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
                                            {/* Real App Screenshot */}
                                            <Image 
                                                src="/Screenshot_1752504307.png" 
                                                alt="Earnrly App Screenshot" 
                                                width={300}
                                                height={600}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Floating Elements */}
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                                    >
                                        <span className="text-xl">💰</span>
                                    </motion.div>

                                    <motion.div
                                        animate={{ y: [0, 10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                        className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-lg"
                                    >
                                        <span className="text-xl">⭐</span>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Side - Download Links & Features */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-left"
                        >
                            {/* Features List */}
                            <div className="space-y-6 mb-10">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                                        <Shield className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">100% Secure</h3>
                                        <p className="text-gray-300">Trusted by millions of users</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                        <Zap className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">Lightning Fast Payouts</h3>
                                        <p className="text-gray-300">Money in your account within 24h</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                                        <Star className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">Highest Rated</h3>
                                        <p className="text-gray-300">4.8★ on App Store and Google Play</p>
                                    </div>
                                </div>
                            </div>

                            {/* Download Buttons */}
                            <div className="space-y-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-4 px-6 rounded-2xl text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <Image src="/launcher_3.png" alt="Earnrly" width={24} height={24} className="w-6 h-6 rounded-lg" />
                                    Download for Android
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold py-4 px-6 rounded-2xl text-lg flex items-center justify-center gap-3 hover:bg-white/20 transition-colors duration-300"
                                >
                                    <Image src="/launcher_3.png" alt="Earnrly" width={24} height={24} className="w-6 h-6 rounded-lg" />
                                    Download for iOS
                                </motion.button>
                            </div>

                            {/* Additional Info */}
                            <div className="mt-8 text-center">
                                <p className="text-gray-400 text-sm mb-4">
                                    Free download • No hidden fees • No ads
                                </p>

                                <div className="flex justify-center items-center gap-6 text-sm text-gray-300">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                        <span>500K+ downloads</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                        <span>$2M paid out</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
                    >
                        <div className="text-center">
                            <div className="text-3xl font-bold text-yellow-400 mb-2">5M+</div>
                            <div className="text-gray-300">Completed tasks</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-green-400 mb-2">500K+</div>
                            <div className="text-gray-300">Active users</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-400 mb-2">$2M</div>
                            <div className="text-gray-300">Rewards paid out</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-400 mb-2">4.8★</div>
                            <div className="text-gray-300">Average rating</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
