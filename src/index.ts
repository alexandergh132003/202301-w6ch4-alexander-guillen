import "./loadEnvironment.js";
import express from "express";
import morgan from "morgan";
import knownThingsRouter from "./routers/knownThingsRouter.js";
import inquirer from "inquirer";
import serverSetupQuestions from "./serverSetupQuestions/serverSetupQuestions.js";

const serverSetup = async () => {
  const app = express();
  const answers = await inquirer.prompt(serverSetupQuestions);

  const port = +answers.desiredPort ?? process.env.PORT ?? 4000;

  app.use(express.json());
  app.use("/", knownThingsRouter);
  app.use(morgan("dev"));

  app.listen(port, () => {
    console.log(`Server is listening on ${port} port`);
  });
};

serverSetup();
