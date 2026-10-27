import { treinadorController } from "../controllers/treinador.controller.js";
import { Router } from "express";

export const treinadorRouter = Router();

treinadorRouter.put("/:id", treinadorController.put);
treinadorRouter.patch("/:id", treinadorController.knex);