import { treinadorServices } from "../services/treinador.services.js";
import { Router } from "express";

export const treinadorRouter = Router();

treinadorRouter.put("/treinador/:id", async (req, res) => {
    const treinadorId = req.params.id
    try {
        const treinador = await treinadorServices.put(treinadorId, req.body);
        res.status(200).json(treinador);
    } catch (error) {
        res.status(500).json({error: "Erro ao atualizar o treinador"})
    }
});
treinadorRouter.patch("/treinador/:id", async (req, res) => {
    const treinadorId = req.params.id
    try {
        const treinador = await treinadorServices.knex(treinadorId, req.body);
        res.status(200).json(treinador);
    } catch (error) {
        res.status(500).json({error: "Erro ao atualizar o treinador"})
    }
});