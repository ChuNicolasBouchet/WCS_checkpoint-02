const TrackModels = require('../models/track.models')

class TrackControllers {
    async getTracks(req, res) {
        try {
            const tracks = await TrackModels.getTracks()
            res.status(200).send(tracks)
        }
        catch(error) {
            res.status(500).send({ error: error.message })
        }
    }

    async getTrack(req, res) {
        try {
            const track = await TrackModels.getTrack(req.params.id)
            res.status(200).send(track)
        }
        catch(error) {
            res.status(500).send({ error: error.message })
        }
    }


    async addTrack(req, res) {
        try {
            const newTrack = {
                title: req.body.title,
                youtube_url: req.body.youtube_url
            }
            const trackId = await TrackModels.addTrack(newTrack)
            newTrack.id = trackId
            res.status(201).send(newTrack)
        }
        catch(error) {
            res.status(500).send({ error: error.message })
        }
    }

    async updateTrack(req, res) {
        try {  
            const putTrack = {
                title: req.body.title,
                youtube_url: req.body.youtube_url,
                trackId: req.params.id
            }
            const pushPutTrack = await TrackModels.updateTrack(putTrack)
            res.status(204).send(pushPutTrack)
        }
        catch(error) {
            res.status(500).send({ error: error.message })
        }

    }

    async deleteTrack(req, res) {
        try {
            const pushDelTrack = await TrackModels.deleteTrack(req.params.id)
            res.status(204).send(pushDelTrack)
        }
        catch(error) {
            res.status(500).send({ error: error.message })
        }

    }
}

module.exports = new TrackControllers()
