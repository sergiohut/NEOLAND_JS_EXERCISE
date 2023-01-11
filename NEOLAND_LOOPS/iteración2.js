const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
] 

alumns.forEach((alumn)=>{
	if(alumn.T1 === true && alumn.T2 === true) {alumn.isApproved =true}
	else if (alumn.T1 === true && alumn.T3 === true) {alumn.isApproved =true}
	else if (alumn.T2 === true && alumn.T3 === true) {alumn.isApproved =true}
  	else {{alumn.isApproved =false}}
})

console.log(alumns)



/*Vale, tengo que utilizar el loop forEach, ver que me imprime exactamente. Imprime todos los objetos del array 
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
] 
alumns.forEach((alumn)=>{console.log(alumn)})


/*Conseguir que recorra una propiedad del array de objetos y compruebe su valor
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
] 

alumns.forEach((alumn)=>{if(alumn.T1 === true) {console.log(alumn)}})*/

/*

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
] 

alumns.forEach((alumn)=>{
	if(alumn.T1 === true && alumn.T2 === true) {console.log(alumn)}
	else if (alumn.T1 === true && alumn.T3 === true) {console.log(alumn)}
	else if (alumn.T2 === true && alumn.T3 === true) {console.log(alumn)}
}) */
