//Básicamente, las Promesas son similares a los Eventos, con las siguientes diferencias:

//Una promesa solo puede tener éxito o fracasar una única vez. No puede tener éxito o fallar por una 2da vez, ni cambiar de éxito a fallo posteriormente, o viceversa.
//Si una promesa ha sido exitosa o ha fallado, y más adelante (recién) registramos un callback de success o failure, la función de callback correspondiente será llamada (incluso si el evento tuvo lugar antes).//

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 300);
});

myPromise
    .then(handleResolvedA, handleRejectedA)
    .then(handleResolvedB, handleRejectedB)
    .then(handleResolvedC, handleRejectedC);