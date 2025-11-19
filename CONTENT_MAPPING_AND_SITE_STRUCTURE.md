# Values Caucus Website - Content Mapping & Site Structure Plan

## Executive Summary

This document maps the old Values Caucus website content to the Spotlight template structure and proposes an optimized site architecture following modern information hierarchy best practices.

---

## 1. CONTENT INVENTORY - Old Site

### Pages Identified:
1. **Homepage** - Mission statement and introduction
2. **History** - Comprehensive year-by-year history (1994-2005)
3. **About** - Leadership structure (Co-Chairs, Council, Past Chairs, Members)
4. **Events** - Extensive chronological event listings (2002-2017)
5. **Reports** - Activity Reports and Special Events documentation
6. **Coffees** - Ambassador coffee series information
7. **Contact** - Contact information and addresses

### Content Types:
- Mission/Values statements
- Historical chronology
- Leadership profiles
- Event listings (past and upcoming)
- Meeting summaries and reports
- Ambassador engagement program
- Contact information

---

## 2. TEMPLATE CAPABILITIES - Spotlight

### Available Pages:
1. **Homepage** - Hero, photo gallery, content previews, newsletter, highlights
2. **About** - Bio with image, social links, contact
3. **Articles** - Blog system with MDX support, full metadata
4. **Projects** - Grid layout with logos and descriptions
5. **Speaking** - Sectioned appearances (Conferences, Podcasts, etc.)
6. **Uses** - Categorized lists with detailed descriptions

### Components Available:
- `Card` - Versatile content containers
- `SimpleLayout` - Page wrapper with title and intro
- `Section` - Grouped content with titles
- `ArticleLayout` - Full article pages with navigation
- `Newsletter` - Email signup form
- `Resume/Work History` - Timeline with logos and dates

---

## 3. CONTENT TO TEMPLATE MAPPING

### Perfect Matches ✓

| Old Content | Template Element | Reasoning |
|-------------|------------------|-----------|
| **Events listings (2002-2017)** | **Speaking page** (renamed "Events") | The Speaking page's sectioned card layout is perfect for event listings. Can group by year or theme. |
| **Coffee Series** | **Projects page** (renamed "Coffees") | Projects grid layout works perfectly for showcasing ambassador meetings with photos/logos. |
| **Reports & Activity Reports** | **Articles section** | The MDX article system is ideal for long-form reports, allowing rich formatting and easy updates. |
| **Contact information** | **About page footer** | Template's About page includes social/contact section at bottom. |

### Good Adaptations ○

| Old Content | Template Element | Adaptation Needed |
|-------------|------------------|-------------------|
| **Mission Statement** | **Homepage hero** | Replace placeholder bio with Values Caucus mission. Perfect fit for prominent placement. |
| **History timeline** | **About page** (expand) | Use About page for organizational history. Add timeline component or structured paragraphs. |
| **Leadership structure** | **About page main content** | Replace personal bio with organizational structure. List Co-Chairs, Council, Past Chairs. |
| **Photo gallery** | **Homepage photos section** | Replace template photos with Values Caucus event photos, UN imagery, ambassador meetings. |

### New Additions ▲

| Content Need | Solution |
|-------------|----------|
| **Member organizations** | Create new page "Members" using SimpleLayout with sectioned lists |
| **Upcoming events** | Add to Events page as first section with special styling |
| **Special reports** | Featured articles on homepage, full content in Articles section |

---

## 4. PROPOSED SITE STRUCTURE

### Optimized Information Architecture

Following UX best practices, consolidate related content and create clear information hierarchy:

```
📱 VALUES CAUCUS WEBSITE
│
├── 🏠 HOME
│   ├── Mission Statement (hero)
│   ├── Photo Gallery (UN events, meetings)
│   ├── Latest Updates (3-4 recent articles/events)
│   ├── Newsletter Signup
│   └── Quick Stats/Highlights (years active, events held, etc.)
│
├── ℹ️ ABOUT
│   ├── Who We Are (mission, values, purpose)
│   ├── Our History (1994-present)
│   ├── Leadership
│   │   ├── Current Co-Chairs
│   │   ├── Coordinating Council
│   │   └── Past Chairs
│   └── Contact Information
│
├── 📅 EVENTS
│   ├── Upcoming Events (if any)
│   ├── Community Discussions
│   ├── Special Events
│   └── Past Events Archive
│       ├── 2012-2017
│       ├── 2002-2011
│       └── Historical Events (1994-2002)
│
├── ☕ COFFEES
│   ├── About the Coffee Series
│   ├── Upcoming Coffees
│   ├── Past Guests
│   └── Coffee Books Archive
│
├── 📰 REPORTS & UPDATES (Articles)
│   ├── Activity Reports (yearly)
│   ├── Special Event Reports
│   ├── News & Announcements
│   └── Featured Speeches/Addresses
│
└── 👥 MEMBERS
    ├── Current Member Organizations
    ├── How to Join
    └── Member Contributions
```

