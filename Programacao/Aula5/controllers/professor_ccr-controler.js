const express = require("express");
const professorCcrService = require("../services/professorCcr-service");

const professorCcrRouter = express.Router();

// POST /professorCcr - Criar nova professorCcr
professorCcrRouter.post("/", professorCcrService.criaProfessorCcr);

// GET /professorCcrs - Retornar todas as professorCcrs
professorCcrRouter.get("/todos", professorCcrService.retornaTodosprofessorCcrs);

// GET /professorCcr/professor/:id_professor - Retornar todas as ccrs do professor
professorCcrRouter.get("/professor/:id_professor", professorCcrService.retornaprofessorCcr);

// GET /professorCcr/ccr/:id_ccr - Retornar todos os professores do ccr
professorCcrRouter.get("/ccr/:id_ccr", professorCcrService.retornaTodosprofessorCcrs);

// PUT /professorCcr/:id_professor - Atualizar professorCcr
professorCcrRouter.put("/:Id_professor", professorCcrService.atualizaprofessorCcr);

// DELETE /professorCcr/:id_professor - Deletar professorCcr
professorCcrRouter.delete("/:id_professor", professorCcrService.deletaprofessorCcr);

module.exports = professorCcrRouter;
