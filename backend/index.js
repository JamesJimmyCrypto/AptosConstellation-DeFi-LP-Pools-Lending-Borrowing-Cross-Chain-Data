const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Import routes
const liquidityRoutes = require("./routes/liquidity");
// const lendingRoutes = require("./routes/lending");

app.use("/api/liquidity", liquidityRoutes);
// app.use("/api/lending", lendingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
