const express = require("express");
const router = express.Router();
// Fungsi dan Rute Index Kita Gunakan Untuk Memanggil Semua Data Dalam Database MongoDB
const housingController = require("../controllers/controllerHousing");
router.get("/", housingController.Index);

module.exports = router;