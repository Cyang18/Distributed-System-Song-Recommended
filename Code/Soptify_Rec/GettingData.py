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

def main():

if __name__ == "__main__":
    main()
