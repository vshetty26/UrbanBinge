"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section id="about" className="py-16 sm:py-24 md:py-32 bg-cream overflow-hidden scroll-mt-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">

                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative min-h-[350px] sm:min-h-[450px] md:h-[600px] lg:sticky lg:top-32"
                    >
                        <div className="absolute inset-0 bg-accent/5 rounded-sm transform translate-x-4 translate-y-4" />
                        <div className="relative h-[350px] sm:h-[450px] md:h-full w-full rounded-sm overflow-hidden shadow-xl">
                            <Image
                                src="/image.png"
                                alt="Chopsticks Spice Malabar Interior"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Badge */}
                        <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 lg:-right-12 bg-secondary text-cream p-4 sm:p-6 rounded-full w-24 h-24 sm:w-32 sm:h-32 flex flex-col items-center justify-center shadow-lg z-10 border-4 border-cream">
                            <span className="text-2xl sm:text-3xl font-bold font-display">100%</span>
                            <span className="text-[8px] sm:text-xs uppercase tracking-widest text-center">Pure Veg</span>
                        </div>
                    </motion.div>

                    {/* Text Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2 space-y-6 md:space-y-8"
                    >
                        <div className="space-y-2">
                            <h3 className="text-secondary uppercase tracking-[0.2em] font-bold text-xs sm:text-sm">About Us</h3>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-accent leading-tight">
                                Pure Veg. <br /> <span className="text-primary italic">Authentic Flavours.</span>
                            </h2>
                        </div>

                        <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed font-light text-base sm:text-lg">
                            <p>
                                <strong className="font-semibold text-accent">Urban Binge</strong> is a pure vegetarian restaurant in Mumbai dedicated to bringing you the finest South Indian, Indian, and Asian cuisine. We believe that vegetarian food can be just as exciting, flavourful, and satisfying as any other cuisine — and we prove it with every dish we serve.
                            </p>

                            <p>
                                Our culinary philosophy celebrates the diversity of vegetarian cooking across regions and cuisines. From the crispy dosas and fluffy idlis of South India, to the rich curries of Indian tradition, to the bold and vibrant flavours of Asian wok cuisine — each dish is crafted with premium quality ingredients and authentic techniques that have been perfected over time.
                            </p>

                            <p>
                                At <strong className="font-semibold text-accent">Urban Binge</strong>, we take pride in using only honest, premium-quality ingredients with absolutely no artificial colours. <strong className="font-semibold text-accent">Our paneer is sourced exclusively from certified Punjab Sind dairy</strong>, ensuring purity and exceptional taste in every bite. We offer free home delivery because we believe great food should be accessible to everyone.
                            </p>

                            <AnimatePresence>
                                {isExpanded && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="space-y-4 sm:space-y-6 overflow-hidden"
                                    >
                                        <p>
                                            What sets us apart is our unwavering commitment to quality and authenticity. Every ingredient is carefully selected, every recipe is thoughtfully prepared, and every dish is crafted with precision and care. We believe that vegetarian cuisine deserves the same respect, expertise, and attention to detail as any other culinary tradition.
                                        </p>
                                        <p>
                                            Our menu spans across three distinct cuisines — South Indian breakfast specialities, Indian mains and breads, and Asian fusion dishes — all 100% vegetarian. Whether you're craving a traditional Masala Dosa, a creamy Paneer Tikka Masala, or a fiery Gochujang Wok Noodle, we have something to satisfy every palate and every craving.
                                        </p>
                                        <p>
                                            Today, <strong className="font-semibold text-accent">Urban Binge</strong> is more than just a restaurant — it's a celebration of vegetarian cuisine in all its forms. We're grateful to our customers who trust us to be part of their meals, their moments, and their memories. Every order we deliver, every dish we serve, is a promise of quality, taste, and care.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="mt-4 px-8 py-3 bg-accent text-primary text-xs sm:text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-secondary hover:text-white transition-all shadow-md"
                        >
                            {isExpanded ? "Show Less" : "Learn More"}
                        </motion.button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
