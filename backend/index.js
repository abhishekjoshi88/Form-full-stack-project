const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const db = require("./db");
const cors = require("cors");

const app = express();
//TODO make env file
const port = process.env.PORT || 3001;
//TODO use express.json() parser
app.use(bodyParser.json());
db;

// Configure CORS to allow requests from http://localhost:3000
const allowedOrigins = ["http://localhost:3000"];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));
// Routes
app.use("/api", routes);
// Enable CORS for all routes

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
