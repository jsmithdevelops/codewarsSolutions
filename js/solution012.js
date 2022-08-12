// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
  //could do a while loop?
  //total sets up way to split each digit until it end
  let total = 1
  let numSplit = String(num).split("") // splits up number into array but its now STRINGS
  console.log(numSplit)
  let firstTry = parseInt(numSplit[0] * numSplit[1])
  if (String(firstTry).length == total) {
    console.log(total)
  }
}

persistence(11)