---

## 5. CONSOLIDATION DECISIONS

### Pages to MERGE (Better UX):

#### ✅ **About + History + Contact → Single "About" Page**
**Reasoning:**
- Users seeking organizational info want it all in one place
- Reduces navigation complexity
- History provides context for current structure
- Contact belongs with "who we are" information
- **Structure:** Sections on single scrollable page with jump links

#### ✅ **Events + Special Events → Single "Events" Page**
**Reasoning:**
- All events content serves same user goal
- Easier to maintain chronologically
- Can use sections to group by type or time period
- **Structure:** Sectioned layout with Upcoming/Recent/Archive

#### ✅ **Reports + Activity Reports → "Articles" Section**
**Reasoning:**
- Both are long-form content
- MDX allows rich formatting
- Searchable and filterable
- Can add tags: "Activity Report", "Special Event", "Announcement"
- **Structure:** Blog-style with categories and dates

### Pages to KEEP SEPARATE (Distinct Purpose):

#### ✅ **Coffees** - Standalone Page
**Reasoning:**
- Unique program with distinct identity
- Significant content volume
- Different audience interest
- Ambassador relationships deserve spotlight

#### ✅ **Members** - New Standalone Page
**Reasoning:**
- Important for credibility and networking
- Separate user goal (who's involved)
- Recruitment/joining information needed

---

## 6. CONTENT MIGRATION CHECKLIST

### Phase 1: Structure Setup
- [ ] Rename template pages to match new structure
- [ ] Create new "Members" page
- [ ] Set up article categories/tags
- [ ] Configure navigation menu

### Phase 2: Content Migration (In Order)

#### Priority 1 - Core Identity:
- [ ] **Homepage hero** - Mission statement
- [ ] **About page** - Who we are, history, leadership
- [ ] **Contact info** - Address, email, social

#### Priority 2 - Current Information:
- [ ] **Coffees page** - Coffee series info, upcoming, past guests
- [ ] **Members page** - Organizations list, joining info
- [ ] **Recent events** - Most recent events (2012-2017)

#### Priority 3 - Archives:
- [ ] **Historical events** - 2002-2011 events
- [ ] **Activity reports** - Convert to articles
- [ ] **Special event reports** - Convert to articles
- [ ] **Coffee books** - Archive content

#### Priority 4 - Media:
- [ ] **Photos** - Event photos for gallery
- [ ] **Logos** - Member organizations, partner logos
- [ ] **Documents** - PDFs and downloadable materials

### Phase 3: Enhancement:
- [ ] Newsletter integration
- [ ] Search functionality
- [ ] Event calendar (if needed)
- [ ] Member directory (if needed)

---

## 7. KEY DESIGN DECISIONS

### Navigation Structure:
```
Home | About | Events | Coffees | Reports | Members | Contact
```

### Homepage Sections (Priority Order):
1. **Mission Statement** - Immediate clarity on purpose
2. **Photo Gallery** - Visual engagement, UN connection
3. **Latest Updates** - Recent reports/events (3-4 items)
4. **Quick Impact Stats** - Years active, events held, ambassadors engaged
5. **Newsletter** - Stay informed (keep template component)

### About Page Sections:
1. **Who We Are** - Mission and values (expandable)
2. **Our History** - Timeline or chronological narrative
3. **Current Leadership** - Co-Chairs with photos/bios
4. **Coordinating Council** - Names and affiliations
5. **Past Leadership** - Acknowledgment section
6. **Contact Us** - Full contact information

### Events Page Sections:
1. **Upcoming Events** - Prominent placement (if active)
2. **Community Discussions** - Recent dialogue events
3. **Featured Special Events** - Highlights from history
4. **Event Archive** - Searchable/filterable chronological list

### Coffees Page Sections:
1. **About the Coffee Series** - Program description
2. **Upcoming Coffees** - Schedule (if active)
3. **Ambassador Guest Gallery** - Grid of past guests with countries
4. **Coffee Books** - Archived summaries by year

---

## 8. CONTENT PRESERVATION NOTES

### Critical Content - Must Not Change:
- ✓ Mission statement (exact wording)
- ✓ UN Millennium Declaration values (Freedom, Equality, Solidarity, Tolerance, Respect for Nature, Shared Responsibility)
- ✓ Ambassador names and titles
- ✓ Event dates and descriptions
- ✓ Historical facts and quotes
- ✓ Contact information

### Content That Can Be Improved:
- ○ Navigation labels (modernize for clarity)
- ○ Section headings (enhance readability)
- ○ Formatting (use modern typography)
- ○ Image presentation (optimize for web)

### Content to Verify:
- ? Current status (active/inactive)
- ? Upcoming events (or mark as historical)
- ? Current leadership (may need updating)
- ? Contact information (verify still valid)

---

## 9. TEMPLATE CUSTOMIZATIONS NEEDED

### Components to Modify:
1. **Homepage hero** - Adjust tone from personal to organizational
2. **Work/Resume section** → **Key Milestones/Timeline**
3. **Newsletter** - Update copy for UN/NGO audience
4. **Footer** - Add UN affiliations, partner links

### New Components to Create:
1. **Timeline component** - For history section
2. **Stats/Impact component** - For homepage highlights
3. **Ambassador card** - For Coffees guest gallery
4. **Member organization grid** - For Members page

### Visual Assets Needed:
- [ ] UN logo usage (verify permissions)
- [ ] Values Caucus logo/branding
- [ ] Event photos (10-15 high quality)
- [ ] Ambassador headshots (if available)
- [ ] Member organization logos
- [ ] UN building imagery

---

## 10. PLACEHOLDER SECTIONS NEEDED

### High-Quality Content Requests:

#### 1. **Updated Mission Statement** (if current one needs refresh)
- Current mission is good but may need modernization
- Request: Review and potentially update for contemporary relevance

#### 2. **Leadership Bios** (if available)
- Current Co-Chairs: Carl Murrell, Julia Grindon-Welch
- Coordinating Council members
- Request: 2-3 sentence bios with photos

#### 3. **Current Status Update**
- Is the Values Caucus currently active?
- When was the last event?
- Future plans or archived status?
- Request: Clear statement for homepage

#### 4. **Featured Event Photos**
- Need 5-7 high-quality photos for homepage gallery
- Should show: UN setting, diverse participants, meaningful moments
- Request: High-res JPGs (min 1200px width)

#### 5. **Member Organizations List**
- Need current/complete list
- Logo availability?
- Request: Organization names, websites, logos (if permitted)

#### 6. **Social Media Links**
- Current active social accounts?
- Request: URLs for any active profiles

---

## 11. MIGRATION STRATEGY

### Approach:
**Progressive Enhancement** - Build foundation first, then add richness

### Timeline Suggestion:
1. **Week 1** - Structure & Core Content (Homepage, About, Contact)
2. **Week 2** - Events & Coffees pages
3. **Week 3** - Reports conversion to Articles
4. **Week 4** - Members page & media optimization
5. **Week 5** - Polish, testing, review

### Quality Checks:
- [ ] All original content included
- [ ] No factual changes made
- [ ] Links all functional
- [ ] Images optimized
- [ ] Mobile responsive
- [ ] Accessibility compliance
- [ ] SEO optimization

---

## 12. RECOMMENDATIONS

### Information Hierarchy Best Practices Applied:

1. **Reduced Navigation Complexity** - From 7-8 pages to 6 clear sections
2. **Grouped Related Content** - About/History/Contact unified
3. **Prioritized Current Over Archive** - Upcoming before historical
4. **Clear User Paths** - Learn → Engage → Join
5. **Scannable Content** - Sections, headings, visual hierarchy
6. **Mobile-First** - Template is responsive, ensure content works at all sizes

### SEO & Accessibility:
- Use semantic HTML (template does this)
- Alt text for all images
- Descriptive page titles and meta descriptions
- Structured data for events
- Clear heading hierarchy

### Future Enhancements (Post-Launch):
- Event calendar integration
- Member login area
- Document library
- Video archive
- Multi-language support (if needed)

---

## CONCLUSION

The Spotlight template is an **excellent match** for the Values Caucus content with minimal adaptation needed. The proposed structure:

- ✅ Preserves all original content
- ✅ Improves information hierarchy
- ✅ Modernizes presentation
- ✅ Maintains organizational identity
- ✅ Enhances user experience
- ✅ Enables future growth

**Next Steps:** Review this mapping, provide any requested high-quality content/assets, and approve migration to begin.
