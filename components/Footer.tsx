"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-accent text-cream pt-12 sm:pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

                    {/* Brand Info */}
                    <div className="space-y-4 text-center sm:text-left">
                        <Link href="/menu" className="inline-block relative h-16 w-32 sm:h-20 sm:w-40 mx-auto sm:mx-0">
                            <Image
                                src="/chopsticklog.png"
                                alt="Urban Binge"
                                fill
                                className="object-contain"
                            />
                        </Link>
                        <p className="text-gray-400 font-light leading-relaxed text-sm max-w-xs mx-auto sm:mx-0">
                            Pure Veg | Indian | Asian
                        </p>
                        <p className="text-gray-400 font-light text-xs max-w-xs mx-auto sm:mx-0">
                            Premium quality ingredients. Free home deliveries available.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4 text-center sm:text-left">
                        <h3 className="text-lg font-bold font-display text-white">Contact Us</h3>
                        <ul className="space-y-3 text-sm font-light text-gray-400">
                            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                                <FaPhone className="text-primary flex-shrink-0" />
                                <div className="flex flex-col">
                                    <span>+91 79001 98888</span>
                                    <span>+91 7385554255</span>
                                </div>
                            </li>
                            <li className="flex flex-col sm:flex-row items-center gap-2">
                                <FaInstagram className="text-primary flex-shrink-0" />
                                <a href="https://www.instagram.com/urbanbingemumbai" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                    @urbanbingemumbai
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4 text-center sm:text-left">
                        <h3 className="text-lg font-bold font-display text-white">Quick Links</h3>
                        <ul className="space-y-2 text-sm font-light text-gray-400">
                            <li><Link href="/menu" className="hover:text-primary transition-colors">Order Online</Link></li>
                            <li><Link href="/cart" className="hover:text-primary transition-colors">View Cart</Link></li>
                            <li><Link href="/orders" className="hover:text-primary transition-colors">Track Orders</Link></li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left text-[10px] sm:text-xs text-gray-500 font-light space-y-3 md:space-y-0">
                    <p>&copy; {new Date().getFullYear()} Urban Binge. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
