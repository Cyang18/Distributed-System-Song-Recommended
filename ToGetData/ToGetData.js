/*
Provide a token for authorization and set it as an empty string

Define function fetchWebApi
   - it will have the  parameters:
    - endpoint
    - method
    - body

Define function getTopTracks.:
   - Call fetchWebApi with the following parameters:
     - endpoint: 'v1/me/top/tracks?time_range=long_term&limit=5'
     - method: 'GET'
   - Return the items from the response.

Call getTopTracks and store the result in topTracks.

For each track in topTracks:
   - Extract the track name.
   - Extract the names of the artists.
   - Join the artist names with commas.
   - Log the track name and the joined artist names in the format:
     "Track Name by Artist1, Artist2, ...".

*/

// Mock token for testing
const token = 'dummy_token';

// Main code execution
const topTracks = await getTopTracks();

console.log(
    topTracks?.map(
        ({ name, artists }) =>
            `${name} by ${artists.map(artist => artist.name).join(', ')}`
    )
);

// Dummy implementation of getTopTracks
async function getTopTracks() {
    // Returning mock data
    return [
        {
            name: "Track 1",
            artists: [{ name: "Artist A" }, { name: "Artist B" }]
        },
        {
            name: "Track 2",
            artists: [{ name: "Artist C" }]
        },
        {
            name: "Track 3",
            artists: [{ name: "Artist D" }]
        },
        {
            name: "Track 4",
            artists: [{ name: "Artist E" }]
        },
        {
            name: "Track 5",
            artists: [{ name: "Artist F" }, { name: "Artist G" }]
        }
    ];
}

// Dummy implementation of fetchWebApi
async function fetchWebApi(endpoint, method, body) {
    // Return mock response
    return {
        items: [
            {
                name: "Track 1",
                artists: [{ name: "Artist A" }, { name: "Artist B" }]
            },
            {
                name: "Track 2",
                artists: [{ name: "Artist C" }]
            },
            {
                name: "Track 3",
                artists: [{ name: "Artist D" }]
            },
            {
                name: "Track 4",
                artists: [{ name: "Artist E" }]
            },
            {
                name: "Track 5",
                artists: [{ name: "Artist F" }, { name: "Artist G" }]
            }
        ]
    };
}


