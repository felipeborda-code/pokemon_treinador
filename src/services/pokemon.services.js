import { pokemonRepository } from "../repositories/pokemon.repository.js";

class PokemonServices{
    async put(id,dados){
        const pokemonAtualizado = await pokemonRepository.putPokemon(id, dados)
        return pokemonAtualizado;
};
    async knex(id_pokemon,dados){
        const pokemonAtualizado = await pokemonRepository.knexPokemon(id_pokemon, dados)
        return pokemonAtualizado;
};
}

export const pokemonServices = new PokemonServices();