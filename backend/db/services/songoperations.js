const SongModel = require("../models/song");

const songOperations = {
    async add(songObject){
        return await SongModel.create(songObject);
    },
    async readBySinger(singerName){
        return await SongModel.find({'artistName':singerName});
    },
    async readAll(){
        return await SongModel.find({});
    },
    async removeSong(){
        return await SongModel.deleteOne({'name':'Name of a Song'});
    }

}
module.exports = songOperations;