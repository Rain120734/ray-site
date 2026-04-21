import * as cheerio from 'cheerio';
import Card from "@/components/Card";

export const revalidate = 3600;

export default async function Blog() {
  let posts: Array<{href: string, title: string, pubDate: string}> = [];
  
  try {
    const res = await fetch('https://mars32760ray.pixnet.net/blog', {
      headers: { 'User-Agent': 'Mozilla/5.0' },
      next: { revalidate: 3600 }
    });
    
    if (res.ok) {
      const html = await res.text();
      const $ = cheerio.load(html);
      
      $('.article').each((i, el) => {
        const titleEl = $(el).find('li.title h2 a');
        const href = titleEl.attr('href');
        const title = titleEl.text().trim();
        
        const publishEl = $(el).find('li.publish');
        const year = publishEl.find('.year').text().trim();
        const month = publishEl.find('.month').text().trim();
        const date = publishEl.find('.date').text().trim();
        
        if (href && title) {
           posts.push({ 
             href, 
             title, 
             pubDate: year && month && date ? `${year} ${month} ${date}` : 'Recent Post'
           });
        }
      });
    }
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Blog</h1>
        <p className="text-xl text-gray-400 mt-4">Thoughts, reflections & technical articles.</p>
      </div>
      
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <Card
              key={i}
              icon="📰"
              title={post.title}
              description={post.pubDate}
              href={post.href}
            />
          ))}
        </div>
      ) : (
        <div className="text-gray-400 p-8 border border-white/5 rounded-xl bg-gray-900 text-center">
          <p>No posts could be loaded at this time. Check back later!</p>
          <a href="https://mars32760ray.pixnet.net/blog" target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300 mt-4 inline-block">
            Visit the Pixnet Blog Directly →
          </a>
        </div>
      )}
    </main>
  );
}
