import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function ContactPageComp() {
  return (
    <main className="bg-[#faf9f7] text-black min-h-screen">

      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-20">

        <aside className="lg:sticky lg:top-28 h-fit">

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-600"          >
            Get in Touch
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-2 max-w-md text-neutral-700 font-medium"
          >
            Share your vision with us whether it’s a complete transformation
            or a thoughtful refresh. We help you move forward with clarity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.25 }}
            className="mt-4 flex items-center gap-2 text-sm font-medium text-neutral-800"
          >
            <Clock size={14} />
            Currently accepting new projects
          </motion.div>

          <div className="mt-14 space-y-8">
            {[
              { icon: Mail, title: "Email", value: "studio@interior.com" },
              { icon: Phone, title: "Phone", value: "+91 99999 00000" },
              { icon: MapPin, title: "Studio", value: "Hyderabad, India" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-neutral-600 ring-2 ring-offset-2 ring-neutral-300 bg-neutral-200">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="text-sm text-neutral-600">{item.value}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </aside>

        {/* RIGHT – FORM */}
        <section className="bg-white rounded-3xl p-10 shadow-sm">

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-gray-600 mb-2"
          >
            Start a Conversation
          </motion.h2>

          <p className="text-sm text-neutral-400 mb-4 font-medium">
            Tell us about your space, timeline, and expectations.
          </p>

          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-3 py-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-offset focus:ring-2 focus:ring-black/30"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-3 py-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-offset focus:ring-2 focus:ring-black/30"
            />

            <textarea
              rows="5"
              placeholder="Tell us about your project"
              className="w-full px-3 py-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-offset focus:ring-2 focus:ring-black/30"
            />

            <div className="pt-4 space-y-2 text-sm text-neutral-600">
              {[
                "We review your message within 24 hours",
                "Schedule a consultation call",
                "Share a tailored design approach",
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle size={14} />
                  {step}
                </div>
              ))}
            </div>

            <motion.button
              // whileHover={{
              //   scale: 1.04,
              //   boxShadow: "0px 12px 30px rgba(0,0,0,0.15)",
              // }}
              // whileTap={{ scale: 0.95 }}
              className="w-full mt-6 py-4 hover:bg-gray-500 hover:text-white rounded-2xl font-medium inline-flex items-center justify-center gap-3 ring-2 ring-offset-2 ring-gray-500 cursor-pointer"
            >
              Send Message
              <ArrowRight size={16} />
            </motion.button>
          </motion.form>

          <p className="mt-8 text-xs text-neutral-600 text-center">
            No obligation · Transparent process · Clear timelines
          </p>
        </section>
      </div>

      <section className="py-14 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-6"
        >
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-600">Visit Our Studio</h2>
            <p className="mt-4 text-sm text-neutral-600 font-semibold">
              Hyderabad, Telangana  visits by appointment only
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border shadow-sm">
            <iframe
              title="Interior Studio Hyderabad"
              loading="lazy"
              className="w-full h-[420px]"
              src="https://maps.google.com/maps?q=Hyderabad%20Telangana&t=&z=13&ie=UTF8&iwloc=&output=embed"
            />
          </div>

          <p className="mt-6 text-center text-sm text-neutral-600 font-medium">
            📍 Hyderabad, Telangana, India
          </p>
        </motion.div>
      </section>

    </main>
  );
}
