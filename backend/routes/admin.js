const express = require('express');
const routes = express.Router();

routes.post('/admin', async (request, response)=>{
    let adminObject = request.body;
    const adminOperations = require('../db/services/adminoperations');
    let result = await adminOperations.admin(adminObject);
   if(result && result._id){
    response.status(200).json({message:'Welcome '+result.name+'admin'});
   }
   else{
    response.status(200).json({message: 'Invalid Userid or Password'});
   }
});

module.exports = routes;