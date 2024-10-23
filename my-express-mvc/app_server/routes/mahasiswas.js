const express = require("express");
const router = express.Router();
const mahasiswaController = require("../controllers/controllerMahasiswa");

router.get("/mahasiswa", mahasiswaController.index);
router.post("/mahasiswa/insert", mahasiswaController.insert);
// fungsi dan rute index kita gunakan untuk memanggil semua data dalam database mongo
module.exports = router;