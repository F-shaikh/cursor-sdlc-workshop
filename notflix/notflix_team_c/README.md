# NOTFLIX

> The world's ugliest streaming service. Your mission: make it beautiful.

## What Is This?

This is a deliberately terrible Netflix clone. It has:
- ✅ Comprehensive data (movies, TV shows, users, categories)
- ❌ Zero styling
- ❌ No images
- ❌ Just bullet lists
- ❌ No user experience whatsoever

**Your job:** Make it not terrible.

## How to Run

1. Open a terminal in this folder
2. Start a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Or Python 2
   python -m SimpleHTTPServer 8000
   
   # Or Node.js (if you have npx)
   npx serve
   ```
3. Open http://localhost:8000 in your browser
4. Weep at its ugliness
5. Fix it!

## Available Data

All data lives in the `data/` folder:

### `movies.json`
15 movies with rich metadata:
- Title, year, description
- Genre (array), director, cast
- Duration, maturity rating
- User rating, review count
- Release date, date added
- Flags: featured, trending, new, child-safe, Netflix Original
- Language, subtitles, audio languages
- Thumbnail, backdrop, trailer URL
- Awards, keywords

### `tv_shows.json`
12 TV shows with:
- All the same fields as movies, plus:
- Seasons, episodes per season
- Show status (ongoing/ended)
- Next episode date

### `users.json`
Demo user with multiple profiles:
- Account info (subscription tier, billing)
- Multiple profiles (adult, second adult, kids)
- Watch history with progress
- Continue watching list
- My List (saved items)
- Liked/disliked content
- Preferences (genres, autoplay, language)

### `categories.json`
- Predefined categories (Trending, New Releases, etc.)
- All genres
- Maturity rating definitions
- Subscription tier info
- Language codes

## Feature Ideas

Pick something and build it! Here are ideas organized by difficulty:

### Easy (Good First Issues)
- [ ] Dark mode / Netflix-style dark theme
- [ ] Show star ratings next to titles
- [ ] Filter movies by genre (dropdown)
- [ ] Show "Netflix Original" badge
- [ ] Add a simple search box

### Medium
- [ ] Create movie/show cards with poster images
- [ ] Grid layout instead of bullet lists
- [ ] Kids mode (only show child-safe content)
- [ ] Sort by rating, year, or date added
- [ ] Show movie details when clicking a title

### Advanced
- [ ] Hero banner with featured content
- [ ] Horizontal scrolling category rows
- [ ] Profile selection screen
- [ ] "My List" functionality
- [ ] Continue watching section with progress bars

### Expert
- [ ] Hover preview cards
- [ ] Modal with trailer video
- [ ] Full user profile page
- [ ] Episode browser for TV shows
- [ ] Responsive mobile design

## Rules for the Workshop

1. **Keep changes small** — one feature per person
2. **Don't break what works** — the basic list should still load
3. **Stay in your lane** — coordinate with teammates to avoid conflicts
4. **Commit often** — small, descriptive commits
5. **Have fun** — it's supposed to be ugly, that's the joke!

## File Structure

```
notflix/
├── index.html          # Main page (edit this!)
├── css/
│   └── styles.css      # Styling (definitely edit this!)
├── js/
│   └── app.js          # JavaScript (add features here!)
├── data/
│   ├── movies.json     # Movie data (read-only)
│   ├── tv_shows.json   # TV show data (read-only)
│   ├── users.json      # User/profile data (read-only)
│   └── categories.json # Categories & config (read-only)
└── README.md           # You're reading it!
```

Good luck. Notflix is counting on you. 🎬
