const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
  let total = 0;
    for(let i = 0; i < param.length; i++){
    total += param[i]
    }
    return total/param.length;
}

console.log(average(numbers))