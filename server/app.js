import express from "express";
import { requestController } from "./controller.js";

const app = express();

app.use(express.json());

app.post("/", requestController);

export default app;