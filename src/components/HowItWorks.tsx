'use client'

import { motion } from 'framer-motion'
import { Download, UserPlus, Target, Gift } from 'lucide-react'

const steps = [
    {
        icon: Download,
        title: 'Download App',
        description: 'Download Earnrly for free from App Store or Google Play and install it on your phone.',
        step: '01'
    },
    {
        icon: UserPlus,
        title: 'Sign Up',
        description: 'Create a free account in seconds using email or social login.',
        step: '02'
    },
    {
        icon: Target,
        title: 'Complete Tasks',
        description: 'Choose from hundreds of available tasks: quizzes, surveys, games and other activities.',
        step: '03'
    },
    {
        icon: Gift,
        title: 'Collect Rewards',
        description: 'Withdraw earned points to PayPal, bank transfer or receive vouchers to stores.',
        step: '04'
    }
]

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                        How Does It
                        <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Work?</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Earning with Earnrly is simple and intuitive.
                        Start your earning journey in 4 simple steps.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="relative">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-purple-200 via-blue-200 to-green-200"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="relative text-center group"
                            >
                                {/* Step Number */}
                                <div className="relative z-10 mx-auto w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-white font-bold text-xl">{step.step}</span>

                                    {/* Pulse Animation */}
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-ping opacity-25"></div>
                                </div>

                                {/* Icon */}
                                <motion.div
                                    whileHover={{ rotate: 10 }}
                                    className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mb-6 group-hover:bg-purple-100 transition-colors duration-300"
                                >
                                    <step.icon className="w-8 h-8 text-purple-600" />
                                </motion.div>

                                {/* Content */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Connector Arrow for larger screens */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-10 -right-4 w-8 h-8">
                                        <svg className="w-full h-full text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8 md:p-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            Ready to Start?
                        </h3>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            Join thousands of users who are already earning with Earnrly.
                            Start your journey today!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                Download Now
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border-2 border-purple-600 text-purple-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-purple-600 hover:text-white transition-colors duration-300"
                            >
                                Watch Demo
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-500 mb-6">Trusted by:</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                        <div className="text-2xl font-bold text-gray-400">500K+ Users</div>
                        <div className="text-2xl font-bold text-gray-400">$2M Paid Out</div>
                        <div className="text-2xl font-bold text-gray-400">4.8★ Rating</div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
