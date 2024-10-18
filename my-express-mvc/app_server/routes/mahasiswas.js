const express = require("express");
const router = express.Router();
const mahasiswaController = require("../controllers/controllerMahasiswa");

router.get("/mahasiswa", mahasiswaController.Index);
// fungsi dan rute index kita gunakan untuk memanggil semua data dalam database mongo
module.exports = router;