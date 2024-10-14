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

