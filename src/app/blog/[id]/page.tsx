import { getBlogPostContent, getBlogPosts } from "@/lib/blog";
import { notFound } from "next/navigation";

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  // Await the entire params object before destructuring its properties.
  // NextJS requires awaiting params in recent versions for safety/asynchronous params.
  const resolvedParams = await params;
  const content = await getBlogPostContent(resolvedParams.id);
  const posts = await getBlogPosts();
  const currentPost = posts.find((p) => p.id === resolvedParams.id);
  
  if (!content) {
    return notFound();
  }

  // Check if we extracted content
  const displayContent = content.length > 50 ? content : "<p>無法解析文章內文，或文章已被設為私人。</p>";

  return (
    <article className="animate-in fade-in duration-500 w-full lg:max-w-3xl">
      {currentPost && (
         <div className="mb-8 lg:mb-12 pb-6 border-b border-gray-800">
           <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">{currentPost.title}</h1>
           <div className="flex items-center space-x-4">
               <span className="text-cyan-400 font-mono text-sm">{currentPost.pubDate}</span>
               <span className="text-gray-500 text-sm">Pixnet Article</span>
           </div>
         </div>
      )}
      
      {/* 
         We use Tailwind Typography plugin 'prose' combined with 'prose-invert' for dark mode.
         The marker rules override Pixnet's default inline styles to fit our aesthetic. 
      */}
      <div 
        className="
          prose prose-invert max-w-none 
          prose-img:rounded-xl prose-img:my-8 prose-img:shadow-lg prose-img:mx-auto
          prose-a:text-cyan-400 hover:prose-a:text-cyan-300
          prose-headings:text-white prose-headings:font-bold
          prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
          prose-strong:text-white
          prose-blockquote:border-l-cyan-500 prose-blockquote:bg-gray-800/50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
          marker:text-cyan-500
        "
        dangerouslySetInnerHTML={{ __html: displayContent }}
      />
      
      <div className="mt-16 pt-8 border-t border-gray-800 text-center flex flex-col items-center">
         <p className="text-gray-500 mb-4 text-sm">This is a mirrored copy. View the original post to see comments and interactions.</p>
         <a href={`https://mars32760ray.pixnet.net/blog/posts/${resolvedParams.id}`} target="_blank" rel="noreferrer" className="inline-flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors bg-gray-900 px-6 py-3 rounded-full border border-gray-800 hover:border-gray-600 shadow-md">
            <span>Read on Pixnet</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
         </a>
      </div>
    </article>
  );
}
