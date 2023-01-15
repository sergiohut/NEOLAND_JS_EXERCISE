//4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];


const usersName = users.map((user) =>(user.name));
console.log(usersName);


/*4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'*/

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const usersName = users.map(
    (user) =>  {if (user.name[0] === "A"){
       return user.name = "Anacleto"
    } else {
      return user.name}
    });

console.log(usersName);

//Estaba fallando porque se ve que cuando la función flecha es de más de una linea necesita las llaves para que funcione 


/*4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
cuando el valor de la propiedad isVisited = true.*/

const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const citiesName = cities.map (
    (city) => {if (city.isVisited === true){
        return `${city.name}: visitado.`
     } else {return city.name}
    }
);

console.log(citiesName);