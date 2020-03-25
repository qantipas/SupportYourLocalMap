const pinRoutes = require("./routes/api/pins");
const express = require("express");
const connectDB = require("./config/db");

const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();

// Connect Database
connectDB();

// CORS Middleware
app.use(cors());
// Logger Middleware
app.use(morgan("dev"));
// Bodyparser Middleware
app.use(bodyParser.json());
app.get("/", (req, res) => res.send("Hello world!"));
app.use("/api/", pinRoutes);
const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
