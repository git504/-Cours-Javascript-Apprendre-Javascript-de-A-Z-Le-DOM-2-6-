let total = 0;

function addition(x) {
  total += x;
  return total;
}

function soustraction(x) {
  total -= x;
  return total;
}

function division(x) {
  if (total === 0) {
    return (total = x);
  } else {
    total /= x;
    return total;
  }
}

function multiplication(x) {
    if (total === 0){
        return (total = x);
    } else {
        total *= x;
    }
}

function reset () {
    total = 0;
}

//TEST
// console.log(total);
// console.log(reset);
// console.log(addition);
// console.log(soustraction);
// console.log(division);
// console.log(multiplication);