"use client";

import { motion } from "framer-motion";

const filters = [
    { id: "veg", label: "Pure Veg", type: "veg" },
];

interface FilterChipsProps {
    selectedFilter: string;
    onSelectFilter: (id: string) => void;
}

export default function FilterChips({ selectedFilter, onSelectFilter }: FilterChipsProps) {
    return (
        <div className="flex gap-2 overflow-x-auto no-scrollbar px-4 sm:px-6 lg:px-8 py-3 border-b border-gray-100">
            {filters.map((filter) => {
                return (
                    <div
                        key={filter.id}
                        className={`flex shrink-0 items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 border border-primary bg-primary/5 text-primary`}
                    >
                        {filter.type === "veg" && (
                            <span className={`w-3.5 h-3.5 border flex items-center justify-center p-0.5 border-green-600`}>
                                <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                            </span>
                        )}
                        {filter.label}
                    </div>
                );
            })}
        </div>
    );
}
