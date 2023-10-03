const mongoose = require("mongoose");
const express = require('express');
const bodyParser = require("body-parser");
const { DB_URL, DB_NAME } = require("./configs/db.config");
const { PORT } = require("./configs/server.config");


const app = express();

app.use(bodyParser.json()); 
 mongoose.connect(`${DB_URL}/${DB_NAME}`)
 .then(() => console.log("Connected to mongodb sucessfully"))
 .catch((ex) => console.log("Error occured", ex));

 require("./routes/auth.route")(app);
 require("./routes/booking.route")(app);
 require("./routes/movie.route")(app);
 require("./routes/payment.route")(app);
 require("./routes/theatre.route")(app);
 require("./routes/user.route")(app);

 app.listen(PORT, () => {
    console.log(`Listening on port${PORT}`)
 });