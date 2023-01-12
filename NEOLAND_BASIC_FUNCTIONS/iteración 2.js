const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {
  let longest = "";
  for(avenger of avengers){
    if (avenger.length > longest.length){
      longest = avenger;
    }
  }
        console.log(longest);
}

findLongestWord(avengers);