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
