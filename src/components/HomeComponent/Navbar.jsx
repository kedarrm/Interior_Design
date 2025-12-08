import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  Menu,
  X,
  Home,
  Layers,
  Workflow,
  Image,
  Mail,
} from "lucide-react";

const links = [
  { name: "Home", path: "/", icon: Home },
  { name: "Services", path: "/services", icon: Layers },
  { name: "Process", path: "/process", icon: Workflow },
  { name: "Projects", path: "/projects", icon: Image },
  { name: "Contact", path: "/contact", icon: Mail },
];

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 backdrop-blur bg-white/70 border-b border-white/40"
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">

        <Link to="/" className="font-semibold text-lg">
          VP Design Studio
        </Link>

        <ul className="hidden md:flex items-center gap-8 relative">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            const Icon = link.icon;

            return (
              <li
                key={link.name}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative"
              >
                <Link
                  to={link.path}
                  className="flex items-center gap-2 text-sm text-neutral-700 px-1 pb-2"
                >
                  <Icon size={14} className="opacity-60" />
                  {link.name}
                </Link>

                {(hoveredLink === link.name || isActive) && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute left-0 bottom-0 w-full h-[1.5px] bg-black"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <button
          className="md:hidden text-neutral-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/90 backdrop-blur px-6 pb-6 shadow-lg"
          >
            <ul className="flex flex-col gap-3 mt-4">
              {links.map((link) => {
                const isActiveMobile = location.pathname === link.path;
                const Icon = link.icon;

                return (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center gap-3 py-2 rounded-lg px-3 ${isActiveMobile
                          ? "bg-black/15 text-black font-medium"
                          : "text-neutral-700"
                        }`}
                    >
                      <Icon size={16} />
                      {link.name}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
