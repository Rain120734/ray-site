import { redirect } from "next/navigation";
import { getBlogPosts } from "@/lib/blog";

export const revalidate = 3600;

export default async function BlogIndex() {
  const posts = await getBlogPosts();
  
  if (posts && posts.length > 0) {
    redirect(`/blog/${posts[0].id}`);
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[50vh] p-8 border border-white/5 rounded-xl bg-gray-900/50 text-center text-gray-400">
      <p>No posts could be loaded at this time. Check back later!</p>
      <a href="https://mars32760ray.pixnet.net/blog" target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300 mt-4 inline-block font-medium">
        Visit the Pixnet Blog Directly →
      </a>
    </div>
  );
}
