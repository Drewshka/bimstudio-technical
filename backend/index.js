const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
const cors = require("cors");

const buildingRoutes = require("./routes/buildings");

// middleware to give us access to req.body
app.use(cors());
app.use(express.json());

app.use("/buildings", buildingRoutes);
app.listen(port, () => console.log(`Listening on port ${port}`));
