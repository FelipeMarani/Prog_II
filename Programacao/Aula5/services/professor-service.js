const professorRepository = require("../repositories/professor-repository");

//function for returned all professores
const retornaTodosProfessores = async (req, res) => {
    try {
        const professor = await professorRepository.obterTodosprofessores();
        res.status(200).json({professor: professor});
    } catch (error) {
        console.log("Erro ao buscar professores:", error);
        res.sendStatus(500);
    }
};

//Function for created a new professor
const criaProfessor = async (req, res) => {
    const { id, nome, email } = req.body;
    console.log({id, nome, email});
    try {
        if (!id || !nome || !email) {
            return res.status(400).json({message: "Id, nome e email são obrigatórios."});
        }
        const professor = await professorRepository.criarprofessor({
            id,
            nome,
            email,
        });
        res.status(201).json(professor);
    } catch (error) {
        console.log("Erro ao cria professor:", error);
        res.sendStatus(500);
    }
};

//Function for updated a professor
const atualizaProfessor = async (req, res) =>{
    const {nome, email} = req.body;
    const id = parseInt(req.params.id);
    try {
        const professorAtualizado = await professorRepository.atualizarprofessor({
            id,
            nome,
            email,
        });
        if (professorAtualizado) {
            res.status(200).json(professorAtualizado);
        }
        else{
            res.status(404).json({message: "Professor não encontrado."});
        }
    } catch (error) {
        console.log("Erro ao atualizar professor:", error);
        res.sendStatus(500);
    }
};


//function for deleted a professor
const deletaProfessor = async (req, res) =>{
    try {
        const id = parseInt(req.params.id);
        const professorRemovido = await professorRepository.deletarprofessor({id});

        if (professorRemovido) {
            res.status(200).json({
                message: "Professor removido com sucesso.",
                professor: professorRemovido,
            });
        }
        else{
            res.status(404).json({message: "Professor não encontrado."});
        };
    } catch (error) {
        console.error("Erro ao deletar professor: ", error);
        res.status(500).json({message: "Erro ao deletar professor."});
    } 
};

// Function for search professor by id
const retornaProfessorPorId = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const professor = await professorRepository.obterprofessorPorId({
            id,
        });

        if (professor) {
            res.status(200).json(professor);
        } else {
            res.status(404).json({ message: "Professor não encontrado." });
        }
    } catch (error) {
        console.log("Erro ao buscar professor:", error);
        res.sendStatus(500);
    }
};

module.exports ={
    retornaTodosProfessores,
    criaProfessor,
    atualizaProfessor,
    deletaProfessor,
    retornaProfessorPorId,
};