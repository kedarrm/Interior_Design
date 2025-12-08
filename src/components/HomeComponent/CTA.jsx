import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CTA() {

  const navigate = useNavigate()

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative py-18 bg-[#f3ebe0] text-black text-center overflow-hidden"
    >
      {/* Content Wrapper */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
        className="relative z-10 max-w-3xl mx-auto px-6"
      >
        {/* Heading */}
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-4xl font-bold leading-snug text-gray-600"
        >
          Let’s Build a Space You’ll Love Living In
        </motion.h2>

        {/* Sub text */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mt-6 text-neutral-700 leading-relaxed"
        >
          Thoughtfully designed interiors tailored to your lifestyle, from
          consultation to final execution, handled with precision and care.
        </motion.p>

        {/* Trust signals */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-neutral-600"
        >
          <span>✓ End-to-end design</span>
          <span>✓ Transparent pricing</span>
          <span>✓ Quality-driven execution</span>
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          className="mt-14 flex flex-col sm:flex-row justify-center gap-6"
        >
          {/* Primary Button */}
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="px-10 py-4 bg-gray-600 text-white rounded-2xl font-medium flex items-center justify-center gap-2 cursor-pointer ring-2 ring-gray-600 ring-offset-2 transition"
          >
            Schedule a Call
            <motion.span
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              →
            </motion.span>
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#4a5565",
              color: "#fff",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/projects")}
            className="px-10 py-4 ring-2 ring-gray-600 ring-offset-2 border-gray-600 rounded-2xl font-medium transition cursor-pointer"
          >
            View Our Work
          </motion.button>
        </motion.div>

        {/* Footer note */}
        <motion.p
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 0.8 },
          }}
          className="mt-10 text-xs text-neutral-700"
        >
          No obligation consultation · Designed around your budget
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
