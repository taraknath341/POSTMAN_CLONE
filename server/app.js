import express from "express";
import { errorHendleMiddleWare, requestValidatorMiddleware } from "./middleware.js";
import { requestController } from "./controller.js";

const app = express();

app.use(express.static("client"), express.json());

app.post("/", requestValidatorMiddleware, requestController);

app.use(errorHendleMiddleWare);

export default app;