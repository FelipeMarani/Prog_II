const express = require("express");
const alunoRouter = require("./controllers/aluno-controller");
const cursoRouter = require("./controllers/curso-controller");
const matriculaRouter = require("./controllers/matricula-controller");
const professorRouter = require("./controllers/professor-controller");

const app = express();
app.use(express.json());

const PORT = 3002;
app.listen(PORT, () => console.log(`Servidor está rodando na porta ${PORT}.`));

// Usar o router de alunos
app.use("/aluno", alunoRouter);
app.use("/curso", cursoRouter);
app.use("/matricula", matriculaRouter);
app.use("/professor", professorRouter);
