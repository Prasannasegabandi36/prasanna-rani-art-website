interface SeoOptions {
  title: string;
  description: string;
}

/** Lightweight, dependency-free way to keep document title & meta description in sync per page. */
export function setPageSeo({ title, description }: SeoOptions) {
  document.title = title;

  const descTag = document.querySelector('meta[name="description"]');
  if (descTag) descTag.setAttribute("content", description);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute("content", description);
}
