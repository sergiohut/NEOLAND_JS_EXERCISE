const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];

  function finderName(param, value) {
    let found;
    let indexFound; 
    for (const item of param){
        if(item === value){
            found = true; 
            indexFound = param.indexOf(item)
            return `${found}, esta en la posición ${indexFound} del array`}
        else {
            found = false; 
            return `${found}`;
        }
 
    }
  }
  
  console.log(finderName(nameFinder,'Peter'));

  /*añgp falla