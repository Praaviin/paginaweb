import { getCollection } from "astro:content";

export async function getPageEntry(slug: string) {
  const pages = await getCollection("pages");
  const page = pages.find((entry) => entry.slug === slug);

  if (!page) {
    throw new Error(`Missing page content for slug: ${slug}`);
  }

  return page;
}
