let alunos = [
    {
        name: "Aluno 01",
        age: 20,
        id: 1,

    },
    {
        name: "Aluno 02",
        age: 25,
        id: 2,

    },
    {
        name: "Aluno 03",
        age: 22,
        id: 3,

    },
    {
        name: "Aluno 04",
        age: 30,
        id: 4,

    }
];

let curso =[

    {
        id: 1,
        name: "Ciencia da computação",
    },

    {
        id: 2,
        name: "História",
    },

    {
        id: 3,
        name: "Matemática",
    }

];

let id_aluno_Curso = [
    {
        alunoId: 1,
        cursoId: 2,
    },

    {
        alunoId: 2,
        cursoId: 1,
    },

    {
        alunoId: 3,
        cursoId: 1,
    },

    {
        alunoId: 4,
        cursoId: 3,
    }
];

module.exports = { alunos, curso, id_aluno_Curso };
