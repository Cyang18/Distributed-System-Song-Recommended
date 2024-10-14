// Store the authorization token needed to access the Spotify API
const token = '';

// Function to make requests to the Spotify API
async function fetchWebApi(endpoint, method, body) {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
        headers: {
            Authorization: `Bearer ${token}`, // Add token to the request headers
        },
        method, // HTTP method (GET, POST, etc.)
        body: JSON.stringify(body) // Convert request body to JSON format
    });
    return await res.json(); // Parse and return the response as JSON
}

// Fetch the user's top 5 tracks from Spotify
async function getTopTracks() {
    return (await fetchWebApi(
        'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
    )).items;
}

// Get the top tracks and log them in the format "Track name by Artist"
const topTracks = await getTopTracks();
console.log(
    topTracks?.map(
        ({ name, artists }) =>
            `${name} by ${artists.map(artist => artist.name).join(', ')}`
    )
);
