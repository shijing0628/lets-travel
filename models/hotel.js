const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    hotel_name: {
        type: String,
        required: "hotel name is required",
        max: 32,
        trim: true
    },
    hotel_description: {
        type: String,
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
        type: String,
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
hotelSchema.index({
    hotel_name: "text",
    country: "text",

})
//export modal
module.exports = mongoose.model('Hotels', hotelSchema)