# crypto-app
This is made using Expo SDK and React Native. The backend is made using Express framework for the server, CCXT for showing the cryptocurrency data and MongoDB for storing it.

## Starting it
You would need Expo CLI for this app in order to run this application. Before running it, change the IP address in the fetch API to the one your machine has in order for it to fetch data from the Express server.

To start, first run the main server in the server directory by running
```npm run start-server```

Then use `expo start` to run the React Native app.
