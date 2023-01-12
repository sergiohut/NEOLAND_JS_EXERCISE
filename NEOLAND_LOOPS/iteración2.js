const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
] 

for (let i = 0; i < alumns.length; i++){
	if(alumns[i].T1 === true && alumns[i].T2 === true) {alumns[i].isApproved =true}
	else if (alumns[i].T1 === true && alumns[i].T3 === true) {alumns[i].isApproved =true}
	else if (alumns[i].T2 === true && alumns[i].T3 === true) {alumns[i].isApproved =true}
  	else {alumns[i].isApproved =false}
}


console.log(alumns)






/*Vale, si tengo que utilizar el loop forEach, ver que me imprime exactamente. Imprime todos los objetos del array 

alumns.forEach((alumn)=>{console.log(alumn)})*/


/*Conseguir que recorra una propiedad del array de objetos y compruebe su valor

alumns.forEach((alumn)=>{if(alumn.T1 === true) {console.log(alumn)}})*/

/* Comprobar todas las combinaciones posibles para que apruebe. 
alumns.forEach((alumn)=>{
	if(alumn.T1 === true && alumn.T2 === true) {console.log(alumn)}
	else if (alumn.T1 === true && alumn.T3 === true) {console.log(alumn)}
	else if (alumn.T2 === true && alumn.T3 === true) {console.log(alumn)}
}) */

/* Me habia liado por las pistas que dan y no sabia si habia que utilizar el for como dicen en el enunciado o el forEach como dicen en las pistas

alumns.forEach((alumn)=>{
	if(alumn.T1 === true && alumn.T2 === true) {alumn.isApproved =true}
	else if (alumn.T1 === true && alumn.T3 === true) {alumn.isApproved =true}
	else if (alumn.T2 === true && alumn.T3 === true) {alumn.isApproved =true}
  	else {{alumn.isApproved =false}}
})

console.log(alumns)*/