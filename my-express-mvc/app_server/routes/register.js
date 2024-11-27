const express = require("express");
const router = express.Router();
const registerController = require("../controllers/controllerRegister");

// Fungsi dan Rute Index Kita Gunakan Untuk Memanggil Semua Data dalam Database MongoDB
// router.get("/", registerController.Index);
router.post("/register", registerController.Insert);
module.exports = router;