import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface BaseProps {
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
}

interface ButtonAsLink extends BaseProps {
  to: string;
  onClick?: never;
  type?: never;
}

interface ButtonAsButton extends BaseProps {
  to?: never;
  onClick?: () => void;
  type?: "button" | "submit";
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variants: Record<string, string> = {
  solid:
    "bg-ink text-ivory hover:bg-ink/90 shadow-soft border border-ink",
  outline:
    "bg-transparent text-ink border border-ink/40 hover:border-gold hover:text-gold",
  ghost: "bg-white/60 text-ink border border-white/80 hover:bg-white",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-body text-sm tracking-[0.15em] uppercase transition-colors duration-300";

export const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  ({ children, variant = "solid", className = "", to, onClick, type = "button" }, ref) => {
    const classes = `${base} ${variants[variant]} ${className}`;

    if (to) {
      return (
        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="inline-block">
          <Link ref={ref as React.Ref<HTMLAnchorElement>} to={to} className={classes}>
            {children}
          </Link>
        </motion.div>
      );
    }

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        type={type}
        onClick={onClick}
        className={classes}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";
