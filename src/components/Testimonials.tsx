'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'Beta Tester',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b567?w=150&h=150&fit=crop&crop=face&auto=format',
        rating: 5,
        text: 'Testing Earnrly since day one. The interface is amazing and I already earned $1,250 in beta! Can&apos;t wait for the full release.',
        earnings: '$1,250+ in beta'
    },
    {
        name: 'Michael Chen',
        role: 'Early Adopter',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format',
        rating: 5,
        text: 'As one of the first users, I can say Earnrly has huge potential. I\'m already earning $1,800+ monthly!',
        earnings: '$1,800+/month'
    },
    {
        name: 'Emma Rodriguez',
        role: 'Community Tester',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format',
        rating: 5,
        text: 'Been testing since the beginning. The team listens to users and implements fixes quickly. Earned $1,450 so far!',
        earnings: '$1,450+ in testing'
    },
    {
        name: 'David Martinez',
        role: 'Early User',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format',
        rating: 5,
        text: 'The app is still developing but I can already see it\'s going to be huge! Earning during my commute to work.',
        earnings: '$1,100+/month'
    },
    {
        name: 'Lisa Thompson',
        role: 'Student Tester',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face&auto=format',
        rating: 5,
        text: 'Testing for my university friends. Great idea for extra money! Already bought new headphones with earned points.',
        earnings: '$1,050+ in tests'
    },
    {
        name: 'Robert Wilson',
        role: 'Beta User',
        avatar: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face&auto=format',
        rating: 5,
        text: 'Despite my age, I enjoy testing new technologies. Earnrly is intuitive and I already earned $1,200 in beta. Waiting for the full version!',
        earnings: '$1,200+ in beta'
    }
]

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
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
                        What Our
                        <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Beta Testers Say</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Meet the opinions of our first users who are testing Earnrly and already starting to earn.
                        Join them as an early adopter!
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative group"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                                <Quote className="w-12 h-12 text-purple-600" />
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-gray-700 mb-6 leading-relaxed italic">
                                &ldquo;{testimonial.text}&rdquo;
                            </p>

                            {/* Earnings Badge */}
                            <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                💰 {testimonial.earnings}
                            </div>

                            {/* User Info */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                </div>
                            </div>

                            {/* Hover Effect Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </div>

                {/* Success Stories Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
                >
                    <div className="text-center mb-10">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            Success Stories
                        </h3>
                        <p className="text-lg text-gray-600">
                            Numbers that tell everything about our community
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
                            <div className="text-gray-600">Satisfied users</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="text-4xl font-bold text-blue-600 mb-2">$1,200</div>
                            <div className="text-gray-600">Average monthly earnings</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="text-4xl font-bold text-green-600 mb-2">24h</div>
                            <div className="text-gray-600">Average payout time</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="text-4xl font-bold text-orange-600 mb-2">4.8★</div>
                            <div className="text-gray-600">Average rating</div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white">
                        <h3 className="text-3xl font-bold mb-4">
                            Join Them Today!
                        </h3>
                        <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
                            Don&apos;t wait any longer. Start earning with Earnrly and become the next success story.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-purple-600 font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            Start Earning
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
