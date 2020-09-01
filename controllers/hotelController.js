const Hotel = require('../models/hotel');

exports.homePage = (req, res) => {
    res.render("index", {
        title: "Lets Travel"
    });

}

exports.listAllHotels = (req, res) => {
    res.render("all_hotels", {
        title: "All Hotels"
    });
}

exports.adminPage = (req, res) => {
    res.render('admin', {
        title: 'Admin'
    })
}
exports.createHotelGet = (req, res) => {
    res.render('add_hotel', {
        title: 'add new hotel'
    })
}
exports.createHotelPost = async (req, res) => {
    const hotel = new Hotel(req.body);
    await hotel.save();

}