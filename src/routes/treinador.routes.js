import { treinadorController } from "../controllers/treinador.controller.js";
import { Router } from "express";

export const treinadorRouter = Router();

treinadorRouter.put("/:id", treinadorController.putTreinador);
treinadorRouter.patch("/:id", treinadorController.knexTreinador);