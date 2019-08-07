const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;
 
const HostSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    accountNumber:{
        type: Number,
        required: false
    },
    Date:{
        type: Date,
        default: Date.now()
    }
});


const HostModel = mongoose.model('Host', HostSchema);
module.exports = HostModel;