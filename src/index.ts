import "./loadEnvironment.js";
import express from "express";
import knownThingsRouter from "./routers/knownThingsRouter.js";

const app = express();
const port = process.env.PORT ?? 4000;

app.use(express.json());
app.use("/", knownThingsRouter);

app.listen(port, () => {
  console.log(`Server is listening on ${port} port`);
});
