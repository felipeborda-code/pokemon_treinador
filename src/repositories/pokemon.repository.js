import { pool } from "../database/db.js";
import { knex } from "../database/knex.js";

class PokemonRepository{
    async putPokemon(id,dados){
        const res = await pool.query("UPDATE pokemon SET nome=$2,nivel=$3,tipo=$4 WHERE id_pokemon=$1 RETURNING *",
        [id,dados.nome,dados.nivel,dados.tipo]);
        return {
            message: "pokemon atualizado com sucesso",
            treinador: res.rows[0]
        }
    };
    async knexPokemon(id_pokemon,dados){
        const res = await knex("pokemon").where({id_pokemon}).update(dados).returning("*")
        return {
            message: "pokemon atualizado com sucesso",
            res
        }
    };
};

export const pokemonRepository = new PokemonRepository();