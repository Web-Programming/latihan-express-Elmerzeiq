const mongoose = require("mongoose");

// URL koneksi ke MongoDB
const dbURI = "mongodb://127.0.0.1:27017/pawsi52"; // Gunakan nama database 'pawSI52'

// Koneksi ke MongoDB
mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected successfully to pawSI52"))
    .catch((err) => console.error("MongoDB connection error:", err));

module.exports = mongoose;
