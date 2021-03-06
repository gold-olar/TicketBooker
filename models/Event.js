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
        type: String,
        required: false
    },
    avaialableSeats:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    registeredPeopleNames:{
        type: Array,
        default:[]
    },
    issuedTickets:{
        type: Array,
        default:[]
    },
    registeredPeopleEmails:{
        type: Array,
        default:[]
    },
    date:{
        type: String
    }
});


const EventModel = mongoose.model('Event', EventSchema);
module.exports = EventModel;