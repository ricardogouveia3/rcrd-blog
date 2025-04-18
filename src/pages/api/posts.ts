import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const posts = await getCollection("blog");
  
  const sortedPosts = posts
    .toSorted((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
    .map(post => ({
      slug: post.slug,
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      updatedDate: post.data.updatedDate ?? null,
      heroImage: post.data.heroImage ?? null,
      tags: post.data.tags ?? [],
    }));
  
  return new Response(JSON.stringify(sortedPosts), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
