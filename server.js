/**
 * This server is to run your build locally
 */

const express = require('express');
const path = require('path');
const configMap = require('./configMap');

const port = process.env.PORT || 8085;
const app = express();

// serve static assets normally
app.use(express.static(`${__dirname}/public`));

let config = {};
if (process.env.External_DEV_URL) {
  config = {externalUrl: process.env.External_DEV_URL};
} else {
  config = configMap["local"];
}

app.get('/config', (request, response) => {
  response.send(config);
});

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port);
console.log(`server started on port ${port}`);
