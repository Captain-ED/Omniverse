const {Router} = require("express");


const {home} = require("../controllers/mainController");


const router = Router();



router.get("/", home);





module.exports = router;