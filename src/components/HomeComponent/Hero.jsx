import { motion } from "framer-motion";
import interior from "../../assets/interior.png";
import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();

    return (
        <section className="min-h-svh flex items-center pt-24 md:pt-0">
            <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-2 items-center">

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
                    }}
                >
                    <motion.span
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="mb-3 text-xs sm:text-sm text-gray-800 font-semibold tracking-wide
                       px-3 py-1 rounded-full flex w-fit gap-2 ring-1 ring-offset-2
                       ring-gray-500 bg-amber-100"
                    >
                        <Sparkles size={16} />
                        Vision Plan Design Studio
                    </motion.span>

                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="text-3xl font-normal sm:text-5xl leading-tight text-gray-600"
                    >
                        Designing Spaces <br />
                        <span className="font-medium relative inline-block">
                            That Feel Like Home
                            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black" />
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 15 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="mt-6 text-neutral-600 max-w-md text-sm sm:text-base"
                    >
                        From concept to completion, we craft timeless interiors with purpose,
                        warmth, and refined aesthetics.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                        className="mt-8 flex flex-col sm:flex-row gap-4"
                    >
                        <button
                            onClick={() => navigate("/contact")}
                            className="px-6 py-3 bg-gray-600 text-white rounded-2xl
                         hover:scale-105 transition cursor-pointer
                         ring-2 ring-gray-600 ring-offset-2 text-sm sm:text-base"
                        >
                            Book Consultation
                        </button>

                        <button
                            onClick={() => navigate("/projects")}
                            className="px-6 py-3 rounded-2xl
                         hover:bg-gray-600 hover:text-white transition cursor-pointer
                         ring-2 ring-gray-600 ring-offset-2 text-sm sm:text-base"
                        >
                            View Projects
                        </button>
                    </motion.div>
                </motion.div>

                {/* IMAGE */}
                <motion.img
                    src={interior}
                    alt="Interior"
                    className="rounded-xl shadow-xl w-full
                     h-64 sm:h-80 md:h-96 object-cover"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                />
            </div>
        </section>
    );
}
