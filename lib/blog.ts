import * as cheerio from 'cheerio';

export interface BlogPost {
  id: string;
  href: string;
  title: string;
  pubDate: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = [];
  try {
    const res = await fetch('https://mars32760ray.pixnet.net/blog', {
      headers: { 'User-Agent': 'Mozilla/5.0' },
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) return [];

    const html = await res.text();
    const $ = cheerio.load(html);
    
    $('.article').each((_, el) => {
      const titleEl = $(el).find('li.title h2 a');
      const href = titleEl.attr('href');
      const title = titleEl.text().trim();
      
      const publishEl = $(el).find('li.publish');
      const year = publishEl.find('.year').text().trim();
      const month = publishEl.find('.month').text().trim();
      const date = publishEl.find('.date').text().trim();
      
      if (href && title) {
         // Extract ID from URL (e.g. /blog/posts/12345)
         const hrefParts = href.split('/posts/');
         const id = hrefParts.length > 1 ? hrefParts[1].split(/[?#]/)[0] : '';
         if (!id) return;
         
         const monthMap: Record<string, string> = {
            'Jan':'01', 'Feb':'02', 'Mar':'03', 'Apr':'04', 'May':'05', 'Jun':'06',
            'Jul':'07', 'Aug':'08', 'Sep':'09', 'Oct':'10', 'Nov':'11', 'Dec':'12'
         };
         const numMonth = monthMap[month] || month;

         posts.push({ 
           id,
           href, 
           title, 
           pubDate: year && month && date ? `${year}-${numMonth}-${date.padStart(2, '0')}` : 'Recent Post'
         });
      }
    });
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
  }
  return posts;
}

export async function getBlogPostContent(id: string): Promise<string | null> {
  try {
    const res = await fetch(`https://mars32760ray.pixnet.net/blog/post/${id}`, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
      next: { revalidate: 3600 }
    });
    
    const secondTry = !res.ok ? await fetch(`https://mars32760ray.pixnet.net/blog/posts/${id}`, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
      next: { revalidate: 3600 }
    }) : res;

    if (!secondTry.ok) return null;

    const html = await secondTry.text();
    const $ = cheerio.load(html);
    
    const contentArea = $('.article-content-inner');
    
    // Clean up inline styles that force black text or white backgrounds from WYSIWYG
    contentArea.find('*[style]').each((_, el) => {
      $(el).css('color', '');
      $(el).css('background-color', '');
      $(el).css('background', '');
      $(el).css('font-family', '');
      $(el).css('font-size', '');
      $(el).css('line-height', '');
      
      const styleAttr = $(el).attr('style');
      if (styleAttr && styleAttr.trim() === '') {
        $(el).removeAttr('style');
      }
    });

    const contentHtml = contentArea.html();
    return contentHtml || null;
  } catch (error) {
    console.error(`Failed to fetch blog post ${id}:`, error);
    return null;
  }
}
