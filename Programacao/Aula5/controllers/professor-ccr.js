const express = require("express");
const professorCcrSrvice = require("../services/professorCcr-service");

const professorCcrRouter = express.Router();

// POST /professorCcr - Criar nova professorCcr
professorCcrRouter.post("/", professorCcrService.criaProfessorCcr);

// GET /professorCcrs - Retornar todas as professorCcrs
professorCcrRouter.get("/", professorCcrService.retornaprofessorCcr);

// GET /professorCcr/:id_professor - Retornar todas as ccrs do professor
professorCcrRouter.get("/aluno/:id_professor", professorCcrService.retornaProfessorCcr);

// GET /professorCcr/:id_ccr - Retornar todos os professores do ccr
professorCcrRouter.get("/curso/:id_ccr", professorCcrService.retornaTodosprofessorCcrs);

// PUT /professorCcr/:id_professor - Atualizar professorCcr
professorCcrRouter.put("/:Id_professor", professorCcrService.atualizaprofessorCcr);

// DELETE /professorCcr/:id_professor - Deletar professorCcr
professorCcrRouter.delete("/:id_professor", professorCcrService.deletaprofessorCcr);

module.exports = professorCcrRouter;
