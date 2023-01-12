const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {
    let total = 0;
    for(let i = 0; i < param.length; i++){
        if(typeof param[i] === "number"){
            total += param[i]}
        else if (typeof param[i] === "string"){
            total += param[i].length}
        }
        return total;
    }

console.log(averageWord(mixedElements))


    
/* Todos estos ejercicios se pueden hacer con el loop for of e imagino que con otros
 pero como los voy haciendo del tiron me sale más facil copiando y pegan el loop off y siguiendo con esa sintaxis
 si quiero practicar a automatizar el usar indistintamente uno u otro puedo practicar cambiando lo que ya he hecho y añadiendo como comentario
 const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {
    let total = 0;
    for(const item of param){
        if(typeof item === "number"){
            total += item}
        else if (typeof item === "string"){
            total += item.length}
        }
        return total;
    }

console.log(averageWord(mixedElements))*/
