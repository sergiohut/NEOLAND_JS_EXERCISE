const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {
  let longest = "";
  for(let i = 0; i<param.length; i++){
    if (avengers[i].length > longest.length){
      longest = avengers[i];
    }
  }
       return longest;
}

console.log(findLongestWord(avengers))

/*Me meti en un jardin al no hacer la función para cualquier array
function findLongestWord(param) {
  let longest = "";
  for(avenger of avengers){
    if (avenger.length > longest.length){
      longest = avenger;
    }
  }
        console.log(longest);
}

findLongestWord(avengers);*/
