import { treinadorServices } from "../services/treinador.services.js";

class TreinadorController {

    async put(req, res) {
    const treinadorId = req.params.id
    try {
        const treinador = await treinadorServices.put(treinadorId, req.body);
        res.status(200).json(treinador);
    } catch (error) {
        res.status(500).json({error: "Erro ao atualizar o treinador"})
    }
}

    async knex (req, res) {
    const treinadorId = req.params.id
    try {
        const treinador = await treinadorServices.knex(treinadorId, req.body);
        res.status(200).json(treinador);
    } catch (error) {
        res.status(500).json({error: "Erro ao atualizar o treinador"})
    }
}

}

export const treinadorController = new TreinadorController();