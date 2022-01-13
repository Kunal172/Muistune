const songOperations = require("../db/services/songoperations");

const musicOperations = {
    
    async getAllSongs(request, response){
        const songs = await songOperations.readAll();
        response.json(songs);
    },
    async getByArtist(request, response){
        const singerName = request.query.name;
        console.log('Singer Name is ', singerName);
        const songs = await songOperations.readBySinger(singerName);
        response.json(songs);
    },
    async addASong(request, response){
        console.log(request.body);
        const result  = await songOperations.add(request.body);
        response.json(result);
    }
}
module.exports = musicOperations;