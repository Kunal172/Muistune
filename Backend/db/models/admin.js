const mongoose = require('../connect');
const {Schema, SchemaTypes} = mongoose;
const AdminSchema = new Schema({
    'userid':{type:SchemaTypes.String, required:true, unique:true},
    'password':{type:SchemaTypes.String, required:true, min:8 , max:25},
    'name':{type:SchemaTypes.String}
});
const AdminModel = mongoose.model('admin', AdminSchema);
module.exports = AdminModel;
