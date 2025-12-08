import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Home, Users, Coffee, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
    {
        title: "Modern Living Room",
        location: "Hyderabad",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        size: "lg",
    },
    {
        title: "Minimalist Bedroom",
        location: "Bangalore",
        image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
        size: "md",
    },
    {
        title: "Luxury Dining Space",
        location: "Mumbai",
        image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab",
        size: "md",
    },
    {
        title: "Contemporary Workspace",
        location: "Pune",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
        size: "sm",
    },
    {
        title: "Warm Studio Apartment",
        location: "Chennai",
        image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab",
        size: "sm",
    },
    {
        title: "Elegant Kitchen",
        location: "Delhi",
        image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77",
        size: "md",
    },
    {
        title: "Serene Bedroom",
        location: "Kochi",
        image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1",
        size: "sm",
    },
    {
        title: "Luxury Bathroom",
        location: "Goa",
        image: "https://plus.unsplash.com/premium_photo-1661902468735-eabf780f8ff6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        size: "sm",
    },
    {
        title: "Modern Kitchen",
        location: "Indore",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
        size: "md",
    },
    {
        title: "Open Living Area",
        location: "Noida",
        image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
        size: "lg",
    },
    {
        title: "Home Office",
        location: "Ahmedabad",
        image: "https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        size: "sm",
    },
    {
        title: "Luxury Villa Lounge",
        location: "Udaipur",
        image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e",
        size: "sm",
    },
    {
        title: "Luxury Villa Lounge",
        location: "Udaipur",
        image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e",
        size: "md",
    },
    {
        title: "Calm Reading Nook",
        location: "Mysore",
        image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87",
        size: "sm",
    },
    {
        title: "Dining with View",
        location: "Dehradun",
        image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
        size: "sm",
    },
    {
        title: "Modern Kitchen",
        location: "Indore",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
        size: "md",
    },
];

export default function ProjectsPageComp() {

    const navigate = useNavigate()

    return (
        <main className="bg-[#faf9f7] text-black overflow-hidden">

            <section className="py-24 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-gray-600"
                >
                    Our Projects
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mt-4 max-w-2xl mx-auto text-neutral-700 font-semibold"
                >
                    A curated collection of thoughtfully designed interiors each project
                    reflecting balance, material honesty, and timeless comfort.
                </motion.p>
            </section>

            {/* BENTO GRID */}
            <section className="pb-32">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 auto-rows-[260px] gap-6">
                    {projects.map((project, i) => {
                        const size =
                            project.size === "lg"
                                ? "md:col-span-2 md:row-span-2"
                                : project.size === "md"
                                    ? "md:col-span-2"
                                    : "md:col-span-1";

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ y: -6 }}
                                className={`group relative overflow-hidden rounded-2xl ${size}`}
                            >
                                <motion.img
                                    src={`${project.image}?auto=format&fit=crop&w=900&q=80`}
                                    loading="lazy"
                                    initial={{ opacity: 0, filter: "blur(10px)" }}
                                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                    transition={{ duration: 0.7 }}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />

                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileHover={{ opacity: 1, y: 0 }}
                                    className="absolute bottom-0 p-6 text-white"
                                >
                                    <h3 className="text-lg font-medium flex items-center gap-2">
                                        {project.title}
                                        <ArrowUpRight size={16} />
                                    </h3>

                                    <div className="mt-1 flex items-center gap-2 text-sm text-white/80">
                                        <MapPin size={14} />
                                        {project.location}
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* DESIGN PHILOSOPHY */}
            <section className="py-20 bg-white overflow-hidden">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.12 } },
                    }}
                    className="max-w-5xl mx-auto px-6 text-center"
                >
                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="text-3xl font-bold text-gray-600"
                    >
                        Designed Around Real Living
                    </motion.h2>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 14 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="mt-4 max-w-2xl mx-auto text-neutral-700 font-medium text-sm leading-relaxed"
                    >
                        Our work is guided by how people move, pause, gather, and unwind within a
                        space. We design environments that feel intuitive supporting daily life
                        while quietly elevating it.
                    </motion.p>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 12 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="mt-4 max-w-3xl mx-auto text-neutral-600 text-sm leading-relaxed"
                    >
                        From the way sunlight enters a room to how furniture invites conversation,
                        every choice is intentional shaped by real habits, routines, and moments
                        that matter.
                    </motion.p>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                icon: Home,
                                title: "Everyday Comfort",
                                desc: "Spaces planned for ease, flow, and long-term comfort.",
                            },
                            {
                                icon: Users,
                                title: "Human-Centered Design",
                                desc: "Designed around how people interact, gather, and live.",
                            },
                            {
                                icon: Coffee,
                                title: "Quiet Details",
                                desc: "Subtle details that elevate daily routines without excess.",
                            },
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -6 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                    className="group rounded-xl p-6 shadow-xl cursor-default bg-[#faf6edf0]"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="mx-auto mb-4 w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 group-hover:text-black transition"
                                    >
                                        <Icon size={18} />
                                    </motion.div>

                                    <h4 className="text-sm font-semibold text-gray-700">
                                        {item.title}
                                    </h4>

                                    <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 0.7 },
                        }}
                        className="mt-11 flex items-center justify-center gap-2 text-sm text-neutral-500"
                    >
                        <span>See how this approach shapes our projects</span>
                        <ArrowRight size={14} />
                    </motion.div>
                </motion.div>
            </section>

            <section className="py-32 bg-[#faf9f7] text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-gray-600"
                >
                    Want Your Space Featured Here?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mt-4 max-w-2xl mx-auto text-neutral-700 font-semibold text-sm"
                >
                    Let’s collaborate to design a space that truly reflects your lifestyle
                    and vision.
                </motion.p>

                <motion.button
                    whileHover={{
                        scale: 1.08,
                        boxShadow: "0 12px 30px rgba(0,0,0,.15)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate("/Contact")}
                    className="mt-12 px-12 py-4 bg-gray-500 text-white rounded-2xl inline-flex items-center gap-3 ring-2 ring-offset-2 ring-gray-500 cursor-pointer"                >
                    Start Your Project
                    <ArrowUpRight size={16} />
                </motion.button>
            </section>

        </main>
    );
}
