const professorCcrRepository = require("../repositories/professorCcr-repository");

//Função para retornar todos os professorCcr
const retornaprofessorCcr = async (req, res) => {
    try {
        const ccr = await professorCcrRepository.obterTodosProfessorCcr();
        res.status(200).json({ ccr: professorCcrRepository })
    } catch (error) {
        console.log("Erro ao buscar professores e ccr:", error);
        res.sendStatus(500);
    }
};

//Função para retorar todos os ccr do professor
const retornaProfessorCcr = async (req, res) => {
    try {
        const professorCcr = await professorCcrRepository.obterCcrPorIdProfessor(req.params.id_professor);
        res.status(200).json({ professorCcr: professorCcr });
    } catch (error) {
        console.log("Erro ao buscar Ccr's:", error);
        res.sendStatus(500);
    }
};

//Função para obter professor por id do ccr
const retornaTodosprofessorCcrs = async (req, res) => {
    try {
        const professorCcr = await professorCcrRepository.obterProfessorPorIdCcr(req.params.id_ccr);
        res.status(200).json({ professorCcr: professorCcr })

    } catch (error) {
        console.log("Erro ao buscar ccr's: ", error);
        res.sendStatus(500);
    }
};

//Função para criar novo relacionamento entre professor e ccr
const criaProfessorCcr = async (req, res) => {
    const {id_professor, id_ccr} = req.body;
    try {
        if (!id_professor || !id_ccr) {
            return res
                .status(400)
                .json({ message: "ID do professor e ccr são obrigatórios. " });
        }

        const professorCcr = await professorCcrRepository.criaProfessorCcr({
            id_professor,

            id_ccr,
        });

    } catch (error) {
        console.log("Erro ao criar matricula: ", error);
        res.sendStatus(500);

    }
};

//Função para atualizar um relacionamento entre professor e ccr
const atualizaprofessorCcr = async (req, res) => {
    const { id_ccr } = req.body;
    const id_professor = parseInt(req.params.id_professor);

    try {
        const professorCcrAtualizado =
            await professorCcrRepository.atualizaprofessorCcr({
                id_professor,
                id_ccr,
            });

        if (professorCcrAtualizado) {
            res.status(200).json(professorCcrAtualizado);
        } else {
            res.status(404).json({ message: "ccr não encontrada!" });
        }

    } catch (error) {
        console.log("Erro ao atualizar ccr: ", error);
        res.sendStatus(500);
    }

};


//Função para deletar um professorCcr
const deletaprofessorCcr = async (req, res) => {
    try {
        const id_professor = parseInt(req.params.id_professor);
        const professorCcrRemovido = await professorCcrRepository.deletaprofessorCcr(id_professor);

        if (professorCcrRemovido) {
            res.status(200).json({
                message: "Professor_ccr removido com sucesso. ",
                professorCcr: professorCcrRemovido,
            });
        } else {
            res.status(404).json({ message: "professor_ccr não encontrado" });
        }

    } catch (error) {
        console.error("Erro ao deletar professor_ccr: ", error);
        res.status(500).json({ message: "Erro ao deletar professor_ccr" });
    }
};

module.exports = {
    retornaprofessorCcr,
    retornaProfessorCcr,
    retornaTodosprofessorCcrs,
    criaProfessorCcr,
    atualizaprofessorCcr,
    deletaprofessorCcr,
};
