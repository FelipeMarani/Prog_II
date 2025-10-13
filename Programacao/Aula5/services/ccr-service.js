const ccrRepository = require("../repositories/ccr-repository");

//Função para retornar todos os ccr
const obterTodosCcr = async (req, res) => {
    try {
        const ccr = await ccrRepository.obterTodosCcr();
        res.status(200).json({ ccr: ccr });
    } catch (error) {
        console.log("Erro ao buscar ccr: ", error);
        res.sendStatus(500);
    }
};

//Função para criar um novo ccr
const criarCcr = async (req, res) => {
    const { id, descricao, ementa } = req.body;
    try {
        if (!id || !descricao || !ementa) {
            return res
                .status(400)
                .json({ message: "Id, descrição e ementa são obrigatórios." });
        }

        const ccr = await ccrRepository.criarCcr({
            id,
            descricao,
            ementa,
        });
        res.status(201).json(ccr);
    } catch (error) {
        console.log("Erro ao criar ccr: ", error);
        res.sendStatus(500);
    }
};

//Função para atualizar um ccr
const atualizarCcr = async (req, res) => {
    const { descricao, ementa } = req.body;
    const id = parseInt(req.params.id);
    try {
        const ccrAtualizado = await ccrRepository.atualizarCcr({
            id,
            descricao,
            ementa,
        });

        if (ccrAtualizado) {
            res.status(200).json({ ccrAtualizado });
        } else {
            res.status(404).json({ message: "ccr não encontrado" });
        }

    } catch (error) {
        console.log("Erro ao atualizar ccr:", error);
        res.sendStatus(500);
    }
};

//Função para deletar um ccr
const deletaCcr = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const ccrRemovido = await ccrRepository.deletarCcr({ id });

        if (ccrRemovido) {
            res.status(200).json({
                message: "ccr removido com sucesso",
                ccr: ccrRemovido,
            });
        } else {
            res.status(404).json({ message: "ccr não encontrado" });
        }

    } catch (error) {
        console.error("Error ao deletar ccr: ", error);
        res.status(500).json({ message: "Erro ao deletar ccr" });
    }
};

//função para buscar ccr por Id
const retornaCcrPorId = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const ccr = await ccrRepository.obterCcrPorId({
            id,
        });
        if (ccr) {
            res.status(200).json(ccr);
        } else {
            res.status(404).json({ message: "Ccr não encontrado." });
        }
    } catch (error) {
        console.log("Erro ao buscar ccr: ", error);
        res.sendStatus(500);
    }
};

module.exports = {
    obterTodosCcr,
    criarCcr,
    atualizarCcr,
    deletaCcr,
    retornaCcrPorId,

};
