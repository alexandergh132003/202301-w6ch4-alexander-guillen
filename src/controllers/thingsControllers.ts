import { Request, Response } from "express";
import knownThings from "../data/knownThings.js";
import { Thing, Things } from "../data/types.js";

export const getKnownThings = (req: Request, res: Response) => {
  res.status(200).json(knownThings);
};

export const getKnownThing = (req: Request, res: Response) => {
  const thingId = +req.params.idThing;
  const requestedThing = knownThings.find(({ idThing }) => idThing === thingId);

  res.status(200).json(requestedThing);
};

export const deleteKnownThing = (req: Request, res: Response) => {
  const thingId = +req.params.idThing;
  const matchedThing = knownThings.find(({ idThing }) => idThing === thingId)!;
  const matchedThingIndex = knownThings.indexOf(matchedThing);
  knownThings.splice(matchedThingIndex, 1);

  res.status(200).json(knownThings);
};

export const createKnownThing = (req: Request, res: Response) => {
  const newKnwonThing: Thing = req.body;
  knownThings.push({ ...newKnwonThing, idThing: Date.now() });

  res.status(200).json(knownThings);
};

export const modifyKnownThing = (req: Request, res: Response) => {
  const modifiedKnownThing = req.body;
  const modifiedKnownThingKeys = Object.keys(modifiedKnownThing);
  const hasThingProperties =
    modifiedKnownThingKeys.includes("idThing") &&
    modifiedKnownThingKeys.includes("name") &&
    modifiedKnownThing.length === 2;

  if (hasThingProperties) {
    knownThings.forEach(({ idThing }, index) => {
      if (idThing === (modifiedKnownThing as Thing).idThing) {
        knownThings[index] = modifiedKnownThing;
      }
    });

    res.status(200).json(knownThings);
  } else {
    res.status(400).send(`
    Bad Request
    The request could not be understood by the server due to malformed object syntax. 
    Object should only include 'name' and 'idThing' properties.
    `);
  }
};
