const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Página inicial")
});
app.get("/sobre/:nome/:profissao/:cor", function(req, res){
    res.send("Página Sobre você: "+ " seu nome é " + req.params.nome + " sua profissão é "+ req.params.profissao+ " e sua cor favorita é "+req.params.cor);
});

app.listen(8081, function(){
    console.log("Servidor rodando")
});