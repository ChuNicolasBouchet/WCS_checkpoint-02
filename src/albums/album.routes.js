const express = require('express')
const albumRouter = express.Router()

const AlbumControllers = require('./controllers/album.controllers')

albumRouter.get('/', AlbumControllers.getAlbums)
albumRouter.get('/:id', AlbumControllers.getAlbum)
albumRouter.get('/:id/tracks', AlbumControllers.getTracksAlbum)
albumRouter.post('/', AlbumControllers.addAlbum)
albumRouter.put('/:id', AlbumControllers.updateAlbum)
albumRouter.delete('/:id', AlbumControllers.deleteAlbum)

module.exports = albumRouter