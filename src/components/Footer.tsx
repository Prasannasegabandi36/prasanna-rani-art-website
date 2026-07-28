import { Link } from "react-router-dom";
import { FaYoutube, FaEnvelope } from "react-icons/fa";
import { MapPin } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Mediums", to: "/mediums" },
  { label: "Inspiration", to: "/inspiration" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-ivory">
      <div className="container-px relative mx-auto grid max-w-7xl gap-12 py-16 md:grid-cols-3">
        <div>
          <Link to="/" className="font-signature text-xl text-gold-light">
            Prasanna&nbsp;Rani
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/70">
            Pencil sketches, paintings, and devotional art inspired by nature, Indian culture, and
            everyday life — created from Kolakaluru, Andhra Pradesh.
          </p>
        </div>

        <div>
          <h3 className="font-body text-xs uppercase tracking-[0.3em] text-gold-light">Navigate</h3>
          <ul className="mt-5 space-y-3">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-ivory/70 transition-colors hover:text-gold-light">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-body text-xs uppercase tracking-[0.3em] text-gold-light">Connect</h3>
          <ul className="mt-5 space-y-3 text-sm text-ivory/70">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold-light" />
              Kolakaluru, Guntur District, Andhra Pradesh, India
            </li>
            <li>
              <a
                href="mailto:segabandiprasannarani7@gmail.com"
                className="flex items-center gap-2 transition-colors hover:text-gold-light"
              >
                <FaEnvelope className="text-gold-light" />
                segabandiprasannarani7@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@Prasukrish3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-gold-light"
              >
                <FaYoutube className="text-gold-light" />
                @Prasukrish3
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10 py-6">
        <p className="container-px mx-auto max-w-7xl text-center text-xs tracking-wide text-ivory/50">
          © {new Date().getFullYear()} Segabandi Prasanna Rani. All artwork and images are original
          creations and may not be reproduced without permission.
        </p>
      </div>
    </footer>
  );
}
