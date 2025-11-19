#!/usr/bin/env python3
"""
Script to convert additional Wayback Machine downloaded files from the second batch 
to the browsable offline site with relative links and merge them with existing content.
"""

import os
import re
from pathlib import Path
import shutil

def clean_wayback_structure(input_dir, output_dir):
    """
    Convert the complex Wayback file structure to a simple one.
    Extract HTML content and fix relative links.
    """
    input_path = Path(input_dir)
    output_path = Path(output_dir)
    
    # Find all HTML files in the complex wayback structure
    html_files = list(input_path.rglob("*.html"))
    
    for html_file in html_files:
        # Extract the "real" path from the wayback path
        # Path format: web.archive.org/web/20210922141832id_/http:/valuescaucus.org/index.html
        parts = str(html_file.relative_to(input_path)).split('/')
        
        # Find where the original URL starts
        new_parts = []
        found_original = False
        for part in parts:
            if 'valuescaucus.org' in part:
                found_original = True
                # Clean up the protocol part (e.g., 'http:', 'https:')
                clean_part = re.sub(r'https?:/', '', part)
                new_parts.append(clean_part)
            elif found_original:
                new_parts.append(part)
        
        if new_parts:
            # Create the new output path
            output_file = output_path.joinpath(*new_parts)
            output_file.parent.mkdir(parents=True, exist_ok=True)
            
            # Read and fix the HTML content
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Fix Wayback Machine URLs to be relative
            fixed_content = fix_wayback_links(content)
            
            # Write the fixed content
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            
            print(f"Copied {html_file} -> {output_file}")

def fix_wayback_links(html_content):
    """
    Fix absolute Wayback Machine URLs to be relative.
    """
    # Replace Wayback Machine URLs with relative ones
    # Pattern to match Wayback Machine URLs
    patterns = [
        # Pattern for URLs in src, href, action attributes
        (r'(src|href|action)="[^"]*web\.archive\.org/web/\d+id_/(https?://valuescaucus\.org/)([^"]*)"', r'\1="\3"'),
        # Pattern for URLs without protocol
        (r'(src|href|action)="[^"]*web\.archive\.org/web/\d+id_/(valuescaucus\.org/)([^"]*)"', r'\1="\2"'),
    ]
    
    fixed_content = html_content
    for pattern, replacement in patterns:
        fixed_content = re.sub(pattern, replacement, fixed_content)
        
        # Also handle URLs that appear in JavaScript or CSS
        # Look for JavaScript redirects or URLs in strings
        fixed_content = re.sub(
            r'(https?://web\.archive\.org/web/\d+id_/https?://valuescaucus\.org/)',
            './',
            fixed_content
        )
    
    return fixed_content

if __name__ == "__main__":
    input_dir = "scrape/2021-09-22/mirror-additional-2"
    output_dir = "scrape/2021-09-22/offline-site"
    
    clean_wayback_structure(input_dir, output_dir)
    print("Additional files from second batch conversion complete. Check the offline-site directory.")