require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json())

const trackRouter = require('./tracks/track.routes');
const albumRouter = require('./albums/album.routes')

app.use('/api/tracks', trackRouter)
app.use('/api/albums', albumRouter)


// Please keep this module.exports app, we need it for the tests !
module.exports = app;
