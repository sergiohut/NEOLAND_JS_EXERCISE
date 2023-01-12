const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];



  function removeDuplicates(param) {
    for(let i = 0; i < param.length; i++){
        if(param[i] === param[i+1]){
            return param.splice[i]
            }
        }
  }

  console.log(removeDuplicates(duplicates))

/*
  function removeDuplicates(param) {
        for (const item of param){
            if(item === )
        } 
  }


  function removeDuplicates(param) {
    for(let i = 0; i < param.length; i++){
        if(param[i] === param[i+1]){
            param.splice[i]
        }
    } 
}

*/