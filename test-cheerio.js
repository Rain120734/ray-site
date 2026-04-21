const cheerio = require('cheerio');
const fs = require('fs');
const html = fs.readFileSync('pixnet.html', 'utf-8');
const $ = cheerio.load(html);
const results = [];
$('.article').each((i, el) => {
    const titleEl = $(el).find('li.title h2 a');
    const href = titleEl.attr('href');
    const title = titleEl.text().trim();
    
    const publishEl = $(el).find('li.publish');
    const year = publishEl.find('.year').text().trim();
    const month = publishEl.find('.month').text().trim();
    const date = publishEl.find('.date').text().trim();
    const pubDate = `${year}-${month}-${date}`;

    if(href && title) {
        results.push({ href, title, pubDate });
    }
});
console.log(JSON.stringify(results, null, 2));
