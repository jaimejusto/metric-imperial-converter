const express = require("express");
const cors = require("cors");
const app = express();
app.enable("trust proxy");
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

// Routes
const apiRoute = require("./src/api/routes/apiRoute");


app.use('/api', apiRoute);


app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log(`Server listening on ${PORT}...`);
});
