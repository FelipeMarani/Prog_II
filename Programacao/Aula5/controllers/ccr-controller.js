const express = require("express");
const ccrService = require("../services/ccr-service");

const ccrRouter = express.Router();

//Post /ccr - criar novo ccr
ccrRouter.post("/", ccrService.criarCcr);

//GET /ccr - Retornar todos os ccr
ccrRouter.get("/todos", ccrService.obterTodosCcr);

//GET /curso/:id - Retorna ccr por id
ccrRouter.get("/:id", ccrService.retornaCcrPorId);

//PUT /ccr/:id - Atualiza ccr
ccrRouter.put("/:id", ccrService.atualizarCcr);

//DELETE /ccr/:id - Deleta ccr
ccrRouter.delete("/:id", ccrService.deletaCcr);

module.exports = ccrRouter;
