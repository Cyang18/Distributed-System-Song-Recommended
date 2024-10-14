### First Step: Get Your API Working

1. **Create/Sign in to Your Spotify Account**:
   - Go to [Spotify Developer](https://developer.spotify.com/).
   - Sign in with your Spotify account or create a new one if you don’t have an account.

2. **Create a New App**:
   - Navigate to the dashboard on the Spotify Developer site.
   - Click on "Create an App."
   - Fill in the app name and description as prompted.

3. **Access App Settings**:
   - Once your app is created, click on it to open the app details.
   - Find the "Settings" option in the menu.

4. **Retrieve Client ID and Client Secret**:
   - In the settings, locate your **Client ID** and **Client Secret**.
   - Copy both IDs and place them in the `.env` file in your project.

5. **Run the `main.py` Script**:
   - Execute `main.py` to obtain your access token.
   - Make sure to save the access token for future use.

### Second Step: Test Data Fetching

1. **Run the Data Fetching Test**:
   - Open and run the `APIdataTest.py` script to verify that data fetching works.

2. **Insert Credentials in the Script**:
   - Make sure to place your access token, Client ID, and Client Secret in the appropriate sections of the `APIdataTest.py` program.
