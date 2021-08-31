// DB Connection
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL,
{poolSize:5}, (err=>{
    if(err){
        console.log('Problem in DB Connection');
    }
    else{
        console.log('DB Connection Created....');
    }
}));
module.exports = mongoose;