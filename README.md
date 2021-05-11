# Keymaster - Gatekeeper API Manager Authorization Middleware

Authorization Middleware for the APIKey Manager Gatekeeper

## Usage:

1. Define environment variables **GATEKEEPER_URL** and **GATEKEEPER_APP_ID** with the value of the API Manager URL for authentication and the APP UUID.

2. Add the **GATEKEEPER_URL** value as a destination to your destination service in SCP

3. Import the middleware
+
```JavaScript
const keymaster = require('keymaster');
```

4. Set the router endpoint to use the middleware
+
```JavaScript
app.get('/', keymaster, (req, rest, next) => {
    // do Something
});
```
