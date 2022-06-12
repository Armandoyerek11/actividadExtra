//reduce es un array metodo que regresa el valor anterior el valor actual y un indice actual //
//esto sirve para un registro de los ultimos numeros dados de alguna compra etc//
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
);

console.log(sumWithInitial);