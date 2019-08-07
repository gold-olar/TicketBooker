const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;


const EventSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    banner:{
        type: String,
        required: true
    },
    category:{
        type: String
    },
    host:{
        type: String,
        required: true
    },
    organizer:{
        type: String,
        required: true
    },
    venue:{
        type: Number,
        required: false
    },
    avaialableSeats:{
        type: Number,
        required: true
    },
    registeredPeopleNames:{
        type: Array,
        default:[]
    },
    registeredPeopleEmails:{
        type: Array,
        default:[]
    },
    date:{
        type: Date
    }
});


const EventModel = mongoose.model('Event', EventSchema);
module.exports = EventModel;