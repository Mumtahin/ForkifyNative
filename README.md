# ForkifyNative
A React Native based mobile application that uses the Yelp API to search nearby restaurants. 

## Getting Started

##### 1. Setup Yelp API connection
Follow the instructions found in [https://www.yelp.com/developers/documentation/v3/authentication](https://www.yelp.com/developers/documentation/v3/authentication) to setup an account and obtain the API key. The copy the API key and paste it into connection.js replacing `[INSERT_YELP_API_TOKEN]` with the API key.

##### 2. Install the app
To install the application with all of its dependencies:
```sh
npm install
```

##### 3. Launching the application
To launch the app in a local server in development mode:
```sh
npm start
```
This will launch Metro Bundler in a browser on port 19002 by default. Open up the Expo Go app on your mobile phone, and then scan the QR code displayed. This will launch the app on the respective mobile.