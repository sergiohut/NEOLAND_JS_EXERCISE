const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]

    let listNoCats = [];
    for(toy of toys){
        if(toy.name.includes("gato") == false){
            listNoCats.push(toy.id,toy.name)
        };
    }

    console.log(listNoCats);

    /* Otro compañero propuso hacerlo con slice e indexOf, 
    yo creo que hubiera tirado por ahi porque el enunciado era elimina los objetos,
    no crea un array con todos los objetos que no cumplan esta condición. 
    Pero supongo que se trata también de interpretar los enunciados para que sea más sencillo*/