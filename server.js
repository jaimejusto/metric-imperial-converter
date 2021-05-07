const express = require("express");
const PORT = process.env.PORT || 8080;

// Routers
const metricRoute = require("./routes/metricRoute");


const app = express();

app.use('/metric', metricRoute);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}...`);
});
