// NOTFLIX - The World's Simplest Streaming App
// This code is intentionally basic. Your job is to make it better!

// Load movies from JSON and display them
async function loadMovies() {
    try {
        const response = await fetch('data/movies.json');
        const data = await response.json();
        const moviesList = document.getElementById('movies-list');
        
        data.movies.forEach(movie => {
            const li = document.createElement('li');
            li.textContent = `${movie.title} (${movie.year}) - ${movie.genre.join(', ')}`;
            moviesList.appendChild(li);
        });
    } catch (error) {
        console.error('Error loading movies:', error);
        document.getElementById('movies-list').innerHTML = '<li>Error loading movies</li>';
    }
}

// Load TV shows from JSON and display them
async function loadTVShows() {
    try {
        const response = await fetch('data/tv_shows.json');
        const data = await response.json();
        const tvList = document.getElementById('tv-list');
        
        data.tv_shows.forEach(show => {
            const li = document.createElement('li');
            li.textContent = `${show.title} (${show.seasons} seasons) - ${show.genre.join(', ')}`;
            tvList.appendChild(li);
        });
    } catch (error) {
        console.error('Error loading TV shows:', error);
        document.getElementById('tv-list').innerHTML = '<li>Error loading TV shows</li>';
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    loadMovies();
    loadTVShows();
});

// ============================================
// FEATURE IDEAS (for workshop participants):
// ============================================
// 
// UI IMPROVEMENTS:
// - Add a dark theme (Netflix-style)
// - Create movie/show cards with images
// - Add a navigation bar
// - Make it responsive for mobile
// - Add a hero banner for featured content
// - Create a grid layout for content
// 
// FILTERING & SORTING:
// - Filter by genre
// - Filter by maturity rating (kids mode!)
// - Sort by rating, year, or date added
// - Search functionality
// - Show only Netflix Originals
// - Show only trending content
// 
// CONTENT FEATURES:
// - Show movie/show details on click
// - Display ratings with stars
// - Show cast and director info
// - Add "My List" functionality
// - Show awards and accolades
// - Display available subtitles/audio
// 
// USER FEATURES:
// - Profile selection page
// - Continue watching section
// - Watch history
// - Liked/disliked content
// - Profile avatar selection
// 
// ADVANCED:
// - Category rows (Trending, New, etc.)
// - Hover preview cards
// - Trailer modal
// - Episode list for TV shows
// - Progress bars for continue watching
// ============================================
