import { motion } from "framer-motion";
import {
    MessageCircle,
    PencilRuler,
    Hammer,
    ShieldCheck,
} from "lucide-react";

const steps = [
    {
        id: "01",
        title: "Consultation",
        desc: "Understanding your vision and budget.",
        icon: MessageCircle,
    },
    {
        id: "02",
        title: "Design & Planning",
        desc: "Layouts, materials and approvals.",
        icon: PencilRuler,
    },
    {
        id: "03",
        title: "Execution",
        desc: "We manage everything end-to-end.",
        icon: Hammer,
    },
    {
        id: "04",
        title: "Quality Check",
        desc: "Final walkthrough and refinement.",
        icon: ShieldCheck,
    },
];

export default function Process() {
    return (
        <section className="py-14 bg-[#faf9f7]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl mb-14 text-center font-bold text-gray-700"
                >
                    Our Process
                </motion.h2>

                <div className="grid md:grid-cols-4 gap-12 relative">
                    {steps.map((step, i) => {
                        const Icon = step.icon;

                        return (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.15, duration: 0.6 }}
                                whileHover={{ y: -8 }}
                                className="relative p-6 rounded-xl bg-white shadow-sm hover:shadow-md"
                            >

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ delay: i * 0.2 }}
                                    className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center bg-white"
                                >
                                    <Icon size={18} className="text-gray-500" />
                                </motion.div>

                                <motion.div
                                    initial={{ height: 0 }}
                                    whileInView={{ height: "60px" }}
                                    transition={{ delay: i * 0.2, duration: 0.6 }}
                                    className="absolute left-0 top-6 w-0.5 bg-black/20"
                                />

                                <span className="text-neutral-400 text-sm">{step.id}</span>

                                <h3 className="mt-3 font-medium text-lg">{step.title}</h3>

                                <p className="text-sm text-neutral-600 mt-2 leading-6">
                                    {step.desc}
                                </p>

                                <motion.div
                                    initial={{ opacity: 0, x: -6 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.25 }}
                                    className="absolute bottom-4 right-4 text-neutral-500 cursor-pointer"
                                >
                                    ➜
                                </motion.div>

                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
