import { motion, useScroll, useSpring } from "framer-motion";
import {
    MessageCircle,
    PencilRuler,
    Hammer,
    ShieldCheck,
    ArrowRight,
    Check, Handshake, Layers
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function ProcessImage({ image }) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
            className="relative h-[360px] overflow-hidden rounded-2xl shadow-sm"
        >
            <motion.img
                src={`${image}?auto=format&fit=crop&w=900&q=80`}
                loading="lazy"
                initial={{ opacity: 0, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full object-cover"
            />
        </motion.div>
    );
}

const steps = [
    {
        id: "01",
        title: "Consultation & Discovery",
        icon: MessageCircle,
        desc: "We understand your lifestyle, needs, and budget.",
        image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
        points: [
            "On-site or virtual consultation",
            "Understanding space requirements",
            "Budget & timeline alignment",
        ],
    },
    {
        id: "02",
        title: "Design & Planning",
        icon: PencilRuler,
        desc: "Ideas are translated into tangible design plans.",
        image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1",
        points: [
            "Space planning & layouts",
            "Material & finish selection",
            "3D views & approvals",
        ],
    },
    {
        id: "03",
        title: "Execution & Management",
        icon: Hammer,
        desc: "Every detail is managed with precision.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
        points: [
            "Vendor coordination",
            "On-site supervision",
            "Timeline & quality control",
        ],
    },
    {
        id: "04",
        title: "Quality Check & Handover",
        icon: ShieldCheck,
        desc: "Final walkthrough and project handover.",
        image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab",
        points: [
            "Final walkthrough",
            "Finishing checks",
            "Completion & support",
        ],
    },
];

export default function ProcessPageComp() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const navigate = useNavigate();


    return (
        <main className="bg-[#faf9f7] text-black overflow-hidden">

            <motion.div
                style={{ scaleX }}
                className="fixed top-19 left-0 right-0 h-1 bg-yellow-200 origin-left z-999"
            />

            <section className="py-24 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-gray-600"
                >
                    Our Process
                </motion.h1>
                <p className="mt-6 max-w-sm mx-auto text-neutral-700 leading-relaxed text-medium font-semibold">
                    A carefully structured journey clarity, collaboration, and craftsmanship.
                </p>
            </section>

            <section className="pb-32">
                <div className="max-w-6xl mx-auto px-6 space-y-32 relative">

                    <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-neutral-300" />

                    {steps.map((step) => {
                        const Icon = step.icon;

                        return (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                                className="grid md:grid-cols-2 gap-16 items-center relative"
                            >
                                <ProcessImage image={step.image} />

                                <div className="relative">
                                    <motion.div
                                        initial={{ scale: 0.6, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                        className="hidden md:flex absolute -left-10 top-7 w-4 h-4 rounded-full bg-gray-400"
                                    >
                                        <motion.span
                                            animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                                            transition={{ duration: 2.4, repeat: Infinity }}
                                            className="absolute inset-0 rounded-full bg-gray-400"
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="flex items-center gap-4 mb-4"
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            className="w-12 h-12 rounded-full flex items-center justify-center text-gray-500 bg-neutral-200 ring ring-offset-2 ring-gray-400"
                                        >
                                            <Icon size={20} />
                                        </motion.div>

                                        <span className="text-sm tracking-wide text-neutral-400">
                                            STEP {step.id}
                                        </span>
                                    </motion.div>

                                    <motion.h2
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.05 }}
                                        className="text-3xl font-semibold tracking-tight text-gray-500 mb-4 "
                                    >
                                        {step.title}
                                    </motion.h2>

                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className="text-neutral-600 leading-relaxed mb-8 max-w-xl"
                                    >
                                        {step.desc}
                                    </motion.p>

                                    <motion.ul
                                        initial="hidden"
                                        whileInView="visible"
                                        variants={{
                                            hidden: {},
                                            visible: { transition: { staggerChildren: 0.1 } },
                                        }}
                                        className="space-y-4"
                                    >
                                        {step.points.map((p, idx) => (
                                            <motion.li
                                                key={idx}
                                                variants={{
                                                    hidden: { opacity: 0, x: 20 },
                                                    visible: { opacity: 1, x: 0 },
                                                }}
                                                whileHover={{ x: 6 }}
                                                className="flex items-start gap-4 text-neutral-700"
                                            >
                                                <motion.span
                                                    whileHover={{ scale: 1.2 }}
                                                    className="mt-1 w-6 h-6 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 shrink-0"
                                                >
                                                    <Check size={14} />
                                                </motion.span>

                                                <span className="leading-relaxed">{p}</span>
                                            </motion.li>
                                        ))}
                                    </motion.ul>

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 0.6 }}
                                        transition={{ delay: 0.3 }}
                                        className="mt-8 flex items-center gap-2 text-sm text-neutral-600 cursor-pointer"
                                    >
                                        <span>See how this stage works</span>
                                        <ArrowRight size={14} />
                                    </motion.div>

                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            <section className="py-14 bg-white overflow-hidden">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.12 } },
                    }}
                    className="max-w-4xl mx-auto px-6 text-center"
                >
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, scale: 0.85 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                        className="mx-auto mb-8 w-14 h-14 rounded-full flex items-center justify-center text-neutral-600 ring-2 ring-offset-2 ring-neutral-200 bg-neutral-200"
                    >
                        <Handshake size={22} />
                    </motion.div>

                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: 14 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="text-3xl font-bold text-gray-500 mb-6"
                    >
                        How We Work
                    </motion.h2>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="text-neutral-600 leading-relaxed max-w-3xl mx-auto texxt-sm font-semibold"
                    >
                        Every project is built on clarity, collaboration, and trust. We keep
                        communication open, timelines transparent, and decisions intentional
                        so you feel confident at every stage.
                    </motion.p>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="mt-12 grid sm:grid-cols-2 gap-8 text-left"
                    >
                        <div className="flex gap-4">
                            <Layers className="text-neutral-500 py-1 px-1 rounded-full ring-2 ring-offset-2 ring-neutral-200 bg-neutral-200" size={38} />
                            <p className="text-sm text-neutral-600 font-medium">
                                A structured approach that brings clarity to every phase of the design
                                and execution process.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <Handshake className="text-neutral-500  py-1 px-1 rounded-full ring-2 ring-offset-2 ring-neutral-200 bg-neutral-200" size={38} />
                            <p className="text-sm text-neutral-600 font-medium">
                                Close collaboration ensures your vision remains at the center of
                                every decision we make.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* CTA SECTION */}
            <section className="py-32 bg-[#faf9f7] text-center overflow-hidden">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.15 } },
                    }}
                    className="max-w-3xl mx-auto px-6"
                >
                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="text-3xl font-bold text-gray-500"
                    >
                        Start Your Interior Journey With Us
                    </motion.h2>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 14 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="mt-6 text-neutral-700 leading-relaxed font-medium text-sm"
                    >
                        Whether you’re planning a complete transformation or refining an
                        existing space, we’re here to guide you every step of the way.
                    </motion.p>

                    <motion.button
                        whileHover={{
                            scale: 1.08,
                            boxShadow: "0 12px 30px rgba(0,0,0,.15)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate("/Contact")} className="mt-12 px-12 py-4 bg-gray-500 text-white rounded-2xl inline-flex items-center gap-3 ring-2 ring-offset-2 ring-gray-500 cursor-pointer"
                    >
                        Book a Consultation
                        <ArrowRight size={16} />
                    </motion.button>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 0.6 },
                        }}
                        className="mt-6 text-sm text-neutral-700 font-medium"
                    >
                        No obligation consultation · Transparent pricing · Clear timelines
                    </motion.p>
                </motion.div>
            </section>
        </main>
    );
}
