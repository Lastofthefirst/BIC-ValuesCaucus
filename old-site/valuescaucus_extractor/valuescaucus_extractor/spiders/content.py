import scrapy
import bs4
import html
import os

class ContentSpider(scrapy.Spider):
    name = 'content'
    
    def __init__(self):
        # Get the absolute path to the offline site
        offline_site_path = '/home/quddus/ridvan/BIC/old-site/scrape/2021-09-22/offline-site'
        self.start_urls = [f'file://{offline_site_path}/index.html']

    def parse(self, response):
        if response.url.endswith('.html'):
            # Parse HTML with BeautifulSoup
            soup = bs4.BeautifulSoup(response.text, 'lxml')

            # Remove navigation, footer, scripts, and other non-content elements
            for tag in soup(['nav', 'footer', 'script', 'style', 'aside', 'header', 'menu']):
                tag.decompose()

            # Extract the main content - look for main tag first, then body
            main_content = soup.find('main') or soup.find('div', class_='content') or soup.find('div', id='content') or soup.find('body')
            
            # Extract title
            title_tag = soup.find('title')
            title = title_tag.get_text(strip=True) if title_tag else 'No Title'
            
            # Get cleaned text and HTML
            body_text = ''
            body_html = ''
            
            if main_content:
                body_text = html.unescape(main_content).get_text('\n', strip=True)
                body_html = str(main_content)
            
            # Create clean URL by removing file:// prefix and path to offline site
            base_path = '/home/quddus/ridvan/BIC/old-site/scrape/2021-09-22/offline-site'
            clean_url = response.url.replace('file://', '').replace(base_path, '').replace('//', '/')
            if clean_url.startswith('/'):
                clean_url = clean_url[1:]  # Remove leading slash
            if not clean_url:
                clean_url = 'index.html'
            
            yield {
                'url': clean_url,
                'title': title,
                'body': body_text,
                'html': body_html
            }

            # Follow internal links within the site - but Scrapy doesn't work well with file:// URLs for following
            # Instead, let's just process the files we know exist
            # For now, we'll skip the link following in this implementation since file:// URL following is problematic