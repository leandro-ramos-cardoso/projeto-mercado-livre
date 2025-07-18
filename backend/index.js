import express from "express";

const app = express();

// app.listen(porta, funcao)
app.listen(3000, () => {
    console.log("Server running ...")
});