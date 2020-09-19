import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", (request: Request, response: Response) => {
  return response.send({ Hello: "World" });
});

export { app };
