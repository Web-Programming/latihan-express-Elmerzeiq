const express = require("express");
const router = express.Router();
const registerController = require("../controllers/controllerRegister"); // Pastikan ini sesuai

// Rute untuk menampilkan semua data
router.get('/', registerController.index);

// Rute untuk menambahkan data baru
router.post('/tambah', registerController.insert); // Pastikan fungsi insert terdefinisi di controllerRegister.js

module.exports = router;
