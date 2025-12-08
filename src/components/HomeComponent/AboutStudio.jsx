import { motion } from "framer-motion";
import side from "../../assets/side.png";

export default function AboutStudio() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          className="order-1 md:order-2"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="inline-block mb-4 text-xs uppercase tracking-widest
                       text-neutral-500 border px-3 py-1 rounded-full"
          >
            Our Philosophy
          </motion.span>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-3xl sm:text-4xl font-normal leading-snug text-gray-600"
          >
            Design Rooted in <br />
            <span className="font-medium">Comfort, Nature & Elegance</span>
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-2 text-neutral-600 max-w-lg text-sm sm:text-base"
          >
            Every space we design is driven by balance — between aesthetics and
            functionality, nature and modern living. Our interiors feel warm,
            intentional, and timeless.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            className="mt-8 flex gap-10"
          >
            <div>
              <p className="text-3xl font-medium">10+</p>
              <p className="text-sm text-neutral-500">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-medium">120+</p>
              <p className="text-sm text-neutral-500">Projects Completed</p>
            </div>
          </motion.div>

          <motion.button
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            whileHover={{ scale: 1.05 }}
            className="mt-10 px-6 py-2 rounded-2xl
                       hover:bg-gray-600 hover:text-white transition
                       cursor-pointer ring-2 ring-gray-600 ring-offset-2"
          >
            Learn More
          </motion.button>
        </motion.div>

        <motion.img
          src={side}
          alt="Interior lounge design"
          className="order-2 md:order-1 rounded-2xl shadow-xl
                     object-cover h-64 sm:h-80 md:h-96 w-full"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

      </div>
    </section>
  );
}
