//7KYU Get the middle character
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 chara
// cters.

function getMiddle(s) {
  let splitArray = s.split("")
  if (splitArray.length % 2 == 0) {
    let removeThisMany = s.length / 2
    for (let i = 0; splitArray.length > 2; i++) {
      splitArray.pop()
      splitArray.shift()
    }
  } else {
    while (splitArray.length > 1) {
      splitArray.pop()
      splitArray.shift()
    }
  }
  return splitArray.join("")
}
