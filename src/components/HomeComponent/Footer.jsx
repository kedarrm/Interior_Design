import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#faf9f7]"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12 text-sm text-neutral-600">

        {/* Brand */}
        <div>
          <h3 className="text-base font-medium text-black mb-4">
            Vision Plan Design Studio
          </h3>
          <p className="leading-relaxed">
            Thoughtfully crafted interiors that balance aesthetics,
            comfort, and functionality.
          </p>
        </div>

        <div>
          <h4 className="text-black font-medium mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["Home", "Services", "Projects", "Process", "Contact"].map(
              (link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 4 }}
                    className="inline-block transition"
                  >
                    {link}
                  </motion.a>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h4 className="text-black font-medium mb-4">Services</h4>
          <ul className="space-y-2">
            {[
              "Residential Interiors",
              "Commercial Spaces",
              "Custom Furniture",
              "Design Consultation",
            ].map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-black font-medium mb-4">Contact</h4>
          <ul className="space-y-2">
            <li>📍 Hyderabad, India</li>
            <li>
              📞{" "}
              <a href="tel:+919999999999" className="hover:underline">
                +91 99999 99999
              </a>
            </li>
            <li>
              ✉️{" "}
              <a href="mailto:hello@interiorstudio.com" className="hover:underline">
                hello@interiorstudio.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t text-center py-6 text-xs text-neutral-500">
        © {new Date().getFullYear()} Interior Studio · Designed with care
      </div>
    </motion.footer>
  );
}
