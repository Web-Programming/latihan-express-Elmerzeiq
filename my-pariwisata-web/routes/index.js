var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/paketwisata', (req, res) => {
  const paketTidung = [
      { peserta: "2", hargaBoatFery2H1M: "Rp 965.000", hargaBoatFery3H2M: "Rp 1.125.000", hargaSpeedboat2H1M: "Rp 1.055.000", hargaSpeedboat3H2M: "Rp 1.205.000", hargaBahariExpress2H1M: "Rp 865.000", hargaBahariExpress3H2M: "Rp 1.215.000" },
      { peserta: "3", hargaBoatFery2H1M: "Rp 915.000", hargaBoatFery3H2M: "Rp 1.075.000", hargaSpeedboat2H1M: "Rp 1.005.000", hargaSpeedboat3H2M: "Rp 1.155.000", hargaBahariExpress2H1M: "Rp 815.000", hargaBahariExpress3H2M: "Rp 1.165.000" },
      // Tambahkan data lainnya
  ];

  const fasilitas = [
      "Tiket Boat Pulang & Pergi",
      "Penginapan (AC, TV, Dispenser, View Pantai)",
      "Makan: 3x (2D 1N via Boat Fery), 4x (2D 1N via Speedboat), 6x (3D 2N)",
      "Barbeque 1x",
      "Sepeda",
      "Banana Boat / Sofa Boat 1x",
      "Boat Snorkeling Privat",
      "Dokumentasi Underwater",
      "Service Guide"
  ];
  res.render('paketwisata', { paketTidung, fasilitas });
});


router.get('/orderpaket', function(req, res, next) {
  res.render('orderpaket', { title: 'Form pemesanan paket' });
});

router.get('/orderdetail', function(req, res, next) {
  res.render('orderdetail', { title: 'Detail Pemesanan Paket' });
});

module.exports = router;
