var express = require("express");
var router = express.Router();

//require contorllers
const hotelController = require('../controllers/hotelController');


/* GET home page. */
router.get("/", hotelController.homePage);

router.get("/all", hotelController.listAllHotels);

// admin routes
router.get("/admin", hotelController.adminPage);
router.get("/admin/add", hotelController.createHotelGet);
router.post("/admin/add", hotelController.createHotelPost);

module.exports = router;