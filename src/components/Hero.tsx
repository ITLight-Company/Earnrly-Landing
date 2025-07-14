'use client'

import { motion } from 'framer-motion'
import { Star, DollarSign, Globe } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import { getImagePath } from '../utils/paths'

export default function Hero() {
    const [language, setLanguage] = useState('en')

    const content = {
        pl: {
            badge: "Nowa aplikacja do zarabiania 2025",
            title: "Zarabiaj Pieniądze",
            titleAccent: "Każdego Dnia",
            subtitle: "Rozwiązuj quizy, oglądaj filmy, instaluj aplikacje i wypełniaj ankiety.",
            subtitle2: "Przekształć swój wolny czas w prawdziwy dochód!",
            downloadBtn: "Pobierz za Darmo",
            howItWorksBtn: "Zobacz Jak Działa",
            stats: {
                users: "Wczesnych testerów",
                rewards: "Gotowe do wypłaty",
                rating: "Wczesne opinie"
            },
            trust: {
                secure: "Bezpieczne płatności",
                free: "Darmowe pobieranie",
                instant: "Natychmiastowe wypłaty"
            }
        },
        en: {
            badge: "New Earning App 2025",
            title: "Earn Money",
            titleAccent: "Every Day",
            subtitle: "Solve quizzes, watch videos, install apps and complete surveys.",
            subtitle2: "Turn your free time into real income!",
            downloadBtn: "Download Free",
            howItWorksBtn: "See How It Works",
            stats: {
                users: "Early testers",
                rewards: "Ready to pay",
                rating: "Early reviews"
            },
            trust: {
                secure: "Secure payments",
                free: "Free download",
                instant: "Instant payouts"
            }
        },
        es: {
            badge: "Nueva App para Ganar Dinero 2025",
            title: "Gana Dinero",
            titleAccent: "Cada Día",
            subtitle: "Resuelve cuestionarios, mira videos, instala apps y completa encuestas.",
            subtitle2: "¡Convierte tu tiempo libre en ingresos reales!",
            downloadBtn: "Descargar Gratis",
            howItWorksBtn: "Ver Cómo Funciona",
            stats: {
                users: "Probadores tempranos",
                rewards: "Listo para pagar",
                rating: "Reseñas tempranas"
            },
            trust: {
                secure: "Pagos seguros",
                free: "Descarga gratuita",
                instant: "Pagos instantáneos"
            }
        },
        fr: {
            badge: "Nouvelle App pour Gagner de l'Argent 2025",
            title: "Gagnez de l'Argent",
            titleAccent: "Chaque Jour",
            subtitle: "Résolvez des quiz, regardez des vidéos, installez des apps et répondez à des sondages.",
            subtitle2: "Transformez votre temps libre en revenus réels!",
            downloadBtn: "Télécharger Gratuit",
            howItWorksBtn: "Voir Comment Ça Marche",
            stats: {
                users: "Testeurs précoces",
                rewards: "Prêt à payer",
                rating: "Avis précoces"
            },
            trust: {
                secure: "Paiements sécurisés",
                free: "Téléchargement gratuit",
                instant: "Paiements instantanés"
            }
        }
    }

    const currentContent = content[language as keyof typeof content]

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
            {/* Background Animation */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500 rounded-full filter blur-2xl animate-pulse delay-700"></div>
                <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-indigo-500 rounded-full filter blur-xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                {/* Language Switcher */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute top-6 lg:top-8 right-4 lg:right-8 z-20"
                >
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-2 flex items-center gap-2">
                        <Globe className="w-4 h-4 text-white" />
                        <select
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            className="bg-transparent text-white text-sm border-none outline-none cursor-pointer"
                        >
                            <option value="pl" className="bg-gray-900 text-white">🇵🇱 PL</option>
                            <option value="en" className="bg-gray-900 text-white">🇺🇸 EN</option>
                            <option value="es" className="bg-gray-900 text-white">🇪🇸 ES</option>
                            <option value="fr" className="bg-gray-900 text-white">🇫🇷 FR</option>
                        </select>
                    </div>
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-16 lg:py-20 gap-8 lg:gap-16">
                    {/* Left Column - Content */}
                    <div className="flex-1 text-center lg:text-left space-y-8 lg:space-y-10 max-w-2xl order-2 lg:order-1 px-4 lg:px-0">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 lg:px-6 py-2 lg:py-3 text-white mb-6 lg:mb-8"
                            >
                                <Star className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 fill-current" />
                                <span className="text-xs lg:text-sm font-medium">{currentContent.badge}</span>
                            </motion.div>

                            {/* Earnrly Logo */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="mb-8 lg:mb-10 flex items-center justify-center lg:justify-start gap-4"
                            >
                                <Image src={getImagePath("/logo_v2.svg")} alt="Earnrly" width={80} height={80} className="w-16 h-16 lg:w-20 lg:h-20" />
                                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                                    Earnrly
                                </h1>
                                <div className="h-1 w-24 lg:w-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto lg:mx-0"></div>
                            </motion.div>

                            {/* Main Heading */}
                            <div className="space-y-6 lg:space-y-8 mb-8 lg:mb-10">
                                <motion.h2
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight"
                                >
                                    {currentContent.title}
                                    <br />
                                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                                        {currentContent.titleAccent}
                                    </span>
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0"
                                >
                                    {currentContent.subtitle}
                                    <br className="hidden sm:block" />
                                    {currentContent.subtitle2}
                                </motion.p>
                            </div>

                            {/* Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8 text-white mb-8 lg:mb-10"
                            >
                                <div className="text-center lg:text-left bg-white/5 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-white/10">
                                    <div className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-1">5K+</div>
                                    <div className="text-sm text-gray-300">{currentContent.stats.users}</div>
                                </div>
                                <div className="text-center lg:text-left bg-white/5 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-white/10">
                                    <div className="text-2xl lg:text-3xl font-bold text-green-400 mb-1">$250K+</div>
                                    <div className="text-sm text-gray-300">{currentContent.stats.rewards}</div>
                                </div>
                                <div className="text-center lg:text-left bg-white/5 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-white/10">
                                    <div className="text-2xl lg:text-3xl font-bold text-blue-400 mb-1">4.9★</div>
                                    <div className="text-sm text-gray-300">{currentContent.stats.rating}</div>
                                </div>
                            </motion.div>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                                className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start items-center mb-8 lg:mb-10"
                            >
                                <button className="group relative bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-4 lg:py-5 px-8 lg:px-10 rounded-full text-base lg:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3 w-full sm:w-auto shadow-xl">
                                    <Image src={getImagePath("/launcher_3.png")} alt="Earnrly" width={24} height={24} className="w-5 h-5 lg:w-6 lg:h-6 rounded-lg" />
                                    {currentContent.downloadBtn}
                                    <motion.div
                                        className="absolute inset-0 bg-white/20 rounded-full"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    />
                                </button>

                                <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold py-4 lg:py-5 px-8 lg:px-10 rounded-full text-base lg:text-lg transition-all duration-300 hover:bg-white/20 flex items-center gap-3 w-full sm:w-auto shadow-lg">
                                    <DollarSign className="w-5 h-5 lg:w-6 lg:h-6" />
                                    {currentContent.howItWorksBtn}
                                </button>
                            </motion.div>

                            {/* Trust Indicators */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="flex flex-wrap justify-center lg:justify-start items-center gap-6 lg:gap-8 opacity-70"
                            >
                                <div className="flex items-center gap-2 text-white text-sm bg-white/5 rounded-full px-4 py-2">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    {currentContent.trust.secure}
                                </div>
                                <div className="flex items-center gap-2 text-white text-sm bg-white/5 rounded-full px-4 py-2">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    {currentContent.trust.free}
                                </div>
                                <div className="flex items-center gap-2 text-white text-sm bg-white/5 rounded-full px-4 py-2">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    {currentContent.trust.instant}
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Column - Enhanced Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex-1 flex justify-center lg:justify-end max-w-md lg:max-w-lg order-1 lg:order-2 px-4 lg:px-0"
                    >
                        <div className="relative w-full max-w-sm mx-auto">
                            {/* Main Phone */}
                            <div className="w-72 h-[580px] bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl relative overflow-hidden mx-auto">
                                <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                                    {/* Real App Screenshot */}
                                    <Image
                                        src={getImagePath("/Screenshot_1752504307.png")}
                                        alt="Earnrly App Screenshot"
                                        width={300}
                                        height={600}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Overlay with floating elements */}
                                    <div className="absolute inset-0">
                                        <motion.div
                                            animate={{ y: [0, -20, 0], rotate: [0, 360] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                            className="absolute top-1/4 left-4 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                                        >
                                            <DollarSign className="w-5 h-5 text-black" />
                                        </motion.div>

                                        <motion.div
                                            animate={{ y: [0, -15, 0], rotate: [0, -360] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                            className="absolute top-1/2 right-4 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center shadow-lg"
                                        >
                                            <span className="text-sm font-bold text-black">€</span>
                                        </motion.div>

                                        <motion.div
                                            animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
                                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                            className="absolute bottom-1/3 left-6 w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center shadow-lg"
                                        >
                                            <span className="text-xs font-bold text-black">$</span>
                                        </motion.div>
                                    </div>

                                    {/* Bottom Stats */}
                                    <div className="mt-auto p-4 bg-white/10 backdrop-blur-sm rounded-t-2xl">
                                        <div className="grid grid-cols-2 gap-3 text-center text-white">
                                            <div>
                                                <div className="text-lg font-bold text-yellow-400">+$1.2K</div>
                                                <div className="text-xs opacity-80">in beta</div>
                                            </div>
                                            <div>
                                                <div className="text-lg font-bold text-green-400">98%</div>
                                                <div className="text-xs opacity-80">testers happy</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                            {/* Floating Earnings Indicators */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -left-4 bg-green-500 text-white px-2 py-1 rounded-lg text-xs font-bold shadow-lg"
                            >
                                +$125
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-4 -right-4 bg-yellow-500 text-black px-2 py-1 rounded-lg text-xs font-bold shadow-lg"
                            >
                                +$89
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
