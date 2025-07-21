import express from "express";

const app = express();

// Middleware - Algo que roda no meio entre o inicio do app e as requisicoes.
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World!!")
})

app.post("/", (req, res) => {
    // Desestruturação
    // Váriavel body esta recebendo o que tem dentro da chave body do req
    // const body = req.body;

    const { body } = req;
    const { nome, imersao } = body;
    
    // console.log(body.nome)
    // console.log(body.imersao)

    res.json({ nome, imersao })
})

app.post("/produto/:id", (req, res) => {
    const { body } = req;
    const { nome, imersao } = body;
    res.json({ nome, imersao })
    const id = req.params.id

    console.log(id)
})

// app.listen(porta, funcao)
app.listen(3000, () => {
    console.log("Server running ...")
});