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

// console.log(allLessons)

// -------------------------------
// Exercício 6

// Cria um Array com os objetos e utiliza um for in para obter todos os valores
const studentCounter = (obj) => {
    const arr = Object.keys(obj);
    let count = 0
    for (i in arr) {
        count = count + obj[arr[i]]['numeroEstudantes']
    }
    return count
} 

// console.log(studentCounter(allLessons))

// -------------------------------
// Exercício 7

const getValueByNumber = (obj, keyIndex) => {
    const arr = Object.keys(obj);
    return obj[arr[keyIndex]]
}

// console.log(getValueByNumber(lesson1, 0));

// -------------------------------
// Exercício 8

const verifyPair = (obj, key, value) => {
    const keyArr = Object.keys(obj)
    const valueArr = Object.values(obj)

    return keyArr.indexOf(key) === valueArr.indexOf(value) ? true : false
}

// console.log(verifyPair(lesson3, 'turno', 'noite'));
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

// -------------------------------
// Bônus Exercício 1

const classCounter = (obj, value) => {
    const lessonArr = Object.keys(obj)
    let students = 0
    for (index in lessonArr) {
        if (obj[lessonArr[index]].materia === value) {
            students = students + obj[lessonArr[index]].numeroEstudantes
        }
    }
    return students
}

// console.log(classCounter(allLessons, 'Matemática'))

// -------------------------------
// Bônus Exercício 2

const teacherReport = (obj, teacher) => {
    const lessonArr = Object.keys(obj)
    let report = {
        professor: teacher,
        aulas: [],
    }
    let classes = [];
    let students = 0;
    for (index in lessonArr) {
        if (obj[lessonArr[index]].professor === teacher) {
            classes.push(obj[lessonArr[index]].materia)
            students = students + obj[lessonArr[index]].numeroEstudantes
        }
    }

    Object.assign(report.aulas, {classes})
    report.estudantes = students

    return report
}

console.log(teacherReport(allLessons, 'Maria Clara'))
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */