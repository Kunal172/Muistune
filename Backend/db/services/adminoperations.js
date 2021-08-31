const AdminModel = require('../models/admin');

const adminOperations = {
    async admin({userid, password}){
            const result =await AdminModel.findOne({"userid":userid,"password":password});
            return result;
        }
}

module.exports = adminOperations;