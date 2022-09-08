const {Router} = require("express");


const {home, createNFT} = require("../controllers/mainController");


const router = Router();



router.get("/", home);


router.post("/create", createNFT);





module.exports = router;