import { motion } from "framer-motion";
import living from "../../assets/living.png";
import bedroom from "../../assets/bed.png";
import workspace from "../../assets/work.png";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";


const spaces = [
    {
        title: "Modern Living Room",
        tag: "Residential",
        image: living,
    },
    {
        title: "Minimal Bedroom",
        tag: "Private Space",
        image: bedroom,
    },
    {
        title: "Contemporary Workspace",
        tag: "Commercial",
        image: workspace,
    },
];

export default function FeaturedSpaces() {

    const navigate = useNavigate();

    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 max-w-xl text-center mx-auto"
                >
                    <h2 className="text-3xl font-bold text-gray-600 leading-snug">
                        Spaces We’ve Thoughtfully Designed
                    </h2>
                    <p className="mt-4 text-neutral-600">
                        A glimpse of interiors crafted with balance, warmth, and intention.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-10">
                    {spaces.map((space, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15 }}
                            whileHover={{ y: -10 }}
                            className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition border-2 border-slate-300"
                        >
                            <div className="relative h-80 overflow-hidden mask-b-from-70%">
                                <motion.img
                                    src={space.image}
                                    alt={space.title}
                                    className="h-full w-full object-cover"
                                    whileHover={{ scale: 1.08 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                />


                            </div>

                            <motion.div
                                variants={{
                                    hidden: { y: 30, opacity: 0 },
                                    visible: { y: 0, opacity: 1 },
                                }}
                                initial="hidden"
                                animate="hidden"
                                whileHover="visible"
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="absolute bottom-0 left-0 right-0 p-6 text-gray-800"
                            >
                                <span className="inline-block text-xs bg-amber-200 rounded-full px-4 py-1">
                                    {space.tag}
                                </span>

                                <h3 className="text-2xl font-medium mt-2">
                                    {space.title}
                                </h3>


                                <ArrowRight size={20} className="absolute right-10 top-15 font-extrabold cursor-pointer text-yellow-400" />

                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 text-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate("/projects")}
                        className="px-8 py-3 rounded-2xl hover:bg-gray-600 hover:text-white transition cursor-pointer ring-2 ring-gray-600 ring-offset-2"
                    >
                        View All Projects
                    </motion.button>
                </motion.div>

            </div>
        </section>
    );
}