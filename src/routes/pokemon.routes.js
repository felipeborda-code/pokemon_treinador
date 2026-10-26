import { pokemonServices } from "../services/pokemon.services.js";
import { Router } from "express";

export const pokemonRouter = new Router();

pokemonRouter.put("/pokemon/:id", async (req, res) => {
    const pokemonId = req.params.id
    try {
        const pokemon = await pokemonServices.put(pokemonId, req.body);
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(500).json({error: "Erro ao atualizar o pokemon"})
    }
});
pokemonRouter.patch("/pokemon/:id", async (req, res) => {
    const pokemonId = req.params.id
    try {
        const pokemon = await pokemonServices.knex(pokemonId, req.body);
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(500).json({error: "Erro ao atualizar o pokemon"})
    }
});