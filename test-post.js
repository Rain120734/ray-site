const cheerio = require('cheerio');
fetch('https://mars32760ray.pixnet.net/blog/posts/886574581572317526', {headers:{'User-Agent':'Mozilla/5.0'}})
  .then(r=>r.text())
  .then(html=>{
    const $ = cheerio.load(html);
    let content = $('.article-content-inner').html(); 
    console.log("Found content length: " + (content ? content.length : 0));
    console.log(content ? content.substring(0, 300) : "No content found");
  });
