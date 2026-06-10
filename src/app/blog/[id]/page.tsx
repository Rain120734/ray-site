import { getBlogPostContent, getBlogPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";

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

  // Find index to determine prev (older) and next (newer) posts
  const currentIndex = posts.findIndex((p) => p.id === resolvedParams.id);
  const prevPost = currentIndex !== -1 && currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? posts[currentIndex - 1] : null;

  // Check if we extracted content
  const displayContent = content.length > 50 ? content : "<p>無法解析文章內文，或文章已被設為私人。</p>";

  return (
    <>
      {/* Floating Left Arrow: Previous (Older) Post */}
      {prevPost && (
        <Link
          href={`/blog/${prevPost.id}`}
          className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 z-30 group items-center justify-center w-12 h-12 rounded-full bg-gray-900/80 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-950/20 text-gray-400 hover:text-cyan-400 shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300"
          title={`上一篇: ${prevPost.title}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </Link>
      )}

      {/* Floating Right Arrow: Next (Newer) Post */}
      {nextPost && (
        <Link
          href={`/blog/${nextPost.id}`}
          className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-30 group items-center justify-center w-12 h-12 rounded-full bg-gray-900/80 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-950/20 text-gray-400 hover:text-cyan-400 shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300"
          title={`下一篇: ${nextPost.title}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      )}

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
            prose-img:max-w-full prose-img:h-auto
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

        {/* Bottom Navigation Cards - RWD stack on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-16 pt-8 border-t border-gray-800">
          {prevPost ? (
            <Link 
              href={`/blog/${prevPost.id}`} 
              className="group p-5 bg-gray-900/50 hover:bg-cyan-950/10 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all text-left flex flex-col justify-between"
            >
              <span className="text-xs text-gray-500 font-mono mb-2 group-hover:text-cyan-400 transition-colors">
                ← PREVIOUS JOURNAL / 上一篇
              </span>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white line-clamp-2 transition-colors">
                {prevPost.title}
              </span>
            </Link>
          ) : (
            <div className="p-5 bg-gray-950/25 rounded-xl border border-transparent text-left opacity-30 select-none">
              <span className="text-xs text-gray-600 font-mono mb-2">← PREVIOUS JOURNAL / 上一篇</span>
              <span className="text-sm font-medium text-gray-600 line-clamp-2">No older posts / 無更舊文章</span>
            </div>
          )}

          {nextPost ? (
            <Link 
              href={`/blog/${nextPost.id}`} 
              className="group p-5 bg-gray-900/50 hover:bg-cyan-950/10 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all text-right flex flex-col justify-between"
            >
              <span className="text-xs text-gray-500 font-mono mb-2 group-hover:text-cyan-400 transition-colors">
                NEXT JOURNAL / 下一篇 →
              </span>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white line-clamp-2 transition-colors">
                {nextPost.title}
              </span>
            </Link>
          ) : (
            <div className="p-5 bg-gray-950/25 rounded-xl border border-transparent text-right opacity-30 select-none">
              <span className="text-xs text-gray-600 font-mono mb-2">NEXT JOURNAL / 下一篇 →</span>
              <span className="text-sm font-medium text-gray-600 line-clamp-2">No newer posts / 無最新文章</span>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
