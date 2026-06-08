import express from "express";
import { errorHendleMiddleWare, requestValidatorMiddleware } from "./middleware.js";
import { requestController } from "./controller.js";

const app = express();

app.use(express.json(), requestValidatorMiddleware);

app.post("/", requestController);

app.use(errorHendleMiddleWare);

export default app;