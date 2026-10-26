import express from "express";
import { pokemonRouter } from "./routes/pokemon.routes.js";
import { treinadorRouter } from "./routes/treinador.routes.js";

const port = 3000;
const app = express();

app.use(express.json());
app.use("/", pokemonRouter);
app.use("/", treinadorRouter);

app.listen(port, ()=>{
    console.log(`API rodando em: http://localhost:${port}`)
});