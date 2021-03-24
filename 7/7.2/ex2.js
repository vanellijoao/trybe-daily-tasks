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

// console.log(lesson2)

// -------------------------------
// Exercício 2
const keyList = (obj) => {
    return Object.keys(obj)
}

// console.log(keyList(lesson1))

// -------------------------------
// Exercício 3
const objLength = (obj) => {
    return keyList(obj).length
}

// console.log(objLength(lesson3))

// -------------------------------
// Exercício 4
const valueList = (obj) => {
    return Object.values(obj)
}

// console.log(valueList(lesson1))

// -------------------------------
// Exercício 5

let allLessons = {}

Object.assign(allLessons, {lesson1, lesson2, lesson3})

console.log(allLessons)