const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    hotel_name: {
        type: string,
        required: "hotel name is required",
        max: 32,
        trim: true
    },
    hotel_description: {
        type: string,
        required: "hotel description is required",
        trim: true
    },
    image: String,
    star_rating: {
        type: Number,
        required: "rating description is required",
        max: 5
    },
    country: {
        type: string,
        required: "country description is required",
        trim: true
    },
    cost_per_night: {
        type: Number,
        required: "cost_per_night description is required",
    },
    available: {
        type: Boolean,
        required: "available description is required",
    }

});

//export modal
module.exports = mongoose.model('Hotels', hotelSchema)