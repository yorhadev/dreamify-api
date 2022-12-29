import * as dotenv from "dotenv";
dotenv.config();

const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: process.env.OPENAI,
  });
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
