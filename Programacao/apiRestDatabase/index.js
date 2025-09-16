const express = require('express');
const { alunos, curso, id_aluno_Curso } = require("./database");

const app = express();
app.use(express.json());

const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port 8080`));

app.get("/alunos/all", (req, res) => {
    res.status(200).send(alunos);
});

app.get("/alunos/find", (req, res) => {
    const id = parseInt(req.query.id);
    const SearchAluno = alunos.find(alunos => alunos.id === id);
    if (SearchAluno) {
        res.send(SearchAluno).status(200);
    }
    else {
        res.send("Aluno não encontrado").send(404);
    }
});

app.post("/newaluno", (req, res) => {
    const id = req.body.id;
    const name = req.body.nome;
    const year = req.body.idade;

    const newAluno = { id: id, name: nome, year: idade };
    alunos.push(newAluno);
    res.status(200).send(alunos);
})

app.post("/alunos/editAluno", (req, res) => {
    const id = parseInt(req.body.id);
    const name = req.body.nome;
    let year = req.body.idade;
    const SearchAluno = alunos.find(alunos => alunos.id === id);
    if (SearchAluno) {
        SearchAluno.age = year;
        SearchAluno.name = name;
        res.status(200).send(alunos);
    }
    else {
        res.status(404).send("Não foi possível encontrar o aluno.");
    }
});


app.get("/curso/all", (req, res) => {
    res.status(200).send(curso);
});

app.get("/curso/find", (req, res) => {
    const id = parseInt(req.query.id);
    const searchCurso = curso.find(curso => curso.id === id);
    if (searchCurso) {
        res.status(200).send(searchCurso);
    }
    res.status(404).send("Aluno não encontrado");
});

app.post("/curso/NewCurso", (req, res) =>{
    const id = req.body.id;
    const name = req.body.name;
    try {
        if (!id || !name) {
            res.status(412).send("Informações faltantes!!");
        }
        const newCurso = {id : id, name : name};
        curso.push(newCurso);
        res.status(200).send(curso);
        
    } catch (error) {

        res.status(400).send("Informações ou dados errados");
        
    }
});

app.post("/curso/editCurso", (req, res) =>{
    const id = parseInt(req.body.id);
    const name = req.body.name;
    try {
        if (!id || !name) {
            res.status(412).send("Informações faltantes!!");
        };
        const searchCurso = curso.find(curso => curso.id === id);
        if (searchCurso) {
            searchCurso.name = name;
        };
        
    } catch (error) {
        res.status(404).send("Não foi possível encontrar o curso.");
    }
})

const alunoswhitCourse = alunos.map(aluno =>{
    const relation = id_aluno_Curso.find(relation =>relation.alunoId === aluno.id);
    let nameCourse = null;
    if(relation){
        const courseSearch = curso.find(course => course.id === relation.cursoId);
        if (courseSearch) {
            nameCourse = courseSearch.name;
        }
    }
})

app.post("/curso/aluno", (req, res) =>{
    const idCourse = parseInt(req.body.id_Curso);
    const idAluno = parseInt(req.body.id_Aluno);
    try {
        if (!idCourse || !idAluno) {
            res.status(412).send("Informações faltantes!!");
        }
        const newRelationCourse = {idCourse : id_Curso, idAluno: id_Aluno};
        id_aluno_Curso.push(newRelationCourse);
        res.status(200).send(id_aluno_Curso);
    } catch (error) {
        res.status(400).send("Informações ou dados errados");
    }
})
