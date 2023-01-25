/*2.1 Inserta dinamicamente en un html un div vacio con javascript.*/
document.body.innerHTML+=`
<div></div>`;

const myDiv = document.createElement("div");
document.body.appendChild(myDiv);

/*2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.*/
document.body.innerHTML+=`
<div>
    <p>Insertando dinamicamente con template strings (Ejercicio 2.2)</p>
</div>`;

const myDiv2 = document.createElement("div");
const myP = document.createElement("p");
const pContent = document.createTextNode("Insertando dinamicamente sin template (Ejercicio 2.2)");
myP.appendChild(pContent);
console.log(myP);
myDiv2.appendChild(myP);
console.log(myDiv2);
document.body.appendChild(myDiv2);


/*2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.*/

const myDiv3 = document.createElement("div");

const printSixP = () =>{
const myP3 = document.createElement("p");
const pContent3 = document.createTextNode("seis veces (ejercicio 2.3)");
myP3.appendChild(pContent3);
myDiv3.appendChild(myP3);
document.body.appendChild(myDiv3);
}

for(let i = 1; i<7; i++){
    printSixP();
}

/* También sale si simplemente meto el contenido de la función en el bucle en lugar de declararla pero lo entiendo mejor así. 

/*2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.*/
const myP4 = document.createElement("p");
const pContent4 = document.createTextNode("Soy dinámico (Ejercicio 2.4)");
myP4.appendChild(pContent4);
document.body.appendChild(myP4);

/*2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.*/
const myh2 = document.querySelector('.fn-insert-here ');
const h2Content = document.createTextNode('Wubba Lubba dub dub (Ejercicio 2.5)');
myh2.appendChild(h2Content);

/*2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.*/
const myUl = document.createElement("ul");
document.body.appendChild(myUl);

const accessUl = document.querySelector("ul");

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
for(let i = 0; i<apps.length; i++){
accessUl.innerHTML +=`
<li> ${apps[i]} (Ejercicio 2.6) </li>`;
}



/*apps.forEach(item => {*/

/*2.7 Elimina todos los nodos que tengan la clase .fn-remove-me*/
const accessForRemoval = document.querySelectorAll('.fn-remove-me');

    for (const item of accessForRemoval) {
        item.remove();
    }

/*
const deliting = document.getElementsByClassName('fn-remove-me');

for (const item of deliting) {
    item.remove();
}
for (var i = 0; i < deliting.length; i++) { {
    deliting[i].remove();
    i -=1;
}
}
*/

/*2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.*/
const myDiv8 = document.querySelector("div");
myDiv8.insertAdjacentHTML(
  "beforebegin",
  "<p>Voy en medio!(Ejercicio 2.8)</p>"
);

/*2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here*/
const myDiv9 = document.querySelectorAll("div.fn-insert-here");//accedemos a todos los div que tengan esa clase 
for (const item of myDiv9) {
    item.insertAdjacentHTML(
        "beforebegin",
        "<p>Voy dentro! (Ejercicio 2.9)</p>"
      );
}



/*


Me gustaría ponerme a prueba intentando añadir dinamicamente sin los template 
const emptyDiv = document.createElement("div");
document.appendChild(emptyDiv);

const emptyDiv = document.createElement("div");
document.appendChild(emptyDiv);
const myExercise = document.getElementById('exercise');
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
myExercise.appendChild(para);*/