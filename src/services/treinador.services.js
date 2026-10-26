import { pool } from "../database/db.js";
import { knex } from "../database/knex.js";

class TreinadorServices{
    async put(id,dados){
        const res = await pool.query("UPDATE treinador SET nome=$2 WHERE id_treinador=$1 RETURNING *",
        [id,dados.nome]);
        return {
            message: "treinador atualizado com sucesso",
            treinador: res.rows[0]
        }
    };
    async knex(id_treinador,dados){
        const res = await knex("treinador").where({id_treinador}).update(dados).returning("*")
        return {
            message: "treinador atualizado com sucesso",
            res
        }
    };
};

export const treinadorServices = new TreinadorServices();