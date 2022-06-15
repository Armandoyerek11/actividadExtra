// filter sirve para filtrar datos //
// ejemplo aquellos que no cumplan el valor no son filtrados //
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);