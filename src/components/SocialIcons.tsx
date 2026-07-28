import { FaYoutube, FaEnvelope, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: FaEnvelope, href: "mailto:segabandiprasannarani7@gmail.com", label: "Email" },
  { icon: FaYoutube, href: "https://www.youtube.com/@Prasukrish3", label: "YouTube" },
  { icon: FaInstagram, href: "#", label: "Instagram (coming soon)" },
];

export default function SocialIcons() {
  return (
    <ul className="flex gap-3">
      {socials.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label={s.label}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-gold hover:bg-gold hover:text-ivory"
          >
            <s.icon size={17} />
          </a>
        </li>
      ))}
    </ul>
  );
}
