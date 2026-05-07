import { tractors } from "@/data/tractors";

export default function sitemap() {
  const baseUrl = "https://www.shivautomobiles.in";

  const tractorUrls = tractors.map((tractor) => ({
    url: `${baseUrl}/tractors/${tractor.slug}`,
    lastModified: new Date(),
  }));

  const routes = ["", "/about", "/tractors", "/services", "/gallery", "/contact"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    })
  );

  return [...routes, ...tractorUrls];
}
