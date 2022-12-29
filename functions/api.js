import * as dotenv from "dotenv";
import express, { Router } from "express";
import serverless from "serverless-http";

const env = dotenv;
const app = express();
const router = Router();

env.config();

router.get("/", (req, res) => {
  res.json({
    hello: process.env.OPENAI,
  });
});

router.get("v1/create-image");

app.use("/.netlify/functions/api", router);

export const handler = serverless(app);
