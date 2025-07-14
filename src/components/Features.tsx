'use client'

import { motion } from 'framer-motion'
import {
    Brain,
    Smartphone,
    Youtube,
    FileText,
    Gamepad2,
    Gift,
    TrendingUp,
    Clock,
    Star,
    BarChart3,
    Users,
    Crown,
    Target,
    PiggyBank
} from 'lucide-react'

const features = [
    {
        icon: Brain,
        title: 'Quizzes & Puzzles',
        description: 'Solve fascinating quizzes on various topics and earn points for each correct answer.',
        color: 'from-purple-500 to-pink-500'
    },
    {
        icon: Smartphone,
        title: 'Install Apps',
        description: 'Download and test new applications, use them for a specified time and receive rewards.',
        color: 'from-blue-500 to-cyan-500'
    },
    {
        icon: Youtube,
        title: 'Watch Videos',
        description: 'Watch interesting YouTube videos, ads and sponsored content for points.',
        color: 'from-red-500 to-orange-500'
    },
    {
        icon: FileText,
        title: 'Complete Surveys',
        description: 'Share your opinion in surveys and market research while earning money.',
        color: 'from-green-500 to-emerald-500'
    },
    {
        icon: Gamepad2,
        title: 'Play Games',
        description: 'Play mobile games, achieve goals and levels, receiving rewards for progress.',
    },
    {
        icon: TrendingUp,
        title: 'Visit Websites',
        description: 'Visit websites, discover new services and receive points for activity.',
        color: 'from-yellow-500 to-orange-500'
    }
]

const premiumFeatures = [
    {
        icon: Crown,
        title: 'Premium Accounts',
        description: 'Access to exclusive tasks with higher rewards and priority support'
    },
    {
        icon: Target,
        title: 'Multipliers',
        description: 'Increase your earnings with point multipliers for activity and achievements'
    },
    {
        icon: Star,
        title: 'Level System',
        description: 'Advance to higher levels and unlock better rewards and bonuses'
    },
    {
        icon: PiggyBank,
        title: 'Earning Deposits',
        description: 'Deposit your points and earn passively without performing additional tasks'
    },
    {
        icon: BarChart3,
        title: 'Earnings Analytics',
        description: 'Track your progress, analyze earnings and optimize your strategy'
    },
    {
        icon: Users,
        title: 'Referral System',
        description: 'Invite friends and receive a percentage of their lifetime earnings'
    }
]

const bonusFeatures = [
    {
        icon: Gift,
        title: 'Reward System',
        description: 'Daily bonuses, streaks and special rewards for activity'
    },
    {
        icon: Clock,
        title: 'Instant Payouts',
        description: 'Withdraw funds to PayPal, bank transfer or crypto from just $10'
    }
]

export default function Features() {
    return (
        <section id="features" className="py-20 bg-gray-50">
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
                        Ways to
                        <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Earn Money</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover diverse methods to earn money in our app.
                        Every activity is rewarded with points that you can exchange for real money.
                    </p>
                </motion.div>

                {/* Main Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="relative group"
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100">
                                {/* Icon with gradient background */}
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className="w-full h-full text-white" />
                                </div>

                                {/* Content */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Hover effect overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Premium Features Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            Premium
                            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent"> Features</span>
                        </h3>
                        <p className="text-lg text-gray-600">
                            Advanced tools to maximize your earnings
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {premiumFeatures.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200 hover:border-yellow-300 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Bonus Features */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12"
                >
                    <div className="text-center mb-10">
                        <h3 className="text-3xl font-bold text-white mb-4">
                            Additional Benefits
                        </h3>
                        <p className="text-purple-100 text-lg">
                            Even more reasons to choose Earnrly
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {bonusFeatures.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-4"
                            >
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                                    <p className="text-purple-100">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
                            <div className="text-gray-600">Available tasks</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                            <div className="text-gray-600">Earning</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-green-600 mb-2">$10</div>
                            <div className="text-gray-600">Min. payout</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-orange-600 mb-2">48h</div>
                            <div className="text-gray-600">Payout time</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
