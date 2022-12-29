import * as dotenv from "dotenv";
import express, { Router } from "express";
import cors from "cors";
import serverless from "serverless-http";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const app = express();
const router = Router();
const configuration = new Configuration({ apiKey: process.env.OPENAI });
const openai = new OpenAIApi(configuration);

app.use(cors());
app.use(express.json());
app.use("/.netlify/functions/api", router);

router.get("/", (req, res) => {
  res.json({
    hello: "worldz",
  });
});

router.get("/v1/create", async (req, res) => {
  res.json({
    firstName: "lalalala",
    lastName: "lolololo",
  });
});

export const handler = serverless(app);
