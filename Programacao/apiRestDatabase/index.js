const express = require('express');
const {alunos} = require("./database");

const app = express();
app.use(express.json());

const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port 8080`));


app.get("/alunos/all", (req, res) => {
    res.status(200).send(alunos);
});

app.get("/alunos/find", (req, res) =>{
    const id = parseInt(req.query.id);
    const SearchAluno = alunos.find(alunos => alunos.id === id);
    if(SearchAluno){
        res.send(SearchAluno).status(200);
    }
    else{
        res.send("Aluno não encontrado").send(404);
    }
});

app.post("/newaluno", (req, res) => {
    const id = req.body.id;
    const name = req.body.nome;
    const year = req.body.idade;

    const newAluno = {id: id, name: nome, year: idade};
    alunos.push(newAluno);
    res.status(200).send(alunos);
})

app.post("/alunos/editAluno", (req, res) =>{
    const id = parseInt(req.body.id);
    const name = req.body.nome;
    let year = req.body.idade;
    const SearchAluno = alunos.find(alunos => alunos.id === id);
    if (SearchAluno) {
        SearchAluno.age = year;
        SearchAluno.name = name;
        res.status(200).send(alunos);
    }
    else{
        res.status(404).send("Não foi possível encontrar o aluno.");
    }

});
