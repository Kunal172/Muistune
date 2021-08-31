const express = require('express');
const musicOperations = require('../controllers/music');
const songOperations = require('../db/services/songoperations')
const routes = express.Router();
routes.get('/singer',musicOperations.getByArtist);
routes.get('/allsongs',musicOperations.getAllSongs);
routes.post('/addsong',musicOperations.addASong);
routes.post('/removesong', songOperations.removeSong);
module.exports = routes;
