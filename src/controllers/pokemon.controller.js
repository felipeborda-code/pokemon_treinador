import { pokemonServices } from "../services/pokemon.services.js";

class PokemonController {

    async put(req, res) {
    const pokemonId = req.params.id
    try {
        const pokemon = await pokemonServices.put(pokemonId, req.body);
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(500).json({error: "Erro ao atualizar o pokemon"})
    }
}

    async knex (req, res) {
    const pokemonId = req.params.id
    try {
        const pokemon = await pokemonServices.knex(pokemonId, req.body);
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(500).json({error: "Erro ao atualizar o pokemon"})
    }
}

}

export const pokemonController = new PokemonController();