//La función replace de JavaScript o JavaScript Replace nos sirve para remplazar caracteres dentro de una cadena de texto. Principales características del método o función JavaScript replace: El método replace() busca una cadena o un valor especificado y devuelve una cadena con los valores especificados reemplazados.//
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"


const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));