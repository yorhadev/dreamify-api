import * as dotenv from "dotenv";
import express, { Router } from "express";
import serverless from "serverless-http";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const app = express();
const router = Router();
const configuration = new Configuration({ apiKey: process.env.OPENAI });
const openai = new OpenAIApi(configuration);

router.get("/", (req, res) => {
  res.json({
    hello: "world",
  });
});

router.get("v1/create-image");

app.use("/.netlify/functions/api", router);

export const handler = serverless(app);
