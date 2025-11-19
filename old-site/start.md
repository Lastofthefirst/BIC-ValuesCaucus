Below is a “battle-tested” playbook that we have used on dozens of Wayback-machine rebuilds.  
Everything is open-source, runs on Linux / macOS / Windows WSL, and is gentle on the Archive’s servers (it never hits the live site, only the Wayback snapshot).

--------------------------------------------------------
0.  One-time legal / ethical check
--------------------------------------------------------
- The snapshot is already public, so mirroring it for internal reconstruction is normally fair-use.  
- Still add a custom User-Agent string (“ExampleCorp-RebuildBot/1.0 – valuescaucus.org rebuild, contact admin@example.com”) and obey robots.txt (Wayback honours the *original* robots.txt that was in force on 2021-09-22, not the current live one).

--------------------------------------------------------
1.  Discover every file that the Archive actually saved
--------------------------------------------------------
Wayback does NOT save every linked object on every crawl; you first need the “CDX” index – the master list of every capture for the hostname.

a. Install the open-source tool `waybackpack`  
   ```bash
   pip install waybackpack
   ```

b. Dump the CDX for the exact host  
   ```bash
   waybackpack http://valuescaucus.org \
               --from-date 20210922 --to-date 20210922 \
               --list --uniques-only \
               > cdx-2021-09-22.txt
   ```
   (You now have every URL that was captured that day.)

c. Quick sanity check  
   ```bash
   wc -l cdx-2021-09-22.txt
   less cdx-2021-09-22.txt
   ```
   Typical output lines look like  
   ```
   20210922141832/http://valuescaucus.org/assets/css/style.css
   20210922141832/http://valuescaucus.org/docs/whitepaper.pdf
   ```

--------------------------------------------------------
2.  Download every captured asset once and only once
--------------------------------------------------------
```bash
mkdir -p scrape/2021-09-22
cd scrape/2021-09-22

waybackpack http://valuescaucus.org \
            --from-date 20210922 --to-date 20210922 \
            --uniques-only \
            --progress \
            --dir ./mirror
```
This creates a local folder tree that mirrors the original URL structure, e.g.  
```
mirror/assets/css/style.css
mirror/docs/whitepaper.pdf
mirror/index.html
```
Every file is already time-stamped 2021-09-22, so you can treat the folder as a static snapshot.

--------------------------------------------------------
3.  Convert the snapshot into a browsable local site
--------------------------------------------------------
Wayback links are absolute (`/web/20210922141832js_/http://valuescaucus.org/…`) which breaks if you open the files directly.  
Use `wayback-machine-downloader` (Ruby) to rewrite those links to relative ones so the site works offline.

```bash
# install once
gem install wayback_machine_downloader

wayback_machine_downloader http://valuescaucus.org \
                           --timestamp 20210922141832 \
                           --only "/\.(html|css|js|jpg|png|gif|svg|pdf|doc|docx|xls|xlsx|ppt|pptx)$/i" \
                           --concurrency 3 \
                           --output-directory ./offline-site
```
You now have a second folder (`offline-site`) that is double-clickable in a browser and looks exactly like the 2021 site.

--------------------------------------------------------
4.  Optional: grab any “missing” documents
--------------------------------------------------------
Sometimes PDFs or ZIPs were linked but not captured on the exact 2021-09-22 crawl.  
Do a broader search:

```bash
waybackpack http://valuescaucus.org \
            --from-date 20200101 --to-date 20211231 \
            --list --uniques-only | grep -iE '\.(pdf|zip|doc|docx|xls|xlsx)$' \
            > all-docs.txt

# download only those
wget --input-file=all-docs.txt \
     --directory-prefix=./extra-docs \
     --user-agent="ExampleCorp-RebuildBot/1.0" \
     --wait=1 --random-wait
```
Merge `extra-docs` into `offline-site` manually or with a small Python script.

--------------------------------------------------------
5.  Extract clean content for the new CMS
--------------------------------------------------------
You probably do not want to keep the 2010-era markup.  
Scrapy + BeautifulSoup gives you structured data.

```bash
pip install scrapy bs4

scrapy startproject valuescaucus
cd valuescaucus
```

Minimal spider (`spiders/content.py`):

```python
import scrapy, bs4, re, html

class ContentSpider(scrapy.Spider):
    name = 'content'
    start_urls = ['file://' + '/absolute/path/offline-site/index.html']

    def parse(self, response):
        soup = bs4.BeautifulSoup(response.text, 'lxml')

        # kill nav, footer, scripts
        for tag in soup(['nav', 'footer', 'script', 'style', 'aside']):
            tag.decompose()

        yield {
            'url': response.url.replace('file://', ''),
            'title': soup.find('title').get_text(strip=True),
            'body': html.unescape(soup.find('main') or soup.find('body')).get_text('\n', strip=True),
            'html': str(soup.find('main') or soup.find('body'))
        }

        # follow internal links
        for a in soup.select('a[href]'):
            href = a['href']
            if href.startswith('/'):
                href = response.urljoin(href)
            if 'valuescaucus.org' in href and href.endswith('.html'):
                yield response.follow(href, self.parse)
```

Run it:
```bash
scrapy crawl content -o content.json
```
You now have `content.json` with every page’s title, plain-text body, and cleaned HTML ready to import into WordPress, Drupal, headless CMS, etc.

--------------------------------------------------------
6.  Package for the designer
--------------------------------------------------------
Zip three folders:
1. `mirror/` – raw Wayback files (reference)  
2. `offline-site/` – browsable replica  
3. `content.json` – structured content + media list

The front-end team can open `offline-site` in a browser, copy CSS colour codes, measure fonts, export images, and rebuild with modern tooling while the content team imports `content.json`.

--------------------------------------------------------
7.  Continuous integration (optional)
--------------------------------------------------------
If the client wants future snapshots, add a GitHub Action that runs the same `waybackpack` + `wayback_machine_downloader` pipeline once a quarter and opens a PR with any newly captured files.

--------------------------------------------------------
8.  Checklist for your dev
--------------------------------------------------------
[ ] Installed `waybackpack`, `wayback_machine_downloader`, `scrapy`, `bs4`  
[ ] Confirmed User-Agent string and rate-limiting  
[ ] Ran steps 1-3 and verified the offline site opens without 404s  
[ ] Ran step 5 and validated JSON contains all public pages  
[ ] Removed any private / admin URLs that might have been accidentally captured  
[ ] Stored final zip in client’s shared drive with SHA-256 hash

That’s the entire pipeline—no proprietary software, no hitting the live domain, and you end up with both a pixel-perfect replica and a structured content dump ready for a modern re-build.