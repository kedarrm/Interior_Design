import { motion } from "framer-motion";

const services = [
  {
    title: "Residential Design",
    desc: "Personalized interiors that reflect your lifestyle and taste."
  },
  {
    title: "Commercial Spaces",
    desc: "Functional and branded environments for businesses."
  },
  {
    title: "Custom Furniture",
    desc: "Tailored furniture crafted for elegance and comfort."
  }
];

export default function ServicesSection() {
  return (
    <section className="sm:py-8 py-14 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl mb-8 text-center font-bold text-gray-700"
        >
          What We Do?
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -10 }}
              className="p-8 bg-[#f7f5f2] rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-lg font-medium mb-3">{s.title}</h3>
              <p className="text-sm text-neutral-600">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
