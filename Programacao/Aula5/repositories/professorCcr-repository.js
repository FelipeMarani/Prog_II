const { where } = require("sequelize");
const model = require("../models");
const professorCcr = require("../models/professorCcr");

//Função para obter todos os ccrs
const obterTodosProfessorCcr = async () => {
    return await model.ProfessorCcr.findAll();
};

//Função para obter ccr por ID do professor
const obterCcrPorIdProfessor = async (id_professor) => {
    return await model.ProfessorCcr.findAll({
        where: {
            id_professor: id_professor,
        },
        include: [
            {
                model: model.Ccr,
            },
        ],
    });
};

//Função para obter Professor por Id do CCr
const obterProfessorPorIdCcr = async (id_ccr) => {
    return await model.ProfessorCcr.findAll({
        where: {
            id_ccr: id_ccr,
        },
        include: [
            {
                model: model.Professor,
            },
        ],
    });
};

//Funçao para criar um novo ProfessorCcr
const criaProfessorCcr = async (ProfessorCcr) => {
    await model.ProfessorCcr.create(professorCcr);
    return professorCcr;
}

//Função para atualizar o relacionamento entre professor e ccr
const atualizaprofessorCcr = async (professorCcr) => {
    try {
        //atualizar o professor
        await model.ProfessorCcr.update(professor, {
            where: { id_professor: professorCcr.id_professor },
        });

        //Retorna os ccr atualizados
        return await model.ProfessorCcr.findByPk(professorCcr.id_professor);
    } catch (error) {
        throw error;
    }
};

//Função para deletar um professorCcr
const deletaprofessorCcr = async (id_professor) => {
    try {
        const professorCcr = await obterCcrPorIdProfessor(id_professor);
        //deletar o professor
        await model.professorCcr.destroy({ where: { id_professor: id_professor } });

        return professorCcr;

    } catch (error) {
        throw error;
    }
}

module.exports = {
    obterTodosProfessorCcr,
    obterCcrPorIdProfessor,
    obterProfessorPorIdCcr,
    criaProfessorCcr,
    atualizaprofessorCcr,
    deletaprofessorCcr

};
