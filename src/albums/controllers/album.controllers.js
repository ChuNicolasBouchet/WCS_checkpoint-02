const AlbumModels = require('../models/album.models')

class AlbumControllers {
    async getAlbums(req, res) {
        try {
            const albums = await AlbumModels.getAlbums()
            res.status(200).send(albums)
        }
        catch(error) {
            res.status(500).send({ error: error.message })
        }
    }

    async getAlbum(req, res) {
        try {
            const album = await AlbumModels.getAlbum(req.params.id)
            res.status(200).send(album)
        }
        catch(error) {
            res.status(500).send({ error: error.message })
        }
    }

    async getTracksAlbum(req, res) {
        try {
            const tracks = await AlbumModels.getTracksAlbum(req.params.id)
            res.status(200).send(tracks)
        }
        catch(error) {
            res.status(500).send({ error: error.message })
        }
    }


    async addAlbum(req, res) {
        try {
            const newAlbum = {
                title: req.body.title,
                genre: req.body.genre,
                picture: req.body.picture,
                artist: req.body.artist
            }
            const albumId = await AlbumModels.addAlbum(newAlbum)
            newAlbum.id = albumId
            res.status(201).send(newAlbum)
        }
        catch(error) {
            res.status(500).send({ error: error.message })
        }
    }

    async updateAlbum(req, res) {
        try {  
            const putAlbum = {
                title: req.body.title,
                genre: req.body.genre,
                picture: req.body.picture,
                artist: req.body.artist,
                albumId: req.params.id
            }
            const pushPutAlbum = await AlbumModels.updateAlbum(putAlbum)
            res.status(204).send(pushPutAlbum)
        }
        catch(error) {
            res.status(500).send({ error: error.message })
        }

    }

    async deleteAlbum(req, res) {
        try {
            const pushDelAlbum = await AlbumModels.deleteAlbum(req.params.id)
            res.status(204).send(pushDelAlbum)
        }
        catch(error) {
            res.status(500).send({ error: error.message })
        }

    }
}

module.exports = new AlbumControllers()
