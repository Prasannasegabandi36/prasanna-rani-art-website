import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa";
import { MapPin } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Rangoli", to: "/rangoli" },
  { label: "Mehndi", to: "/mehndi" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-ivory">
      <div className="container-px relative mx-auto grid max-w-7xl gap-12 py-16 md:grid-cols-3">
        <div>
          <Link
            to="/"
            className="font-signature text-xl text-gold-light"
          >
            Prasanna&nbsp;Rani
          </Link>

          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/70">
            Pencil sketches, paintings, devotional art,
            rangoli, and mehndi inspired by nature,
            Indian culture, and everyday life — created
            from Kolakaluru, Andhra Pradesh.
          </p>
        </div>

        <div>
          <h3 className="font-body text-xs uppercase tracking-[0.3em] text-gold-light">
            Navigate
          </h3>

          <ul className="mt-5 space-y-3">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-ivory/70 transition-colors hover:text-gold-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-body text-xs uppercase tracking-[0.3em] text-gold-light">
            Connect
          </h3>

          <ul className="mt-5 space-y-3 text-sm text-ivory/70">
            <li className="flex items-start gap-2">
              <MapPin
                size={16}
                className="mt-0.5 shrink-0 text-gold-light"
              />

              <span>
                Kolakaluru, Guntur District,
                Andhra Pradesh, India
              </span>
            </li>

            <li>
              <a
                href="mailto:segabandiprasannarani7@gmail.com"
                className="flex items-start gap-2 break-all transition-colors hover:text-gold-light"
              >
                <FaEnvelope className="mt-0.5 shrink-0 text-gold-light" />

                <span>
                  segabandiprasannarani7@gmail.com
                </span>
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/@Prasukrish3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-gold-light"
              >
                <FaYoutube className="shrink-0 text-gold-light" />

                <span>@Prasukrish3</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10 py-6">
        <p className="container-px mx-auto max-w-7xl text-center text-xs tracking-wide text-ivory/50">
          © {new Date().getFullYear()} Segabandi
          Prasanna Rani. All artwork and images are
          original creations and may not be reproduced
          without permission.
        </p>
      </div>
    </footer>
  );
}