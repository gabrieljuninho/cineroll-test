import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";

const app: Application = express();

dotenv.config();

const PORT: number = Number(process.env.SERVER_PORT);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
