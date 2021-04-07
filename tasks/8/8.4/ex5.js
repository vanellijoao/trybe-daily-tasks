const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const arrayOfLetters = (names.reduce((name, nextName) => { return (name + nextName).toLowerCase() }, [])).split('')
  return arrayOfLetters.reduce((count, letter) => letter === 'a' ? count + 1 : count, 0)
}

console.log(containsA())

assert.deepStrictEqual(containsA(), 20);