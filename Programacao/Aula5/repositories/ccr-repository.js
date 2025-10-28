const { where } = require("sequelize");


//Função para obter todos os CCr's
const obterTodosCcr = async () => {
    return await model.Ccr.findAll();
};

//Função para obter ccr por id
const obterCcrPorId = async (Ccr) => {
    return await model.Ccr.findByPk(Ccr.id);
};

//Função para criar um novo ccr
const criarCcr = async (Ccr) => {
    await model.Ccr.create(Ccr);
    return Ccr;
};

//Função para atualizar um ccr
const atualizarCcr = async (Ccr) => {
    try {
        //Atualizar o ccr
        await model.Ccr.update(Ccr, { where: { id: Ccr.id } });

        //Retorna o ccr atualizado
        return await model.Ccr.findByPk(Ccr.id);
    } catch (error) {
        throw error;
    }
};

//Função para deletar um ccr
const deletarCcr = async (Ccr) => {
    try {
        //Deletar Ccr
        await model.Ccr.destroy({ where: { id: Ccr.id } });

        return Ccr;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    obterTodosCcr,
    obterCcrPorId,
    criarCcr,
    atualizarCcr,
    deletarCcr,

};
