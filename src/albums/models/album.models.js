//const mysql = require('mysql2')
const DbConfig = require('../../dbConfig')
const db = DbConfig.connection

class AlbumModels {
    
    async getAlbums() {
        try {
            const mySql = 'SELECT * FROM album'
            const result = await db.promise().query(mySql)
            return result[0]
        }
        catch (error) {
            throw error
        }
    }
    async getAlbum(albumId) {
        try {
            const mySql = 'SELECT * FROM album WHERE id = ?'
            const result = await db.promise().query(mySql, [albumId])
            return result[0]
        }
        catch(error) {
            throw error
        }
    }
    async getTracksAlbum(albumId) {
        try {
            const mySql = 'SELECT * FROM track LEFT JOIN album ON album_id = ?'
            const result = await db.promise().query(mySql, [albumId])
            return result[0]
        }
        catch(error) {
            throw error
        }
    }

    async addAlbum(newAlbum) {
        try {
            const mySql = 'INSERT INTO album (title, genre, picture, artist) VALUES (?,?,?,?)'
            const result = await db.promise().query(mySql, [newAlbum.title, newAlbum.genre, newAlbum.picture, newAlbum.artist])
            return result[0]
        }
        catch(error) {
            throw error
        }
    }
    async updateAlbum(putAlbum) {
        try {
            const mySql = 'UPDATE album SET title = ?, genre = ?, picture = ?, artist = ? WHERE id = ?'
            const result = await db.promise().query(mySql, [putAlbum.title, putAlbum.genre, putAlbum.picture, putAlbum.artist, putAlbum.albumId])
            return result
        }
        catch(error) {
            throw error
        }
    }
    async deleteAlbum(albumId) {
        try {
            const mySql = 'DELETE FROM album WHERE id = ?'
            const result = await db.promise().query(mySql, [albumId])
            return result 
        }
        catch(error) {
            throw error
        }
    }
}

module.exports = new AlbumModels()


