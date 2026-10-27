import { pokemonController } from "../controllers/pokemon.controller.js";
import { Router } from "express";

export const pokemonRouter = Router();

pokemonRouter.put("/:id", pokemonController.putPokemon);
pokemonRouter.patch("/:id", pokemonController.knexPokemon);
