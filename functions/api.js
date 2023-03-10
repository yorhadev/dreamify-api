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

router.post("/v1/create", async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const n = 1;
    const size = "1024x1024";
    const response = await openai.createImage({ prompt, n, size });
    const image = response.data.data[0].url;
    res.send({ image });
  } catch (e) {
    res
      .status(500)
      .send(e?.response.data.error.message || "Something went wrong");
  }
});

export const handler = serverless(app);
