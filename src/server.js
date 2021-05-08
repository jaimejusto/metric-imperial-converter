const express = require("express");
const PORT = process.env.PORT || 8080;

// Routes
const apiRoute = require("./api/routes/apiRoute");

// Controllers


const app = express();
app.use(express.json());

app.use('/api', apiRoute);


app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log(`Server listening on ${PORT}...`);
});
