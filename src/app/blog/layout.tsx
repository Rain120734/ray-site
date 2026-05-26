import { getBlogPosts } from "@/lib/blog";
import BlogSidebar from "@/components/BlogSidebar";

export default async function BlogLayout({ children }: { children: React.ReactNode }) {
  const posts = await getBlogPosts();
  
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-24">
      {/* Page Header omitted to keep layout clean, assuming handled naturally */}
      <div className="flex flex-col lg:flex-row lg:gap-12 xl:gap-16 relative">
        {/* Sidebar List */}
        <BlogSidebar posts={posts} />
        
        {/* Main Reading Area */}
        <div className="flex-1 min-w-0 mt-8 lg:mt-0">
          {children}
        </div>
      </div>
    </main>
  );
}
