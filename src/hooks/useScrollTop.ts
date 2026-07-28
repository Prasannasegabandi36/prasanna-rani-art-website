import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scrolls the window to the top whenever the route changes. */
export function useScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
}
