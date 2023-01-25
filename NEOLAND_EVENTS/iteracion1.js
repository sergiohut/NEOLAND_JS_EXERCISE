/*1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click*/

const myBtn = document.querySelector("#btnToClick");
myBtn.addEventListener("click", (event) => {
  console.log(
    event
  );
});

/*1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.*/
const myFocus = document.querySelector(".focus");
myFocus.addEventListener("focus", (event) =>
  console.log(
    event.target.value)
);

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const myInput = document.querySelector(".value");
myInput.addEventListener("input", (event) =>
  console.log(
    event.target.value)
);
