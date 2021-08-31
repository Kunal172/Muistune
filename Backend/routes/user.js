const express = require('express');
const routes = express.Router();

routes.get('/',(request, response)=>{
    response.send('Welcome to the Home Page');
});

routes.post('/register', async (request, response)=>{
    let userObject = request.body;
    const userOperations = require('../db/services/useroperations');
    let result =await userOperations.register(userObject);
   
   if(result && result._id){
    response.status(200).json({message:'Record added Successfully'});
   }
   else{
       response.status(200).json({message:'Record Not added'});
   }
    
});
routes.post('/login', async (request, response)=>{
    let userObject = request.body;
    const userOperations = require('../db/services/useroperations');
    const adminOperations = require('../db/services/adminoperations');
    let adminresult = await adminOperations.admin(userObject);
    let result = await userOperations.login(userObject);
   if(result && result._id){
    response.status(200).json({message:'Welcome '+result.name});
    console.log('Login Result is ', result);
   }
   else{
    if(adminresult && adminresult._id){
        response.status(200).json({message:'Admin '+adminresult.name});
        console.log('Login Result is ', adminresult);
    }
    else
    {
        response.status(200).json({message: 'Invalid Userid or Password'});
    }
   }

}
);
module.exports = routes;