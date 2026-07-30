import { useState } from "react";
import {
  Link,
  NavLink,
} from "react-router-dom";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import {
  Menu,
  X,
} from "lucide-react";

import { useScrolled } from "@/hooks/useScrollSpy";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { Button } from "./Button";

const links = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Gallery",
    to: "/gallery",
  },
  {
    label: "Rangoli",
    to: "/rangoli",
  },
  {
    label: "Mehndi",
    to: "/mehndi",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(16);

  useLockBodyScroll(open);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/85 shadow-soft backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="text-gradient-gold font-signature text-lg tracking-wide md:text-xl"
        >
          Prasanna&nbsp;Rani
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `relative font-body text-sm uppercase tracking-[0.12em] transition-colors ${
                    isActive
                      ? "text-gold"
                      : "text-ink hover:text-gold"
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="relative pb-1">
                    {link.label}

                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-0.5 left-0 right-0 h-px bg-gold"
                      />
                    )}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button
            to="/contact"
            variant="outline"
            className="!px-6 !py-2.5 text-xs"
          >
            Get in Touch
          </Button>
        </div>

        <button
          type="button"
          aria-label={
            open
              ? "Close menu"
              : "Open menu"
          }
          aria-expanded={open}
          onClick={() =>
            setOpen(
              (current) => !current
            )
          }
          className="text-ink md:hidden"
        >
          {open ? (
            <X size={26} />
          ) : (
            <Menu size={26} />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
            className="overflow-hidden bg-ivory/95 backdrop-blur-md md:hidden"
          >
            <ul className="container-px mx-auto flex flex-col gap-1 pb-6 pt-2">
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    onClick={() =>
                      setOpen(false)
                    }
                    className={({
                      isActive,
                    }) =>
                      `block rounded-xl px-4 py-3 font-display text-lg ${
                        isActive
                          ? "bg-cream text-gold"
                          : "text-ink"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}