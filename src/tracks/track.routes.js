const express = require('express')
const trackRouter = express.Router()

const TrackControllers = require('./controllers/track.controllers')

trackRouter.get('/', TrackControllers.getTracks)
trackRouter.get('/:id', TrackControllers.getTrack)
trackRouter.post('/', TrackControllers.addTrack)
trackRouter.put('/:id', TrackControllers.updateTrack)
trackRouter.delete('/:id', TrackControllers.deleteTrack)

module.exports = trackRouter