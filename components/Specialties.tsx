"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const specialties = [
    {
        name: "Ghee Roast Paneer Masala Dosa",
        price: "₹215",
        description: "Ghee-roasted crispy dosa filled with rich, spicy paneer masala and aromatic podi.",
        image: "/images/malabar_biryani.png"
    },
    {
        name: "Paneer Tikka Masala",
        price: "₹285",
        description: "Soft paneer tikka in a creamy tomato-based gravy with butter and mild spices.",
        image: "/images/schezwan_fried_rice.png"
    },
    {
        name: "Korean Gochujang Rice",
        price: "₹315",
        description: "Spicy Korean-style rice tossed in gochujang chilli paste with fresh greens and sesame.",
        image: "/images/tandoori_platter.png"
    },
    {
        name: "Hariyali Butter Paneer",
        price: "₹335",
        description: "Paneer cooked in a creamy green herb gravy finished with butter and mild spices.",
        image: "/images/kerala_fish_curry.png"
    }
];

export default function Specialties() {
    return (
        <section id="specialties" className="py-16 sm:py-24 md:py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <h3 className="text-secondary uppercase tracking-[0.2em] font-bold text-xs sm:text-sm mb-3">Our Signature Dishes</h3>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-accent mb-6">Urban Binge Favorites</h2>
                    <div className="w-16 sm:w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {specialties.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group bg-cream rounded-sm overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                            </div>
                            <div className="p-5 sm:p-6 flex flex-col flex-grow">
                                <h3 className="text-lg sm:text-xl font-display font-bold text-accent mb-2 group-hover:text-secondary transition-colors line-clamp-1">
                                    {item.name}
                                </h3>
                                <p className="text-gray-600 font-light text-sm line-clamp-2 sm:line-clamp-3 mb-4 flex-grow">
                                    {item.description}
                                </p>

                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 sm:mt-16 text-center">
                    <Link href="/menu" className="w-full sm:w-auto px-10 py-4 border-2 border-accent text-accent font-bold uppercase tracking-wider hover:bg-accent hover:text-cream transition-colors duration-300 rounded-sm inline-block text-sm sm:text-base">
                        View Full Menu
                    </Link>
                </div>
            </div>
        </section>
    );
}
