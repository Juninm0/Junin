const express = require('express');
const fs = require('fs');
const cors = require("cors");

const app = express();
const port = 5487;
const caminhoArquivosDados = "dados.json";

app.use(cors());

app.get("/projetos", (req, res) => {
    try {
        const dados = fs.readFileSync(caminhoArquivosDados, "utf-8")
        const projetos = JSON.parse(dados);
        res.json(projetos);
    }
    catch (erro) {
        res.status(500).json({ mensagem: "Falha ao ler o arquivo de dados. " });
    }  
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});

