const token = ''; //placing access token here

const fs = require('fs'); 

async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    }),
if (!res.ok) {
    const errorResponse = await res.json();
    throw new Error(`Error: ${res.status} ${errorResponse.message}`);
  }

  return await res.json();
}

const topTracksIds = [ "place your ids u got here from the first program"
];

async function getRecommendations() {
  return (await fetchWebApi(
    `v1/recommendations?limit=5&seed_tracks=${topTracksIds.join(',')}`, 'GET'
  )).tracks;
}

    


