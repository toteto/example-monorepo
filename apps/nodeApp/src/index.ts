import express from "express";
import { libFunction } from "@example/lib";

const app = express();
const port = 3000;

app.get("/", (_req, res) => {
  libFunction();
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
