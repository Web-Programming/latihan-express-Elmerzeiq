let mongoose = require("mongosee");
let dbURL = "mongodb://localhost:27017"
mongoose.connect(dbURL,{
useNewURLParser : true
});

mongoose.connection.on("connected",() => {
console.log("Connected To MongoDB");
});

mongoose.connection.on("error",(error); {
});

mongoose.connection.on("disconnected",() => {
console.log("Disconnected From MongoDB");
});