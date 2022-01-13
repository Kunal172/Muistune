// DB Connection
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://music:kunal1972@cluster.mbdmi.mongodb.net/musicdb?retryWrites=true&w=majority',
{poolSize:5}, (err=>{
    if(err){
        console.log('Problem in DB Connection');
    }
    else{
        console.log('DB Connection Created....');
    }
}));
module.exports = mongoose;