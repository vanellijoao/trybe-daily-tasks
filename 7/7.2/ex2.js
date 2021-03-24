const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

// Exercício 1

// Adicionando qualquer chave e valor a qualquer objeto
const add = (object, key, value) => {
    object[key] = value;
}

// Adicionando turno: 'manhã' ao objeto lesson2
add(lesson2,'turno','manhã')

console.log(lesson2)

// -------------------------------
// Exercício 2

