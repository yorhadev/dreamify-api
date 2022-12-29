const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "world",
  });
});

app.use("/.netlify/functions/api");

module.exports.handler = serverless(app);