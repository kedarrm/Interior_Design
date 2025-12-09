import { motion } from "framer-motion";
import { ShieldCheck, Leaf, Layout, Sparkles } from "lucide-react";

const reasons = [
    {
        icon: ShieldCheck,
        title: "End-to-End Execution",
        desc: "From design to final handover, we manage every detail with precision and accountability.",
    },
    {
        icon: Layout,
        title: "Design That Works",
        desc: "Layouts crafted for real living — practical, comfortable, and timeless in form.",
    },
    {
        icon: Leaf,
        title: "Sustainable Choices",
        desc: "Materials and practices that respect nature while elevating interior quality.",
    },
    {
        icon: Sparkles,
        title: "Thoughtful Aesthetics",
        desc: "Design decisions that feel intentional, balanced, and refined.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-28 bg-[#faf9f7]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="max-w-xl mb-16 flex items-center mx-auto text-center flex-col"
                >
                    <span className="text-sm uppercase tracking-widest text-neutral-400 font-bold">
                        Why Choose Us
                    </span>

                    <h2 className="mt-3 text-4xl font-bold text-gray-600 leading-snug">
                        Design Beyond Appearance
                    </h2>

                    <p className="mt-2 text-neutral-700">
                        We create interiors that are lived in, not just looked at — designed
                        around how people move, gather, and relax.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((item, i) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -6 }}
                                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                            >
                                <div className="w-12 h-12 rounded-full border flex items-center justify-center mb-4 text-neutral-700">
                                    <Icon size={20} />
                                </div>

                                <h3 className="font-medium mb-2">{item.title}</h3>

                                <p className="text-sm text-neutral-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
