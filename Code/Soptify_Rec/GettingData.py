import os
from dotenv import load_dotenv 
from requests import post, get
import json
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
load_dotenv()


client_credentials_manager = SpotifyClientCredentials(
    client_id=os.getenv("CLIENT_ID"),
    client_secret=os.getenv("CLIENT_SECERT")
)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

def get_artist_info(artist_name):

    results = sp.search(q=artist_name, type='artist')
    if results['artists']['items']:
        artist = results['artists']['items'][0]
        return {
            'name': artist['name'],
            'followers': artist['followers']['total'],
            'genres': artist['genres'],
            'popularity': artist['popularity'],
            'external_url': artist['external_urls']['spotify']
        }
    return None

def get_track_info(track_name):
 
    results = sp.search(q=track_name, type='track')
    if results['tracks']['items']:
        track = results['tracks']['items'][0]
        return {
            'name': track['name'],
            'artists': [artist['name'] for artist in track['artists']],
            'album': track['album']['name'],
            'release_date': track['album']['release_date'],
            'duration_ms': track['duration_ms'],
            'external_url': track['external_urls']['spotify']
        }
    return None


def main():
    artist_name = input("Enter the artist's name: ")
    artist_info = get_artist_info(artist_name)
    
    if artist_info:
        print("Artist Information:")
        print(artist_info)
    else:
        print("Artist not found.")
    
    track_name = input("Enter the track name: ")
    track_info = get_track_info(track_name)
    
    if track_info:
        print("Track Information:")
        print(track_info)
    else:
        print("Track not found.")

    output_data = {
        'artist_info': artist_info,
        'track_info': track_info
    }
    save_to_file(output_data, 'spotify_info.json')
    print("Information saved to spotify_info.json.")
if __name__ == "__main__":
    main()
