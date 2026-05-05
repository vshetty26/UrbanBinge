"use client";

import { motion } from "framer-motion";
import { FaLeaf, FaTruck, FaStar, FaFire } from "react-icons/fa";

const features = [
    {
        icon: <FaLeaf className="text-4xl text-primary" />,
        title: "100% Pure Vegetarian",
        description: "All our dishes are completely vegetarian with no artificial colors. Premium quality ingredients only."
    },
    {
        icon: <FaTruck className="text-4xl text-primary" />,
        title: "Free Home Delivery",
        description: "Fast and reliable delivery across Mumbai. Your favorite dishes delivered hot and fresh to your doorstep."
    },
    {
        icon: <FaStar className="text-4xl text-primary" />,
        title: "Premium Paneer",
        description: "Sourced exclusively from certified Punjab Sind dairy, ensuring purity and exceptional taste in every bite."
    },
    {
        icon: <FaFire className="text-4xl text-primary" />,
        title: "Authentic Recipes",
        description: "South Indian, Indian, and Asian cuisines crafted with authentic techniques and premium spices."
    }
];

export default function Features() {
    return (
        <section className="py-20 md:py-32 bg-accent text-cream relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(#D4A017 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h3 className="text-primary uppercase tracking-[0.2em] font-bold text-sm mb-3">Why Choose Us</h3>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Urban Binge Difference</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white/5 backdrop-blur-sm p-8 rounded-sm border border-white/10 hover:bg-white/10 transition-colors duration-300 text-center group"
                        >
                            <div className="mb-6 inline-block p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300 transform group-hover:scale-110">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-display font-bold text-primary mb-4">{feature.title}</h3>
                            <p className="text-gray-300 font-light leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
