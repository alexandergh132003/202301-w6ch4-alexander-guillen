import { Router } from "express";
import {
  createKnownThing,
  deleteKnownThing,
  getKnownThing,
  getKnownThings,
  modifyKnownThing,
} from "../controllers/thingsControllers.js";

export const thingsEndpoint = "/things";
const thingEndpoint = "/things/:idThing";

const knownThingsRouter = Router();

knownThingsRouter.get(thingsEndpoint, getKnownThings);
knownThingsRouter.get(thingEndpoint, getKnownThing);
knownThingsRouter.delete(thingEndpoint, deleteKnownThing);
knownThingsRouter.post(thingsEndpoint, createKnownThing);
knownThingsRouter.put(thingsEndpoint, modifyKnownThing);

export default knownThingsRouter;
