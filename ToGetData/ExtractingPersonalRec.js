const token = '';

const fs = require('fs'); 

async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    method,
    ...(body && { body: JSON.stringify(body) }) 
  });

  if (!res.ok) {
    const errorResponse = await res.json();
    throw new Error(`Error: ${res.status} ${errorResponse.message}`);
  }

  return await res.json();
}

const topTracksIds = [
]; //place given track Id

async function getRecommendations() {
  return (await fetchWebApi(
    `v1/recommendations?limit=5&seed_tracks=${topTracksIds.join(',')}`, 'GET'
  )).tracks;
}

async function main() {
  try {
    const recommendedTracks = await getRecommendations();
    
    const output = recommendedTracks.map(
      ({ name, artists }) => ({
        name,
        artists: artists.map(artist => artist.name),
      })
    );

    fs.writeFileSync('recommendedTracks.json', JSON.stringify(output, null, 2), 'utf-8');
    console.log('Recommendations saved to recommendedTracks.json');

  } catch (error) {
    console.error(error);
  }
}

main();
