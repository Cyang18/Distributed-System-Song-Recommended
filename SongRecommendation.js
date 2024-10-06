const token = ''; //Authorization token
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

const topTracksIds = [
  '35JqhVvhuyBoPLLUY8Klqd','4g2WiijzSKzH8PApKDbadN','7KW1AtQKFToSoF1kmyk2wE','2pIUpMhHL6L9Z5lnKxJJr9','4osgfFTICMkcGbbigdsa53'
];

async function getRecommendations(){
  return (await fetchWebApi(
    `v1/recommendations?limit=5&seed_tracks=${topTracksIds.join(',')}`, 'GET'
  )).tracks;
}

const recommendedTracks = await getRecommendations();
console.log(
  recommendedTracks.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);
