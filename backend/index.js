const express = require('express');
const app = express();
const port = process.env.PORT || 9000;

const buildingRoutes = require('./routes/buildings');

app.use('/buildings', buildingRoutes)
app.listen(port, () => console.log(`Listening on port ${port}`));