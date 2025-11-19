#!/usr/bin/env python3
"""
Script to extract clean content from all HTML files in the offline site.
This is a simpler approach than using Scrapy with file:// URLs.
"""

import os
import json
from pathlib import Path
import bs4
import html

def extract_content_from_html(file_path, base_path):
    """Extract clean content from a single HTML file."""
    with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    soup = bs4.BeautifulSoup(content, 'lxml')
    
    # Remove navigation, footer, scripts, and other non-content elements
    for tag in soup(['nav', 'footer', 'script', 'style', 'aside', 'header', 'menu']):
        tag.decompose()
    
    # Extract the main content - look for main tag first, then body
    main_content = soup.find('main') or soup.find('div', class_='content') or soup.find('div', id='content') or soup.find('body')
    
    # Extract title
    title_tag = soup.find('title')
    title = title_tag.get_text(strip=True) if title_tag else os.path.basename(file_path)
    
    # Get cleaned text and HTML
    body_text = ''
    body_html = ''
    
    if main_content:
        body_text = html.unescape(str(main_content)).replace('\n', ' ').replace('\r', ' ').strip()
        # Create a new BeautifulSoup object to get text properly
        temp_soup = bs4.BeautifulSoup(str(main_content), 'lxml')
        body_text = temp_soup.get_text('\n', strip=True)
        body_html = str(main_content)
    
    # Get relative URL by removing the base path
    relative_path = str(file_path.relative_to(base_path))
    
    return {
        'url': relative_path,
        'title': title,
        'body': body_text,
        'html': body_html
    }

def process_all_html_files():
    """Process all HTML files in the offline site."""
    base_path = Path('/home/quddus/ridvan/BIC/old-site/scrape/2021-09-22/offline-site')
    html_files = list(base_path.rglob('*.html'))
    
    results = []
    for html_file in html_files:
        try:
            result = extract_content_from_html(html_file, base_path)
            results.append(result)
            print(f"Processed: {result['url']}")
        except Exception as e:
            print(f"Error processing {html_file}: {e}")
    
    # Write results to JSON file
    with open('/home/quddus/ridvan/BIC/old-site/content.json', 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    
    print(f"Extraction complete. Processed {len(results)} files.")

if __name__ == "__main__":
    process_all_html_files()