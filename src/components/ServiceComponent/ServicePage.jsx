import { motion } from "framer-motion";
import {
    Home,
    Building2,
    Sofa,
    PencilRuler,
    LayoutGrid,
    Sparkles,
    Wallet,
    Layers,
    ClipboardCheck,
    Clock,
    Building2Icon,
    RockingChair,
} from "lucide-react";
import { useNavigate } from "react-router-dom";



const points = [
    {
        text: "Personalized design approach",
        icon: Sparkles,
    },
    {
        text: "Transparent pricing & timelines",
        icon: Wallet,
    },
    {
        text: "Quality-driven material selection",
        icon: Layers,
    },
    {
        text: "Dedicated project supervision",
        icon: ClipboardCheck,
    },
    {
        text: "Long-term usability focus",
        icon: Clock,
    },
];


const services = [
    {
        title: "Residential Interiors",
        desc: "Personalized homes designed around your lifestyle, taste, and comfort.",
        icon: Home,
        image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        size: "lg",
    },
    {
        title: "Commercial Spaces",
        desc: "Functional interiors aligned with your brand and workflow.",
        icon: Building2,
        image:
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
        size: "sm",
    },
    {
        title: "Custom Furniture",
        desc: "Bespoke furniture crafted to fit seamlessly.",
        icon: Sofa,
        image:
            "https://images.unsplash.com/photo-1593498208892-bf9d06296062?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        size: "sm",
    },
    {
        title: "Design Consultation",
        desc: "Guidance on layouts, materials, finishes, and planning.",
        icon: PencilRuler,
        image:
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
        size: "md",
    },
    {
        title: "Space Planning",
        desc: "Optimized layouts for flow, balance, and usability.",
        icon: LayoutGrid,
        image:
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
        size: "sm",
    },
    {
        title: "Contemporary WorkSpace",
        desc: "Optimized layouts for flow, balance, and usability.",
        icon: Building2Icon,
        image:
            "https://plus.unsplash.com/premium_photo-1661918212999-4cdc8137bc8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q29udGVtcG9yYXJ5JTIwV29ya3NwYWNlfGVufDB8fDB8fHww",
        size: "md",
    }, {
        title: "Space Planning",
        desc: "Optimized layouts for flow, balance, and usability.",
        icon: RockingChair,
        image:
            "https://plus.unsplash.com/premium_photo-1674935640317-919c9f9f91ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3VzdG9tJTIwZnVybml0dXJlfGVufDB8fDB8fHww",
        size: "sm",
    },
];

export default function ServicesPageComp() {

    const navigate = useNavigate()

    return (
        <main className="bg-[#faf9f7] text-black">

            <section className="py-24 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-gray-600"
                >
                    Our Services
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mt-4 max-w-2xl mx-auto text-neutral-700 font-semibold"
                >
                    Thoughtfully designed interiors balancing beauty, function, and
                    comfort across every space.
                </motion.p>
            </section>

            <section className="pb-28">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[260px]">

                    {services.map((service, i) => {
                        const Icon = service.icon;

                        const sizeClasses =
                            service.size === "lg"
                                ? "md:col-span-2 md:row-span-2"
                                : service.size === "md"
                                    ? "md:col-span-2"
                                    : "md:col-span-1";

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                whileHover={{ y: -6 }}
                                className={`relative overflow-hidden rounded-2xl group ${sizeClasses}`}
                            >
                                <motion.img
                                    src={service.image}
                                    alt={service.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.6 }}
                                />

                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition" />

                                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="absolute top-5 right-5 w-10 h-10 rounded-full border border-white/40 bg-black/30 flex items-center justify-center"
                                    >
                                        <Icon size={18} />
                                    </motion.div>

                                    <motion.h3
                                        initial={{ opacity: 0, y: 10 }}
                                        whileHover={{ opacity: 1, y: 0 }}
                                        className="text-xl font-medium"
                                    >
                                        {service.title}
                                    </motion.h3>

                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        whileHover={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.05 }}
                                        className="mt-2 text-sm text-white/90 max-w-sm"
                                    >
                                        {service.desc}
                                    </motion.p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

              {/* ordered List */}
            <section className="py-18 bg-white">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-600 mb-6">
                            Designed With Purpose
                        </h2>
                        <p className="text-neutral-600 leading-relaxed font-semibold">
                            Each service is crafted around how a space is used not just
                            how it looks. From planning to execution, every decision serves
                            a clear function.
                        </p>
                        <p className="mt-4 text-neutral-600 leading-relaxed font-semibold text-sm">
                            Our goal is to create interiors that age gracefully, support daily routines,
                            and feel as relevant years from now as they do on day one.
                        </p>
                    </motion.div>

                    <motion.ul
                        initial="hidden"
                        whileInView="visible"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: { staggerChildren: 0.1 },
                            },
                        }}
                        className="space-y-5"
                    >
                        {points.map((point, i) => {
                            const Icon = point.icon;

                            return (
                                <motion.li
                                    key={i}
                                    variants={{
                                        hidden: { opacity: 0, x: 30 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                    whileHover={{ x: 6 }}
                                    className="flex items-start gap-4 cursor-default"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.15 }}
                                        className=" w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700"
                                    >
                                        <Icon size={18} />
                                    </motion.div>

                                    <p className="text-neutral-700 leading-relaxed">
                                        {point.text}
                                    </p>
                                </motion.li>
                            );
                        })}
                    </motion.ul>

                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-[#edebe9] text-center overflow-hidden">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.12 } },
                    }}
                    className="max-w-3xl mx-auto px-6"
                >
                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="text-4xl font-bold text-gray-600"
                    >
                        Let’s Create a Space That Reflects You
                    </motion.h2>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 16 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="mt-6 text-neutral-700 leading-relaxed font-semibold"
                    >
                        Whether you’re planning a new home, renovating an existing space,
                        or reimagining your workplace, we help translate your vision into
                        thoughtfully designed interiors.
                    </motion.p>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 12 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-neutral-600 font-medium"
                    >
                        <span>✓ Personalized approach</span>
                        <span>✓ Clear timelines</span>
                        <span>✓ End-to-end execution</span>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                        }}
                        className="mt-14 flex flex-col sm:flex-row justify-center gap-6"
                    >
                        <button onClick={() => navigate("/Contact")} className="px-6 py-2 bg-gray-600 text-white rounded-2xl hover:scale-105 transition cursor-pointer ring-2 ring-gray-600 ring-offset-2">
                            Book Consultation
                        </button>
                        <button onClick={() => navigate("/Projects")} className="px-6 py-2 rounded-2xl hover:bg-gray-600 hover:text-white transition cursor-pointer ring-2 ring-gray-600 ring-offset-2">
                            View our Projects
                        </button>
                    </motion.div>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 0.8 },
                        }}
                        className="mt-10 text-xs text-neutral-600"
                    >
                        No obligation consultation · Designed around your needs and budget
                    </motion.p>
                </motion.div>
            </section>


        </main>
    );
}
