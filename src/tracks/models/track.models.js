//const mysql = require('mysql2')
const DbConfig = require('../../dbConfig')
const db = DbConfig.connection

class TrackModels {
    
    async getTracks() {
        try {
            const mySql = 'SELECT * FROM track'
            const result = await db.promise().query(mySql)
            return result[0]
        }
        catch (error) {
            throw error
        }
    }
    async getTrack(trackId) {
        try {
            const mySql = 'SELECT * FROM track WHERE id = ?'
            const result = await db.promise().query(mySql, [trackId])
            return result[0]
        }
        catch(error) {
            throw error
        }
    }

    async addTrack(newTrack) {
        try {
            const mySql = 'INSERT INTO track (title, youtube_url) VALUES (?,?)'
            const result = await db.promise().query(mySql, [newTrack.title, newTrack.youtube_url])
            return result[0]
        }
        catch(error) {
            throw error
        }
    }
    async updateTrack(putTrack) {
        try {
            const mySql = 'UPDATE track SET title = ?, youtube_url = ? WHERE id = ?'
            const result = await db.promise().query(mySql, [putTrack.title, putTrack.youtube_url, putTrack.trackId])
            return result
        }
        catch(error) {
            throw error
        }
    }
    async deleteTrack(trackId) {
        try {
            const mySql = 'DELETE FROM track WHERE id = ?'
            const result = await db.promise().query(mySql, [trackId])
            return result 
        }
        catch(error) {
            throw error
        }
    }
}

module.exports = new TrackModels()


