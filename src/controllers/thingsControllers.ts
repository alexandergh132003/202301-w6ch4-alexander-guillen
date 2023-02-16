import { Request, Response } from "express";
import knownThings from "../knownThings/knownThings.js";
import { Thing, Things } from "../knownThings/types.js";

const getKnownThings = (req: Request, res: Response) => {
  res.status(200).json(knownThings);
};

const getKnownThing = (req: Request, res: Response) => {
  const thingId = +req.params.idThing;
  const requestedThing = knownThings.find(({ idThing }) => idThing === thingId);

  res.status(200).json(requestedThing);
};

const deleteKnownThing = (req: Request, res: Response) => {
  const thingId = +req.params.idThing;
  const filteredKnownThings = knownThings.filter(
    ({ idThing }) => idThing !== thingId
  );

  res.status(200).json(filteredKnownThings);
};

const createKnownThing = (req: Request, res: Response) => {
  const newKnwonThing: Thing = req.body;
  knownThings.push({ ...newKnwonThing, idThing: Date.now() });

  res.status(200).json(knownThings);
};

export const modifyKnownThing = (req: Request, res: Response) => {
  const modifiedKnownThing: Thing = req.body;
  const newKnownThings: Things = knownThings.map((currentKnownThing) =>
    currentKnownThing.idThing === modifiedKnownThing.idThing
      ? modifiedKnownThing
      : currentKnownThing
  );

  res.status(200).json(newKnownThings);
};
