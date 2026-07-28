import { useEffect } from "react";
import { setPageSeo } from "@/utils/seo";

/** Drop at the top of any page component to set its title + meta description. */
export function useSeo(title: string, description: string) {
  useEffect(() => {
    setPageSeo({ title: `${title} | Prasanna Rani`, description });
  }, [title, description]);
}
