const express = require('express');

const fs = require('fs');
const path = require('path');

const fetch = require('node-fetch');

const app = express();

function makeRoutes() {
  const files = fs.globSync('routes/*.js');

  for (const file of files) {
    const route = require(`./${file}`);
    app.get(`/${path.basename(file, '.js')}`, route);
  }
}

app.listen(process.env.PORT, () => {
  console.log(`Listening at localhost:${process.env.PORT}`)

  console.log('typeof fetch', typeof fetch);
})
makeRoutes();